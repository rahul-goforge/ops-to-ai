// =============================================
// ops-to-ai Supabase Configuration
// =============================================
// INSTRUCTIONS:
// 1. Go to your Supabase project → Settings → API Keys → Legacy tab
// 2. Replace the values below with your actual keys
// 3. Commit this file to your GitHub repo
// =============================================

const SUPABASE_URL = 'https://elvleqiqviaecshflrzk.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVsdmxlcWlxdmlhZWNzaGZscnprIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIwMzk0OTIsImV4cCI6MjA5NzYxNTQ5Mn0.S42kd5HQPFpH1t1oEuuuvVfzY_PakfTH4CYzjhfQIVc';

// Initialize Supabase client
let supabaseClient = null;

function getSupabase() {
  if (supabaseClient) return supabaseClient;

  // Check if Supabase JS loaded
  if (typeof window.supabase === 'undefined') {
    console.warn('[ops-to-ai] Supabase JS library not loaded. Features disabled.');
    return null;
  }

  // Check if keys are configured
  if (SUPABASE_URL.includes('YOUR_PROJECT_ID') || SUPABASE_ANON_KEY.includes('YOUR_ANON_KEY')) {
    console.warn('[ops-to-ai] Supabase not configured. Edit config.js with your keys.');
    return null;
  }

  try {
    // Supabase JS v2 UMD exposes createClient on the supabase object
    var createFn = window.supabase.createClient || (window.supabase.default && window.supabase.default.createClient);
    if (!createFn) {
      console.error('[ops-to-ai] Cannot find createClient. Supabase JS version mismatch.');
      return null;
    }
    supabaseClient = createFn(SUPABASE_URL, SUPABASE_ANON_KEY);
    console.log('[ops-to-ai] Supabase connected to', SUPABASE_URL);
    return supabaseClient;
  } catch (err) {
    console.error('[ops-to-ai] Supabase init error:', err);
    return null;
  }
}

// Auth helpers
async function getUser() {
  var sb = getSupabase();
  if (!sb) return null;
  try {
    var result = await sb.auth.getUser();
    return result.data.user;
  } catch (e) {
    console.error('[ops-to-ai] getUser error:', e);
    return null;
  }
}

async function signInWithGitHub() {
  var sb = getSupabase();
  if (!sb) {
    alert('Supabase is not configured yet. Please add your keys to config.js');
    return;
  }
  try {
    await sb.auth.signInWithOAuth({
      provider: 'github',
      options: { redirectTo: window.location.origin + window.location.pathname }
    });
  } catch (e) {
    console.error('[ops-to-ai] GitHub sign-in error:', e);
    alert('Sign in failed: ' + e.message);
  }
}

async function signOut() {
  var sb = getSupabase();
  if (!sb) return;
  await sb.auth.signOut();
  window.location.reload();
}

async function getUserProfile(userId) {
  var sb = getSupabase();
  if (!sb) return null;
  try {
    var result = await sb.from('profiles').select('*').eq('id', userId).single();
    return result.data;
  } catch (e) {
    return null;
  }
}


// Clean up OAuth tokens from URL after Supabase processes them
if (window.location.hash && window.location.hash.includes('access_token')) {
  // Wait for Supabase to read the token, then clean the URL
  setTimeout(function() {
    history.replaceState(null, '', window.location.pathname + window.location.search);
  }, 500);
}
