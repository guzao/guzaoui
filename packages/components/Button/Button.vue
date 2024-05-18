<script setup lang="ts">
import { ref } from 'vue'
import { throttle } from 'lodash-es'
import type { ButtonProps, ButtonEmits, ButtonInstance } from './types'

defineOptions({ name: 'GzButton' })

const props = withDefaults(defineProps<ButtonProps>(), {
  tag: "button",
  nativeType: "button",
  size: 'default',
  useThrottle: false,
  throttleDuration: 500
})

const _ref = ref<HTMLButtonElement>();

const emits = defineEmits<ButtonEmits>()

const handleBtnClick = (e: MouseEvent) => emits('click', e)

const handleBtnThrottleClick = throttle(handleBtnClick, props.throttleDuration)

defineExpose<ButtonInstance>({
  ref: _ref
})

</script>

<template>
  <component ref="_ref" :is="tag" class="gz-button" :type="tag == 'button' ? nativeType : void 0"
    :disabled="disabled || loading ? true : void 0" :class="{
      [`gz-button--${type}`]: type,
      [`gz-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-loading': loading,
      'is-circle': circle,
    }" @click="(e: MouseEvent) => useThrottle ? handleBtnThrottleClick(e) : handleBtnClick(e)">
    <slot />
  </component>
</template>

<style scoped>
@import "./style.css";
</style>