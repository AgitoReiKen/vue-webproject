<template>
  <div
    class="grid gap-l"
    style="margin: auto; justify-items: center; min-width: 16rem; max-width: 24rem"
  >
    <div>
      <img
        class="avatar-large"
        alt="avatar"
        :src="auth.AvatarUrl"
        style="outline: 0.5rem solid var(--c-dark-3); width: 12rem"
      />
    </div>
    <div class="widget bg-dark-3" style="min-width: 16rem; justify-content: center">
      <p class="text-m bold">{{ auth.Name }}</p>
    </div>
    <XInput
      type="text"
      lclass="text-s c-light-2"
      iclass="text-s c-light-2 padding-s"
      label="SteamID"
      v-model="auth.SteamId"
      :readonly="true"
    ></XInput>
    <XInput
      type="text"
      lclass="text-s c-light-2"
      iclass="text-s c-light-2 padding-s"
      label="Discord"
      v-model="auth.DiscordId"
      :readonly="true"
    ></XInput>
    <div class="column gap-l">
      <XButton
        v-if="!hasDiscord"
        class="primary bg-purple-2 glow text-m shiny text-uppercase"
        @click="onConnectDiscord"
      >
        <template v-slot:prepend>
          <IconDiscord class="icon size-m" />
        </template>
        <template v-slot:append>Connect discord</template>
      </XButton>
      <XButton
        v-if="!hasAsa"
        class="primary bg-green-2 glow text-m shiny text-uppercase"
        style="width: 100%"
        @click="onConnectArk"
      >
        <template v-slot:prepend>
          <IconArk class="icon size-m" />
        </template>
        <template v-slot:append>Connect ark</template>
      </XButton>
    </div>
  </div>
</template>
<style scoped>
img.avatar-large::before {
  content: '';
  display: block;
  background: red;
}
</style>
<script>
import XInput from '@/components/XInput.vue'
import XButton from '@/components/XButton.vue'
import IconDiscord from '@/components/icons/IconDiscord.vue'
import IconArk from '@/components/icons/IconArk.vue'
import { useAuthStore } from '@/stores/auth'

export default {
  components: { IconArk, IconDiscord, XInput, XButton },
  name: 'ProfileView',
  setup() {
    const auth = useAuthStore()
    return {
      auth: auth.data
    }
  },
  data() {
    return {}
  },
  computed: {
    hasAsa: {
      get() {
        return this.auth.AsaEosId.length !== 0
      }
    },
    hasDiscord: {
      get() {
        return this.auth.DiscordId.length !== 0
      }
    }
  },
  methods: {
    onConnectArk() {
      console.log('onConnectArk')
    },
    onConnectDiscord() {
      console.log('onConnectDiscord')
    }
  }
}
</script>
