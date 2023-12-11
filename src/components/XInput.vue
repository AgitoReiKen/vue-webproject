<template>
  <div class="input">
    <div class="row gap-m" style="align-items: center">
      <slot name="lprepend"></slot>
      <label :class="lclass">
        {{ label }}
      </label>
      <slot name="lappend"></slot>
    </div>
    <input
      :class="iclass"
      :type="type"
      :name="name"
      :value="modelValue"
      @input="onInput"
      @change="onChange"
      :readonly="readonly"
    />
    <div v-for="error of errors" :key="error.$uid">
      <p class="c-red-2 text-s" v-show="!isValid">{{ error.$message }}</p>
    </div>
    <slot name="append"></slot>
  </div>
</template>

<script>
export default {
  name: 'XInput',
  emits: ['update:modelValue'],
  props: {
    type: {
      type: String,
      required: true
    },
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
    },
    errors: {
      type: Array,
      required: false
    },
    readonly: {
      type: Boolean,
      required: false,
      default: false
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
    onInput(event) {
      const val = event.target.value
      this.$emit('update:modelValue', this.type === 'number' ? Number(val) : val)
    },
    onChange(event) {
      console.log(`On change:`, event.target.value)
      if (this.type === 'number') {
        event.target.value = Number(event.target.value)
      }
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>
