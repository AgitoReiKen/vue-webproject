<template>
  <div class="grid gap-l" style="margin: auto; justify-items: center; max-width: 16rem">
    <div>
      <img
        class="avatar-large"
        alt="avatar"
        :src="steamUser['avatarfull']"
        style="outline: 0.5rem solid var(--c-dark-3); width: 12rem"
      />
    </div>
    <div class="widget bg-dark-3" style="width: 100%; justify-content: center">
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
    <button class="secondary bg-purple-2 glow text-m shiny text-uppercase">
      <IconDiscord class="icon size-m" />
      Attach discord
    </button>
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

export default {
  components: { IconDiscord, XInput, XButton },
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
  }
}
</script>
