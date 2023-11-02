import axios from 'axios'
import * as adminTokenService from './adminTokenService'
const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/v1/clinician/`


export async function postClinician(payload) {
  return axios.post(`${BASE_URL}`, payload, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${adminTokenService.getAdminToken()}`
    }
  })
  .then(response => response)
  .catch(error => {
    console.error('Error with POST request:', error);
    throw error;
  });
}

export async function indexClinicians() {
  return axios.get(`${BASE_URL}`, {
    headers: {
      'Content-Type': 'application/json',
      //'Authorization': `Bearer ${adminTokenService.getAdminToken()}`
    }
  })
  .then(response => response.data)
  .catch(error => {
    console.error('Error with GET request:', error);
    throw error;
  });
}

export async function deleteClinician(id) {
  return axios.delete(`${BASE_URL}/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      //'Authorization': `Bearer ${adminTokenService.getAdminToken()}`
    }
  })
  .then(response => response)
  .catch(error => {
    console.error('Error with GET request:', error);
    throw error;
  });
}

