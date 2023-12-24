<template>
  <main
    class="column"
    style="width: 100%; height: 100%; align-items: center; justify-content: center"
  >
    <p>{{ message }}</p>
  </main>
</template>

<script>
import { useRoute, useRouter } from 'vue-router'
import * as jose from 'jose'
import { useAuthStore } from '@/stores/auth'
import { ref } from 'vue'

export default {
  setup() {
    const route = useRoute()
    const router = useRouter()
    const token = route.query.token
    const auth = useAuthStore()
    const message = ref('')

    if (!auth.setToken(token)) {
      auth.removeToken()
      message.value = 'Authorization failed. Redirecting to login...'
      setTimeout(() => {
        router.push('/')
      }, 3000)
      return
    }
    if (auth.isExpired()) {
      auth.removeToken()
      message.value = 'Authorization is expired. Check if your time is set correctly.'
      return
    }

    message.value = 'Successfully authorized. Redirecting to app...'
    router.push('/profile')
    return {
      message
    }
  },
  methods: {}
}
</script>