<template>
  <main
    style="
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      align-items: center;
      justify-content: center;
    "
  >
    <p class="bold text-l">Stylesheet</p>
    <div
      class="widget column bg-dark-2 shadow-1"
      style="align-items: center; justify-content: center"
    >
      <div
        class="widget grid bg-dark-3 soft-shadow hard-shadow-hover"
        style="margin: 1rem; place-items: center; gap: 1rem; padding: 1rem"
      >
        <p class="bold c-light-1">Text 1</p>
        <p class="bold c-light-2">Text 2</p>
        <p class="c-light-1 text-underline">underline</p>
        <p class="c-light-1 text-line-through">Line Through</p>
        <p class="c-light-1 text-uppercase">uppercase</p>
        <p class="c-light-1 text-lowercase">LOWERCASE</p>
        <a href="google.com" class="outline-s-hover">Simple Link</a>
        <p class="c-light-1 text-s">Text small</p>
        <p class="c-light-1 text-m">Text medium</p>
        <p class="c-light-1 text-l">Text large</p>
        <p class="c-light-1 text-xl">Text ex-large</p>
        <p class="c-light-1 text-xxl">Text ex-ex-large</p>
      </div>
      <div
        class="widget row bg-dark-4 soft-shadow glow-red-hover"
        style="margin: 1rem; gap: 1rem; padding: 1rem; width: auto"
      >
        <p class="bold c-red-1 soft-shadow">T</p>
        <p class="bold c-yellow-1 soft-shadow">T</p>
        <p class="bold c-green-1 soft-shadow">T</p>
        <p class="bold c-blue-1 soft-shadow">T</p>
        <p class="bold c-purple-1 soft-shadow">T</p>
      </div>
      <div class="widget row" style="margin: 1rem; gap: 1rem; width: auto">
        <div
          class="widget column bg-red-3"
          style="gap: 0.25rem; padding: 0.25rem; align-items: center"
        >
          <div class="widget column bg-red-2" style="padding: 0.25rem 0.5rem">
            <p class="bold hard-shadow">T</p>
          </div>
          <p class="bold">T</p>
        </div>
        <div
          class="widget column bg-yellow-3"
          style="gap: 0.25rem; padding: 0.25rem; align-items: center"
        >
          <div class="widget column bg-yellow-2" style="padding: 0.25rem 0.5rem">
            <p class="bold hard-shadow">T</p>
          </div>
          <p class="bold">T</p>
        </div>
        <div
          class="widget column bg-green-3"
          style="gap: 0.25rem; padding: 0.25rem; align-items: center"
        >
          <div class="widget column bg-green-2" style="padding: 0.25rem 0.5rem">
            <p class="bold hard-shadow">T</p>
          </div>
          <p class="bold">T</p>
        </div>
        <div
          class="widget column bg-blue-3"
          style="gap: 0.25rem; padding: 0.25rem; align-items: center"
        >
          <div class="widget column bg-blue-2" style="padding: 0.25rem 0.5rem">
            <p class="bold hard-shadow">T</p>
          </div>
          <p class="bold">T</p>
        </div>
        <div
          class="widget column bg-purple-3"
          style="gap: 0.25rem; padding: 0.25rem; align-items: center"
        >
          <div class="widget column bg-purple-2" style="padding: 0.25rem 0.5rem">
            <p class="bold hard-shadow">T</p>
          </div>
          <p class="bold">T</p>
        </div>
      </div>
      <div
        class="widget column"
        style="align-items: center; margin: 1rem; gap: 1rem; width: auto; height: auto"
      >
        <button class="primary bg-red-3">Red Dim</button>
        <button class="primary bg-red-2 glow">Red</button>
        <button class="primary bg-red-2 glow shiny">Red Shiny</button>
        <button class="secondary bg-yellow-3 glow">Yellow 2</button>
        <button class="primary bg-green-3 glow">Green</button>
        <button class="secondary bg-blue-3 glow">Blue 2</button>
        <button class="primary bg-purple-3 glow">Purple</button>
        <button class="primary bg-purple-3 glow" disabled>Disabled</button>
        <button class="primary bg-dark-3 shiny">Dark</button>
        <button class="tertiary bg-dark-3" disabled>Disabled</button>
        <button class="tertiary text-m text-uppercase transparent">Transparent</button>
        <button class="tertiary text-m text-uppercase transparent shiny">TShiny</button>
        <button class="tertiary text-m text-uppercase transparent shiny outline-s">TOutline</button>
        <button class="tertiary text-m text-uppercase transparent shiny outline-s-hover">
          TOutline
        </button>
        <button
          class="tertiary text-m text-uppercase transparent shiny outline-m outline-blue-3 outline-blue-2-hover"
        >
          TOutline
        </button>
        <button class="primary bg-purple-2 glow text-l shiny">
          <IconDiscord class="icon size-l" />
          Discord
        </button>
        <button class="primary transparent text-m shiny text-uppercase">
          <IconDiscord class="icon size-m" />
          Discord
        </button>
        <XButton
          :is-loading="IsLoadingButton"
          @click="setLoading"
          bclass="primary transparent text-m shiny text-uppercase"
        >
          <template v-slot:append> Loading on click</template>
        </XButton>
        <XButton
          :is-loading="IsLoadingButton"
          @click="setLoading"
          bclass="primary bg-dark-3 bg-dark-2-hover text-s text-uppercase"
        >
          <template v-slot:append> Loading on click</template>
        </XButton>
        <XButton
          :is-loading="IsLoadingButton"
          @click="setLoading"
          bclass="primary bg-red-3 bg-red-2-hover glow text-s text-uppercase"
        >
          <template v-slot:append> Loading on click</template>
        </XButton>
      </div>
      <div
        class="widget column"
        style="align-items: center; margin: 1rem; gap: 1rem; width: auto; height: auto"
      >
        <div class="tooltip size-s">
          <span class="tooltip-content text-s">
            In C++, passing references to static variables between DLLs can be tricky due to issues
            related to memory management and linkage. When you export a function from a DLL, it
            generally works with its own instance of static variables, and passing references
            directly might lead to complications.
          </span>
          <XInput
            v-model="v$.NumberValue.$model"
            type="number"
            lclass="text-s text-uppercase"
            iclass=""
            label="Number"
            style="max-width: 24rem"
            :errors="v$.NumberValue.$errors"
          >
            <template v-slot:lappend>
              <IconTooltip class="icon size-xss c-light-1"></IconTooltip>
            </template>
            <template v-slot:append>
              <p class="text-s c-light-2">
                This is an example of an input with some dynamic information passed such like icon
                and text over here.
              </p>
            </template>
          </XInput>
        </div>
        <div class="tooltip size-xs">
          <span class="tooltip-content text-s">
            <div class="row gap-l" style="justify-content: center; align-items: center">
              <span> Some text with a<a href="google.com">Link</a> </span>
              <button class="tertiary transparent c-purple-1 outline-s">Button</button>
            </div>
          </span>
        </div>
        <XInput
          v-model="v$.PasswordValue.$model"
          type="password"
          lclass="text-s text-uppercase"
          iclass=""
          label="Password"
          style="width: 100%"
          :errors="v$.PasswordValue.$errors"
        >
        </XInput>
        <XInput
          v-model="TextValue"
          type="text"
          lclass="text-s text-uppercase"
          iclass=""
          label="Text"
          style="width: 100%"
        >
        </XInput>
        <XCheckbox
          v-model="BoolValue"
          lclass="text-s"
          label="Wanna see a checkbox?
          Wanna see a checkbox?
          Wanna see a checkbox?
          Wanna see a checkbox?
          Wanna see a checkbox?
          Wanna see a checkbox?
          Wanna see a checkbox? "
          style="max-width: 24rem"
        ></XCheckbox>
      </div>
    </div>
  </main>
