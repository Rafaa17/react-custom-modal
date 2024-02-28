import {
  AlertOptions,
  InputDialogOptions,
  OptionDialogOptions,
  PopupOptions,
} from "@/components/Popup/Popup.model";

import { IToast, ToastOptions } from "@/components/Toast/Toast.model";
import { IPopupContext } from "@/context/PopupContext.model";

export const PopupReducer = (
  state: any,
  {
    type,
    component,
    componentProps,
    componentJSX,
    toast,
    id,
  }: {
    type: "openModal" | "hideModal" | "showToast" | "hideToast";
    componentJSX?: JSX.Element;
    component?: any;
    componentProps?: any;
    toast?: IToast;
    id?: string;
  }
) => {
  switch (type) {
    case "openModal":
      return { ...state, component, componentProps, componentJSX };
    case "hideModal":
      return { ...state, component: null, modalProps: {}, componentJSX: null };
    case "showToast":
      return { ...state, toasts: [...state.toasts, toast], componentProps };
    case "hideToast":
      const index = state.toasts.findIndex(
        (t: { id: string | undefined }) => t.id === id
      );
      return {
        ...state,
        toasts: [
          ...state.toasts.slice(0, index),
          ...state.toasts.slice(index + 1),
        ],
      };
    default:
      throw new Error("Unspecified reducer action");
  }
};

let DefaultPopupActions: IPopupContext = {
  showModal: (_component: JSX.Element, _options?: PopupOptions) => null,
  hideModal: () => null,
  showAlert: (_options: AlertOptions) => null,
  hideAlert: () => null,
  showOptionDialog: (_options: OptionDialogOptions) => null,
  showInputDialog: (_options: InputDialogOptions) => null,
  showToast: (_options: ToastOptions) => null,
  hideToast: (_toastId: string) => null,
};

let ExportedPopupActions: Omit<
  IPopupContext,
  "componentProps" | "component" | "componentJSX" | "toasts"
> = {
  ...DefaultPopupActions,
};

export { ExportedPopupActions as PopupActions };
