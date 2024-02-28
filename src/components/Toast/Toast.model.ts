import { PopupType } from "@/components/Popup/Popup.model";

export interface ToastOptions {
  containerStyle?: React.CSSProperties;
  customComponent?: JSX.Element;
  position?: ToastPosition;
  text?: string;
  textStyle?: React.CSSProperties;
  timeoutDuration?: number;
  type: PopupType;
  showCloseButton?: boolean;
  showProgress?: boolean;
  progressColor?: string;
  customIcon?: () => JSX.Element;
}

export enum ToastPosition {
  TOP_RIGHT = "top-right",
  TOP_LEFT = "top-left",
  TOP_CENTER = "top-center",
  BOTTOM_RIGHT = "bottom-right",
  BOTTOM_CENTER = "bottom-center",
  BOTTOM_LEFT = "bottom-left",
}

export const DefaultToastPosition = ToastPosition.BOTTOM_RIGHT;

export type IToast = ToastOptions & { id: string };
