import Dialog from "@/components/Popup/Dialog";
import { PopupRoot } from "@/components/Popup/Popup";
import {
  AlertOptions,
  InputDialogOptions,
  OptionDialogOptions,
  PopupOptions,
} from "@/components/Popup/Popup.model";
import {
  DefaultToastPosition,
  ToastOptions,
} from "@/components/Toast/Toast.model";
import { PopupReducer } from "@/hooks/usePopupReducer";
import React, { useReducer } from "react";
import { PopupContext } from "./context/PopupContext";
import { IPopupContext } from "./context/PopupContext.model";

export const PopupProvider = ({ children }: { children: any }) => {
  const initialState: IPopupContext = {
    componentJSX: undefined,
    component: undefined,
    componentProps: {},
    toasts: [],
    showModal: (componentJSX: JSX.Element, options?: PopupOptions) => {
      dispatch({
        type: "openModal",
        componentJSX,
        componentProps: { ...options },
      });
    },
    hideModal: () => {
      dispatch({ type: "hideModal" });
    },
    showAlert: (options: AlertOptions) => {
      dispatch({
        type: "openModal",
        component: Dialog,
        componentProps: { isAlert: true, isInputDialog: false, ...options },
      });
    },
    hideAlert: () => {
      dispatch({ type: "hideModal" });
    },
    showOptionDialog: (options: OptionDialogOptions) => {
      dispatch({
        type: "openModal",
        component: Dialog,
        componentProps: {
          isAlert: false,
          isInput: false,
          ...options,
        },
      });
    },
    showInputDialog: (options: InputDialogOptions) => {
      dispatch({
        type: "openModal",
        component: Dialog,
        componentProps: {
          isAlert: false,
          isInput: true,
          ...options,
        },
      });
    },
    showToast: (options: ToastOptions) => {
      dispatch({
        type: "showToast",
        toast: {
          ...options,
          position: options.position || DefaultToastPosition,
          id: Math.random().toString(36).substring(7),
        },
        componentProps: { ...options },
      });
    },
    hideToast: (toastId?: string) => {
      dispatch({
        type: "hideToast",
        id: toastId,
      });
    },
  };

  const [state, dispatch] = useReducer(PopupReducer, initialState);

  return (
    <div>
      <PopupContext.Provider value={state}>
        <PopupRoot />
        {children}
      </PopupContext.Provider>
    </div>
  );
};
