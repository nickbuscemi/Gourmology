/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_CLOUDFLARE_ACCOUNT_HASH: string
    readonly VITE_SUPABASE_PUBLIC_KEY: string
    readonly VITE_SUPABASE_SECRET_KEY: string
    readonly VITE_SUPABASE_URL: string
    readonly VITE_SUPABASE_JWT_SECRET: string
    readonly VITE_SUPABASE_DATABASE_CONNECTION_STRING_URI: string
    readonly VITE_SUPABASE_DATABASE_CONNECTION_STRING_NODE: string
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
  