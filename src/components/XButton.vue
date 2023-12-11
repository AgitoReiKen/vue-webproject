<template>
  <div>
    <button
      :class="bclass"
      @click="onClick"
      style="display: flex; align-items: center; justify-content: center"
    >
      <span
        class="gap-m"
        :style="{
          transition: 'opacity var(--transition-fast-time) var(--transition-ease-out-cubic)',
          display: 'flex',
          'align-items': 'center',
          'justify-content': 'center',
          opacity: isLoading ? 0 : 1
        }"
      >
        <slot name="prepend"></slot>
        <slot name="append" />
      </span>
      <span
        :style="{
          transition: 'opacity var(--transition-fast-time) var(--transition-ease-out-cubic)',
          opacity: isLoading ? 1 : 0,
          position: 'absolute',
          left: 'calc(50% - 16px)'
        }"
      >
        <IconLoading></IconLoading>
      </span>
    </button>
  </div>
</template>
<script>
import IconLoading from '@/components/icons/IconLoading.vue'

export default {
  components: { IconLoading },
  emits: ['click'],
  props: {
    bclass: {
      type: String,
      required: true
    },
    isLoading: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    onClick() {
      console.log('onclick')
      this.$emit('click')
    }
  }
}
</script>
