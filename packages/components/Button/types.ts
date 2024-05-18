import type { Component } from "vue"

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
}