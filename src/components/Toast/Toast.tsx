import React, { useCallback, useEffect, useRef, useState } from "react";
import { IToast, ToastOptions, ToastPosition } from "./Toast.model";
import { closeIcon, iconIllustrationTypes } from "../SvgIcons";
import ToastProgress from "./ToastProgress";

interface IToasts {
  toasts?: Array<IToast>;
  hideToast: (toastId: string) => void;
}

export default function Toast({ toasts, hideToast }: IToasts) {
  return (
    <>
      <div
        className={`react-custom-toast-container react-custom-toast-${ToastPosition.BOTTOM_LEFT}`}
      >
        {toasts &&
          toasts
            .filter((t) => t.position === ToastPosition.BOTTOM_LEFT)
            .map((toast) => (
              <ToastItem key={toast.id} toast={toast} hideToast={hideToast} />
            ))}
      </div>
      <div
        className={`react-custom-toast-container react-custom-toast-${ToastPosition.BOTTOM_CENTER}`}
      >
        {toasts &&
          toasts
            .filter((t) => t.position === ToastPosition.BOTTOM_CENTER)
            .map((toast) => (
              <ToastItem key={toast.id} toast={toast} hideToast={hideToast} />
            ))}
      </div>
      <div
        className={`react-custom-toast-container react-custom-toast-${ToastPosition.BOTTOM_RIGHT}`}
      >
        {toasts &&
          toasts
            .filter((t) => t.position === ToastPosition.BOTTOM_RIGHT)
            .map((toast) => (
              <ToastItem key={toast.id} toast={toast} hideToast={hideToast} />
            ))}
      </div>
      <div
        className={`react-custom-toast-container react-custom-toast-${ToastPosition.TOP_LEFT}`}
      >
        {toasts &&
          toasts
            .filter((t) => t.position === ToastPosition.TOP_LEFT)
            .map((toast) => (
              <ToastItem key={toast.id} toast={toast} hideToast={hideToast} />
            ))}
      </div>
      <div
        className={`react-custom-toast-container react-custom-toast-${ToastPosition.TOP_RIGHT}`}
      >
        {toasts &&
          toasts
            .filter((t) => t.position === ToastPosition.TOP_RIGHT)
            .map((toast) => (
              <ToastItem key={toast.id} toast={toast} hideToast={hideToast} />
            ))}
      </div>
      <div
        className={`react-custom-toast-container react-custom-toast-${ToastPosition.TOP_CENTER}`}
      >
        {toasts &&
          toasts
            .filter((t) => t.position === ToastPosition.TOP_CENTER)
            .map((toast) => (
              <ToastItem key={toast.id} toast={toast} hideToast={hideToast} />
            ))}
      </div>
    </>
  );
}

interface IProps {
  toast: IToast;
  hideToast: (toastId: string) => void;
}

function ToastItem({ toast, hideToast }: IProps) {
  const [toastData, setToast] = useState<ToastOptions | null>(null);

  const [animation, setAnimation] = useState<{ in: string; out: string }>({
    in: "",
    out: "",
  });

  let timeout = useRef<NodeJS.Timeout | undefined>();

  const hideMe = useCallback(() => {
    const outAnimation = {
      [ToastPosition.TOP_RIGHT]: "slideOutRight",
      [ToastPosition.TOP_CENTER]: "slideOutUp",
      [ToastPosition.TOP_LEFT]: "slideOutLeft",
      [ToastPosition.BOTTOM_RIGHT]: "slideOutRight",
      [ToastPosition.BOTTOM_LEFT]: "slideOutLeft",
      [ToastPosition.BOTTOM_CENTER]: "slideOutDown",
    };
    setAnimation({
      out: `animate__animated animate__${
        outAnimation[toast.position!]
      } animate__faster`,
      in: "",
    });
  }, [toast.position]);

  const showMe = useCallback(() => {
    const inAnimation = {
      [ToastPosition.TOP_RIGHT]: "slideInRight",
      [ToastPosition.TOP_CENTER]: "slideInDown",
      [ToastPosition.TOP_LEFT]: "slideInLeft",
      [ToastPosition.BOTTOM_RIGHT]: "slideInRight",
      [ToastPosition.BOTTOM_LEFT]: "slideInLeft",
      [ToastPosition.BOTTOM_CENTER]: "slideInUp",
    };
    setAnimation({
      in: `animate__animated animate__${
        inAnimation[toast.position!]
      } animate__faster`,
      out: "",
    });
  }, [toast.position]);

  useEffect(() => {
    if (toastData && !toast) {
      hideMe();
    } else if (toast && !toastData) {
      showMe();
      if (toast.timeoutDuration) {
        timeout.current = setTimeout(hideMe, toast.timeoutDuration);
      }
    }

    return () => {
      timeout.current && clearTimeout(timeout.current);
    };
  }, [toast]);

  useEffect(() => {
    if (animation.in && toast) {
      setToast(toast);
    }

    if (animation.out) {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
      timeout.current = setTimeout(() => {
        setToast(null);
        hideToast(toast.id);
      }, 250);
    }
  }, [animation]);

  if (!toastData) return null;

  return (
    <div
      className={`react-custom-toast-${toastData.type} react-custom-toast ${animation.in} ${animation.out}`}
      style={{ ...toast.containerStyle }}
    >
      <div
        style={{
          width: "90%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {toast.customComponent || (
          <>
            <div>
              {toast.customIcon
                ? toast.customIcon()
                : iconIllustrationTypes[toastData.type]}
            </div>
            <div
              className={"react-custom-toast-text"}
              style={{ ...toast.textStyle }}
            >
              {toastData.text}
            </div>
          </>
        )}
      </div>
      <div
        className={"close-button"}
        style={{ width: "10%", cursor: "pointer" }}
        onClick={hideMe}
      >
        {closeIcon()}
      </div>
      {toast.timeoutDuration && toast.showProgress && toastData && (
        <ToastProgress
          color={toast.progressColor}
          timeout={toast.timeoutDuration}
        />
      )}
    </div>
  );
}
