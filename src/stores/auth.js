import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import * as jose from 'jose'

export const useAuthStore = defineStore('auth', () => {
  const token = ref('')
  const data = ref({
    Name: '',
    SteamId: '',
    DiscordId: '',
    AsaEosId: '',
    AvatarUrl: '',
    jti: '',
    exp: 0
  })
  const lsJwt = localStorage.getItem('jwt')
  if (lsJwt != null) {
    setToken(lsJwt)
    if (isExpired()) {
      removeToken()
    }
  }

  function setToken(jwtToken) {
    token.value = jwtToken
    localStorage.setItem('jwt', token.value)
    try {
      data.value = jose.decodeJwt(jwtToken)
      data.value['Name'] = data.value['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name']
      localStorage.setItem('jwt_data', JSON.stringify(data.value))
      return true
    } catch (e) {
      console.error(e)
    }
    return false
  }

  function isExpired() {
    return Date.now() >= data.value['exp'] * 1000
  }

  function removeToken() {
    token.value = ''
    data.value = {
      Name: '',
      SteamId: '',
      DiscordId: '',
      AsaEosId: '',
      AvatarUrl: '',
      jti: '',
      exp: 0
    }
    localStorage.removeItem('jwt')
    localStorage.removeItem('jwt_data')
  }

  function auth() {
    window.location = 'https://85.175.4.154:7788/api/user/steam'
  }

  function validate() {
    if (isExpired() || token.value.length === 0) {
      auth()
      return false
    }
    return true
  }

  return { token, data, setToken, removeToken, isExpired, validate }
})
