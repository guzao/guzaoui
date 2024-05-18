import type { Component, Ref } from "vue"

export type NativeType = "button" | "submit" | "reset"

export type ButtonSize = "default" | "large" | "small"

export type ButtonType = "primary" | "success" | "warning" | "danger" | "info"


export interface ButtonProps {
  tag?: string | Component;
  type?: ButtonType;
  size?: ButtonSize;
  plain?: boolean;
  round?: boolean;
  circle?: boolean;
  disabled?: boolean;
  autofocus?: boolean;
  nativeType?: NativeType;
  loading?: boolean;
  icon?: Component;
  loadingIcon?: Component;
  autofoucs?: boolean;
  useThrottle?: boolean;
  throttleDuration?: number;
}


export type ButtonEmits  = {
  (e: 'click', value: MouseEvent): void
}

export interface ButtonInstance {
  ref: Ref<HTMLButtonElement | void>
}