import axios from 'axios'
import * as adminTokenService from './adminTokenService'
const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/v1/admin`


export async function signup(credentials) {
  return axios.post(`${BASE_URL}/signup`, credentials, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => adminTokenService.setAdminToken(response.data.token))
  .catch(error => {
    throw error.response.data.message
  })
}

export async function login(credentials) {
  return axios.post(`${BASE_URL}/login`, credentials, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => adminTokenService.setAdminToken(response.data.token))
  .catch(error => {
    throw error.response.data.message
  })
}

export async function changePassword(credentials) {
  return axios.put(`${BASE_URL}/change-password`, credentials, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${adminTokenService.getAdminToken()}`,
    },
  })
  .then(response => {
    if (response.data.token) {
      adminTokenService.removeAdminToken()
      adminTokenService.setAdminToken(response.data.token)
    }
  })
  .catch(error => {
    console.error('Error with Change Password POST request:', error);
    throw error;
  })
}

export function getAdmin() {
  return adminTokenService.getAdminFromToken()
}

export function logout() {
  adminTokenService.removeAdminToken()
}

