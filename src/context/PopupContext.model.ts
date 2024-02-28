import {
  AlertOptions,
  InputDialogOptions,
  OptionDialogOptions,
  PopupOptions,
} from "@/components/Popup/Popup.model";

import { IToast, ToastOptions } from "@/components/Toast/Toast.model";

export interface IPopupContext {
  component?: () => JSX.Element;
  componentJSX?: JSX.Element;
  componentProps?: React.ComponentProps<any>;
  toasts?: Array<IToast>;
  showModal: (component: JSX.Element, options?: PopupOptions) => void;
  hideModal: () => void;
  showAlert: (options: AlertOptions) => void;
  hideAlert: () => void;
  showOptionDialog: (options: OptionDialogOptions) => void;
  showInputDialog: (options: InputDialogOptions) => void;
  showToast: (options: ToastOptions) => void;
  hideToast: (toastId: string) => void;
}
