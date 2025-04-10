import { apiClient } from '@/plugins/apiClient'
const controller = 'LoDat'

export const state = () => ({
  reloadAuthUser: false
})
export const namespaced = true

export const mutations = {
  SET_RELOADAUTHUSER(state, newValue) {
    state.reloadAuthUser = newValue
  }
}

export const actions = {
  async getAll() {
    return await apiClient.get(`${controller}/get-all-core`)
  },
  async getPagingParams(_, params) {
    return await apiClient.post(`${controller}/get-paging-params-core`, params)
  }
  // ... các hàm khác tương tự
}
