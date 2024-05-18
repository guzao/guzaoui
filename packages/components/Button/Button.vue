<script setup lang="ts">
import { ref, useSlots } from 'vue'
import type { ButtonProps } from './types'

defineOptions({
  name: 'GzButton'
})

const props = withDefaults(defineProps<ButtonProps>(), {
  tag: "button",
  nativeType: "button",
  size: 'default',
})

const _ref = ref<HTMLButtonElement>();

const slot = useSlots()

</script>

<template>
  <component 
  ref="_ref"
  :is="tag"
  class="gz-button"
  :type="tag == 'button' ? nativeType : void 0 "
  :disabled="disabled || loading ? true : void 0"
  :class="{
    [`gz-button--${type}`]: type,
    [`gz-button--${size}`]: size,
    'is-plain': plain,
    'is-round': round,
    'is-loading': loading,
    'is-circle': circle,
  }"
  >
    <slot />
  </component>
</template>

<style scoped>
@import "./style.css";
</style>