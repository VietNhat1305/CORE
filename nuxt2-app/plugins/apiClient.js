import axios from 'axios'

export const apiClient = axios.create({
  baseURL:
    process.env.API_BASE_URL || 'https://apitest3.dongthap.gov.vn/api/v1/',
  headers: {
    'Content-Type': 'application/json'
    // Authorization: `Bearer ${token}` nếu cần
  }
})
