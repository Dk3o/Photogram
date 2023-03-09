import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://uwrcxxfeebaodvwckvov.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV3cmN4eGZlZWJhb2R2d2Nrdm92Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgzODcyNzgsImV4cCI6MTk5Mzk2MzI3OH0.TLACPGyAP1b_RxtI9ITga2g0MwNHgVr-gIVlnL_bWxc"
export const supabase = createClient(supabaseUrl, supabaseKey)