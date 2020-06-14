import Cookies from 'universal-cookie'
const cookies = new Cookies()

export function setToken (token) {
  cookies.set('token', token, { path: '/' })
}

export function resetToken (token) {
  cookies.remove('token', { path: '/' })
  cookies.remove('csrf_token', { path: '/' })
}