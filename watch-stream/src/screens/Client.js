
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qabzqgzkffnsipugnfhk.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFhYnpxZ3prZmZuc2lwdWduZmhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk2NjUyODMsImV4cCI6MjAwNTI0MTI4M30.hx4NKnxNfaI7ugskvNqzZbilRTfRgNeu-ogv3PxzZkQ'
export const supabase = createClient(supabaseUrl, supabaseKey)