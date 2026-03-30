'use server'

import { createClient } from '@/utils/supabase/server'

export type ProjectFilterTag = 'Design' | 'Dev' | (string & {});

export async function getProjects(tagFilter?: ProjectFilterTag) {
  const supabase = await createClient()

  let query = supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false })

  if (tagFilter) {
    query = query.contains('tags', [tagFilter])
  }

  const { data, error } = await query

  if (error) {
    console.error('Error fetching projects:', error)
    return { data: null, error: error.message }
  }

  return { data, error: null }
}
