<template>
  <div class="checkbox gap-m">
    <div class="row gap-m" style="align-items: center">
      <slot name="lprepend"></slot>
      <label :class="lclass">
        {{ label }}
      </label>
      <slot name="lappend"></slot>
    </div>
    <input :class="iclass" type="checkbox" :name="name" :value="modelValue" @change="onChange" />
    <slot name="append"></slot>
  </div>
</template>

<script>
export default {
  name: 'XCheckbox',
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: undefined,
      required: true
    },
    label: {
      type: String,
      required: false
    },
    iclass: {
      type: String,
      required: false
    },
    lclass: {
      type: String,
      required: false
    },
    lprepend: {
      type: String,
      required: false
    },
    lappend: {
      type: String,
      required: false
    },
    append: {
      type: String,
      required: false
    }
  },
  computed: {
    name() {
      return this.label.toLowerCase()
    }
  },
  data() {
    return {}
  },
  methods: {
    onChange(event) {
      console.log(`On change:`, event.target.value)
      this.$emit('update:modelValue', Boolean(event.target.value))
    }
  }
}
</script>
