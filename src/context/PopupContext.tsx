import { createContext } from "react";
import { IPopupContext } from "./PopupContext.model";

import {
  PopupOptions,
  AlertOptions,
  OptionDialogOptions,
  InputDialogOptions,
} from "@/components/Popup/Popup.model";

import { ToastOptions } from "@/components/Toast/Toast.model";

const defaultValues: IPopupContext = {
  showModal: (_component: JSX.Element, _options?: PopupOptions) => null,
  hideModal: () => null,
  showAlert: (_options: AlertOptions) => null,
  hideAlert: () => null,
  showOptionDialog: (_options: OptionDialogOptions) => null,
  showInputDialog: (_options: InputDialogOptions) => null,
  showToast: (_options: ToastOptions) => null,
  hideToast: (_toastId: string) => null,
};

export const PopupContext = createContext<IPopupContext>(defaultValues);
