<template>
  <main
    class="column"
    style="width: 100%; height: 100%; align-items: center; justify-content: center"
  >
    <XButton
      :is-loading="isButtonLoading"
      class="primary transparent text-m shiny text-uppercase"
      @click="login"
    >
      <template v-slot:prepend>
        <IconDiscord class="icon size-m" />
      </template>
      <template v-slot:append>Login via Steam</template>
    </XButton>
  </main>
</template>

<script>
import IconDiscord from '@/components/icons/IconDiscord.vue'
import XButton from '@/components/XButton.vue'
import router from '@/router'

export default {
  components: { XButton, IconDiscord },
  data() {
    return {
      isButtonLoading: false
    }
  },
  methods: {
    async login() {
      if (this.isButtonLoading) return
      this.isButtonLoading = true
      window.location.href = 'https://localhost:8000/auth/steam'
      this.isButtonLoading = false
    }
  }
}
</script>
