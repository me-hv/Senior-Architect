export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      leads: {
        Row: {
          id: string
          name: string
          email: string
          project_type: string
          description: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          project_type: string
          description: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          project_type?: string
          description?: string
          created_at?: string
        }
        Relationships: []
      }
      projects: {
        Row: {
          id: string
          title: string
          description: string | null
          tags: string[] | null
          image_url: string | null
          live_url: string | null
          github_url: string | null
          created_at: string
        }
        Insert: {
          id?: string
          title: string
          description?: string | null
          tags?: string[] | null
          image_url?: string | null
          live_url?: string | null
          github_url?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string | null
          tags?: string[] | null
          image_url?: string | null
          live_url?: string | null
          github_url?: string | null
          created_at?: string
        }
        Relationships: []
      }
      blog_posts: {
        Row: {
          id: string
          title: string
          slug: string
          content: string | null
          cover_image: string | null
          published: boolean | null
          published_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          slug: string
          content?: string | null
          cover_image?: string | null
          published?: boolean | null
          published_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          slug?: string
          content?: string | null
          cover_image?: string | null
          published?: boolean | null
          published_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
