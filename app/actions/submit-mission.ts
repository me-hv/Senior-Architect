'use server'

import { createClient } from '@/utils/supabase/server'

export async function submitMission(formData: FormData) {
  const name = formData.get('name')?.toString()
  const email = formData.get('email')?.toString()
  const project_type = formData.get('project_type')?.toString()
  const description = formData.get('description')?.toString()

  if (!name || !email || !project_type || !description) {
    return { error: 'All fields are required to initiate mission.' }
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!url || !key) {
    console.warn('⚠️ SUPABASE KEYS MISSING. Mocking submission:')
    console.log('Lead Data:', { name, email, project_type, description })
    return { success: true }
  }

  const supabase = await createClient()

  // 1. Insert into Supabase
  const { error: dbError } = await supabase
    .from('leads')
    .insert([{ name, email, project_type, description }])

  if (dbError) {
    console.error('Supabase Error:', dbError)
    return { error: 'Failed to submit mission to the database.' }
  }

  // 2. Optional: Send Email Notification via Resend (Requires RESEND_API_KEY inside .env.local)
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
          to: [email], // Notice: On Resend free tier you can only send to your own registered email address
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
      console.error('Resend Error:', emailError)
      // Do not return error to user if email fails, DB insert was successful
    }
  }

  return { success: true }
}
