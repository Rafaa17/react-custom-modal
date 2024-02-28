import { ValidationOptions } from "@/components/Popup/Popup.validation.model";

export interface PopupOptions {
  animationType?: AnimationType;
  outAnimationType?: OutAnimationType;
  timeoutDuration?: number;
  allowOutsideClick?: boolean;
  allowCloseOnEscKey?: boolean;
  onDismissed?: () => void;
}

export enum AnimationType {
  FADE_IN = "fadeIn",
  FADE_IN_UP = "fadeInUp",
  FLASH = "flash",
  HEART_BEAT = "heartBeat",
  SLIDE_IN_LEFT = "slideInLeft",
  SLIDE_IN_RIGHT = "slideInRight",
  SLIDE_IN_UP = "slideInUp",
  SWING = "swing",
  ZOOM_IN = "zoomIn",
}

export enum OutAnimationType {
  FADE_OUT = "fadeOut",
  SLIDE_OUT_LEFT = "slideOutLeft",
  SLIDE_OUT_RIGHT = "slideOutRight",
  SLIDE_OUT_UP = "slideOutUp",
  ZOOM_OUT = "zoomOut",
}

export interface AlertOptions extends PopupOptions {
  confirmText?: string;
  containerStyle?: React.CSSProperties;
  footerStyle?: React.CSSProperties;
  headerStyle?: React.CSSProperties;
  headerTextStyle?: React.CSSProperties;
  showCloseButton?: boolean;
  text?: string;
  textStyle?: React.CSSProperties;
  title?: string;
  type?: PopupType;
  bodyComponent?: JSX.Element;
  customIcon?: () => JSX.Element;
}

export interface InputDialogOptions extends PopupOptions {
  cancelText?: string;
  confirmText?: string;
  containerStyle?: React.CSSProperties;
  footerStyle?: React.CSSProperties;
  headerStyle?: React.CSSProperties;
  headerTextStyle?: React.CSSProperties;
  errorMessageStyle?: React.CSSProperties;
  input?: InputProps | ImageInputProps;
  inputs?: Array<InputProps | ImageInputProps>;
  onCancel?: () => void;
  onConfirm?: (result: { [key: string]: any }) => void;
  options?: Array<OptionDialogButton>;
  showCloseButton?: boolean;
  text?: string;
  textStyle?: React.CSSProperties;
  title?: string;
  type?: PopupType;
  customIcon?: () => JSX.Element;
}

export interface InputProps {
  validation?: ValidationOptions;
  default?: string | Date | number;
  inputType: "text" | "file" | "number" | "textarea" | "date" | "image";
  label?: string;
  /*
          The name that will be used in the response to read the value
       */
  name: string;
  placeholder?: string;
}

export interface ImageInputProps extends InputProps {
  inputType: "image";
  multiple?: boolean;
}

export interface OptionDialogOptions {
  animationType?: AnimationType;
  outAnimationType?: OutAnimationType;
  cancelText?: string;
  confirmText?: string;
  containerStyle?: React.CSSProperties;
  footerStyle?: React.CSSProperties;
  headerStyle?: React.CSSProperties;
  headerTextStyle?: React.CSSProperties;
  onCancel?: () => void;
  onConfirm?: () => void;
  options?: Array<OptionDialogButton>;
  showCloseButton?: boolean;
  text?: string;
  textStyle?: React.CSSProperties;
  title?: string;
  type?: PopupType;
  bodyComponent?: JSX.Element;
  allowOutsideClick?: boolean;
  allowCloseOnEscKey?: boolean;
  customIcon?: () => JSX.Element;
}

export enum PopupType {
  WARNING = "warning",
  INFO = "info",
  DANGER = "danger",
  SUCCESS = "success",
}

export interface OptionDialogButton {
  name: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  type?: "confirm" | "cancel";
}
