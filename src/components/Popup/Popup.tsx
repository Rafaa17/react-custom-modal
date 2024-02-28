import React from "react";

import Modal from "@/components/Popup/Modal";
import Toast from "@/components/Toast/Toast";
import { usePopup } from "@/hooks/usePopup";
import "@/styles/animate.css";
import "@/styles/index.scss";

export const PopupRoot = () => {
  let {
    componentJSX: ComponentJSX,
    component: Component,
    toasts,
    componentProps,
    hideModal,
    hideToast,
  } = usePopup();

  componentProps = { ...componentProps };

  return (
    <>
      <Modal
        componentProps={componentProps}
        Component={Component}
        ComponentJSX={ComponentJSX}
        hideModal={hideModal}
      />
      <Toast hideToast={hideToast} toasts={toasts} />
    </>
  );
};
