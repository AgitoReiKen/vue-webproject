<template>
  <div
    class="grid gap-l"
    style="margin: auto; justify-items: center; min-width: 16rem; max-width: 24rem"
  >
    <div>
      <img
        class="avatar-large"
        alt="avatar"
        :src="steamUser['avatarfull']"
        style="outline: 0.5rem solid var(--c-dark-3); width: 12rem"
      />
    </div>
    <div class="widget bg-dark-3" style="min-width: 16rem; justify-content: center">
      <p class="text-m bold">{{ steamUser['personaname'] }}</p>
    </div>
    <XInput
      type="text"
      lclass="text-s c-light-2"
      iclass="text-s c-light-2 padding-s"
      label="SteamID"
      v-model="steamId"
      readonly="true"
    ></XInput>
    <XInput
      type="text"
      lclass="text-s c-light-2"
      iclass="text-s c-light-2 padding-s"
      label="Discord [NOT ATTACHED]"
      v-model="discordId"
      readonly="true"
    ></XInput>
    <div class="column gap-l">
      <XButton
        class="primary bg-purple-2 glow text-m shiny text-uppercase"
        @click="onConnectDiscord"
      >
        <template v-slot:prepend>
          <IconDiscord class="icon size-m" />
        </template>
        <template v-slot:append>Connect discord</template>
      </XButton>
      <XButton
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

export default {
  components: { IconArk, IconDiscord, XInput, XButton },
  name: 'ProfileView',
  setup() {},
  mounted() {
    this.steamSign = this.$cookies.get('steamsign')
    this.steamUser = this.$cookies.get('steamuser')
    this.steamId = this.steamUser['steamid']
  },
  data() {
    return {
      steamId: '',
      discordId: '',
      steamUser: '',
      steamSign: ''
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
