import { jwtDecode } from 'jwt-decode'

function setAdminToken(token) {
  localStorage.setItem('adminToken', token)
  return token
}

function getAdminToken() {
  let token = localStorage.getItem('adminToken')
  if (token) {
    const payload = jwtDecode(token)
    if (payload.exp < Date.now() / 1000) {
      localStorage.removeItem('adminToken')
      token = null
    }
  } else {
    localStorage.removeItem('adminToken')
  }
  return token
}

function getAdminFromToken() {
  const token = getAdminToken()
  return token ? jwtDecode(token).user : null
}

function removeAdminToken() {
  localStorage.removeItem('adminToken')
  return getAdminToken()
}

export { setAdminToken, getAdminToken, getAdminFromToken, removeAdminToken }
