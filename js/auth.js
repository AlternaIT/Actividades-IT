async function requireAuth() {
  const { data: { session } } = await supabaseClient.auth.getSession();
  if (!session) {
    window.location.href = "index.html";
    return null;
  }
  return session;
}

async function signOut() {
  await supabaseClient.auth.signOut();
  window.location.href = "index.html";
}
