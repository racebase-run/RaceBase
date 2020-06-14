// middleware/auth.js

export default function({ store, redirect }) {
  let isLoggedIn = store.getters['auth/isLoggedIn']

  if (!isLoggedIn)
    return redirect('/login')
}