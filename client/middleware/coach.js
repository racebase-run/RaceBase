// middleware/auth.js

export default function({ store, redirect }) {
  let isLoggedIn = store.getters['auth/isLoggedIn']
  store.dispatch('auth/fetchUser')
  let user = { ...store.state.auth.user }

  if (!user.coach || !isLoggedIn)
    return redirect('/login')
}