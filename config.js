// =============================================
// ops-to-ai Supabase Configuration
// =============================================
// INSTRUCTIONS:
// 1. Go to your Supabase project → Settings → API
// 2. Replace the values below with your actual keys
// 3. Commit this file to your GitHub repo
// 
// The "anon" key is SAFE to expose publicly because
// Row Level Security (RLS) protects your data.
// =============================================

const SUPABASE_URL = 'https://elvleqiqviaecshflrzk.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVsdmxlcWlxdmlhZWNzaGZscnprIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIwMzk0OTIsImV4cCI6MjA5NzYxNTQ5Mn0.S42kd5HQPFpH1t1oEuuuvVfzY_PakfTH4CYzjhfQIVc';

// Initialize Supabase client (loaded via CDN in HTML files)
let supabaseClient = null;

function getSupabase() {
  if (!supabaseClient && typeof window.supabase !== 'undefined') {
    supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }
  return supabaseClient;
}

// Auth helpers
async function getUser() {
  const sb = getSupabase();
  if (!sb) return null;
  const { data: { user } } = await sb.auth.getUser();
  return user;
}

async function signInWithGitHub() {
  const sb = getSupabase();
  if (!sb) return;
  await sb.auth.signInWithOAuth({
    provider: 'github',
    options: { redirectTo: window.location.origin + window.location.pathname }
  });
}

async function signOut() {
  const sb = getSupabase();
  if (!sb) return;
  await sb.auth.signOut();
  window.location.reload();
}

async function getUserProfile(userId) {
  const sb = getSupabase();
  if (!sb) return null;
  const { data } = await sb.from('profiles').select('*').eq('id', userId).single();
  return data;
}
