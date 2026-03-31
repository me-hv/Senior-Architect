'use server'

import { createClient } from '@/utils/supabase/server'
import { appendFile } from 'fs/promises'
import { join } from 'path'

export async function submitMission(formData: FormData) {
  const name = formData.get('name')?.toString()
  const email = formData.get('email')?.toString()
  const project_type = formData.get('project_type')?.toString()
  const description = formData.get('description')?.toString()

  if (!name || !email || !project_type || !description) {
    return { error: 'All fields are required to initiate mission.' }
  }

  const payload = {
    name,
    email,
    project_type,
    description
  }

  // ─── CONNECTION DIAGNOSTICS ────────────────────────────────────────────────
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const pubKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  const key = pubKey || anonKey

  console.log('📡 [MISSION CONTROL] Connection attempt initiated.')
  console.log(' - URL:', url ? 'FOUND' : 'MISSING')
  console.log(' - KEY:', key ? `FOUND (${key.substring(0, 15)}...)` : 'MISSING')

  const saveLocally = async (reason: string) => {
    try {
      const filePath = join(process.cwd(), 'missions.json')
      const entry = JSON.stringify(payload, null, 2) + ',\n'
      await appendFile(filePath, entry)
      console.log(`✅ [FALLBACK] Saved mission to missions.json. Reason: ${reason}`)
      return { success: true, local: true }
    } catch (e) {
      console.error('❌ [FATAL] Local fallback also failed:', e)
      return { error: 'Mission synchronization failed completely.' }
    }
  }

  // Check if keys are placeholders or missing
  const isPlaceholder = !url || !key || url.includes('placeholder') || key.includes('your-anon-key')

  if (isPlaceholder) {
    console.warn('⚠️ [CONNECTIVITY] Supabase credentials are not configured. Using local fallback.')
    return await saveLocally('SUPABASE_NOT_CONFIGURED')
  }

  try {
    const supabase = await createClient()
    console.log('🚀 [TRANSMITTING] Sending mission to Supabase...')

    const { error: dbError } = await supabase
      .from('leads')
      .insert([payload])

    if (dbError) {
      console.error('❌ [DATABASE ERROR] Submission rejected by Supabase.')
      console.error(' - Message:', dbError.message)
      console.error(' - Code:', dbError.code)
      console.error(' - Hint:', dbError.hint)
      
      console.warn('🔄 [RECOVERY] Attempting local fallback...')
      return await saveLocally(`SUPABASE_DB_ERROR: ${dbError.message}`)
    }

    console.log('✨ [SUCCESS] Mission successfully locked into Supabase database.')

    // ─── OPTIONAL NOTIFICATIONS ─────────────────────────────────────────────
    const resendApiKey = process.env.RESEND_API_KEY
    if (resendApiKey) {
      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${resendApiKey}`
          },
          body: JSON.stringify({
            from: 'Mission Control <onboarding@resend.dev>',
            to: [email],
            subject: `[NEW MISSION] Inquiry from ${name}`,
            html: `
              <h2>New Mission Initiated</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Type:</strong> ${project_type}</p>
              <p><strong>Brief:</strong><br/>${description}</p>
            `
          })
        })
      } catch (emailError) {
        console.error('📧 [NOTIFICATION ERROR] Resend transmission failed:', emailError)
      }
    }

    return { success: true }
  } catch (error: any) {
    console.error('🔥 [CRITICAL] Unexpected error during transmission:', error.message)
    return await saveLocally(`UNEXPECTED_ERROR: ${error.message}`)
  }
}