</template>

<script>
import IconDiscord from '@/components/icons/IconDiscord.vue'
import XInput from '@/components/XInput.vue'
import XButton from '@/components/XButton.vue'
import IconTooltip from '@/components/icons/IconTooltip.vue'

import { useVuelidate } from '@vuelidate/core'
import { between, numeric, required, minLength, helpers } from '@vuelidate/validators'
import { computed, reactive, watch } from 'vue'
import XCheckbox from '@/components/XCheckbox.vue'

function isGoodPassword(text) {
  return new RegExp(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$/).test(text)
}

export default {
  components: { XCheckbox, IconDiscord, XInput, XButton, IconTooltip },
  setup() {
    return {
      v$: useVuelidate()
    }
  },
  data() {
    return {
      NumberValue: 1,
      PasswordValue: 'pa$$word',
      TextValue: '',
      BoolValue: false,
      IsLoadingButton: false
    }
  },
  methods: {
    setLoading() {
      this.IsLoadingButton = !this.IsLoadingButton
      console.log(`Set Is Loading ${this.IsLoadingButton}`)
    }
  },
  watch: {
    BoolValue: {
      handler(newValue, oldValue) {
        console.log(`BoolValue: new ${newValue} | old ${oldValue}`)
      }
    }
  },
  validations: {
    NumberValue: { required, numeric, between: between(0, 100) },
    PasswordValue: {
      required,
      goodPassword: helpers.withMessage(() => 'Password is bad', isGoodPassword)
    }
  }
}
</script>
