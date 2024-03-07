/** @jest-environment jsdom */

import React from "react";

import { act, fireEvent, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { PopupType } from "@/components/Popup/Popup.model";
import { usePopup } from "@/hooks/usePopup";
import { PopupProvider } from "@/components/PopupProvider";

const ComponentToTest = () => {
  return (
    <PopupProvider>
      <MainComponent />
    </PopupProvider>
  );
};

let MainComponent: () => JSX.Element;

describe("should successfully show and close dialogs", () => {
  it("should successfully show and close alert", async () => {
    MainComponent = () => {
      const { showAlert } = usePopup();

      return (
        <div>
          <button
            onClick={() =>
              showAlert({
                type: PopupType.DANGER,
                text: "This is a test",
              })
            }
          >
            Show Alert
          </button>
        </div>
      );
    };

    const { container } = render(<ComponentToTest />);

    const button = container.querySelector("button")!;

    await userEvent.click(button);

    const dialogWrapper = container.querySelector(
      ".react-custom-dialog-wrapper"
    )!;
    const dialogFooter = dialogWrapper.querySelector(".react-custom-footer")!;
    const closeButton = dialogFooter.querySelector(
      ".react-custom-option-button"
    )!;

    await userEvent.click(closeButton);

    expect(container.querySelector(".react-custom-dialog-wrapper")).toBeNull();
  });

  it("should successfully show and close option dialog", () => {
    MainComponent = () => {
      const { showOptionDialog } = usePopup();

      return (
        <div>
          <button
            onClick={() =>
              showOptionDialog({
                type: PopupType.DANGER,
                text: "This is a test",
                options: [
                  { type: "cancel", name: "Cancel" },
                  { type: "confirm", name: "Confirm" },
                ],
              })
            }
          >
            Show Alert
          </button>
        </div>
      );
    };

    const { container } = render(<ComponentToTest />);

    const button = container.querySelector("button")!;

    act(() => {
      fireEvent.click(button);
    });

    const dialogWrapper = container.querySelector(
      ".react-custom-dialog-wrapper"
    )!;
    const dialogFooter = dialogWrapper.querySelector(".react-custom-footer")!;
    const footerButtons = dialogFooter.querySelectorAll(
      ".react-custom-option-button"
    );

    expect(footerButtons).toHaveLength(2);

    const cancelButton = footerButtons[0];
    const confirmButton = footerButtons[1];

    expect(cancelButton.innerHTML).toBe("Cancel");
    expect(confirmButton.innerHTML).toBe("Confirm");

    act(() => {
      fireEvent.click(confirmButton);
    });

    expect(container.querySelector(".react-custom-dialog-wrapper")).toBeNull();
  });

  it("should successfully show and close input dialog (single input) and get back the result", () => {
    const onInputDialogSubmit = jest.fn(
      (_result: { [key: string]: any }) => {}
    );

    MainComponent = () => {
      const { showInputDialog } = usePopup();

      return (
        <div>
          <button
            onClick={() =>
              showInputDialog({
                type: PopupType.DANGER,
                text: "This is a test",
                input: { inputType: "text", name: "name" },
                options: [
                  { type: "cancel", name: "Cancel" },
                  { type: "confirm", name: "Confirm" },
                ],
                onConfirm: onInputDialogSubmit,
              })
            }
          >
            Show Alert
          </button>
        </div>
      );
    };

    const { container } = render(<ComponentToTest />);

    const button = container.querySelector("button")!;

    act(() => {
      fireEvent.click(button);
    });

    const dialogWrapper = container.querySelector(
      ".react-custom-dialog-wrapper"
    )!;
    const dialogFooter = dialogWrapper.querySelector(".react-custom-footer")!;
    const dialogMainSection = dialogWrapper.querySelector(
      ".react-custom-inputs-container"
    )!;
    const footerButtons = dialogFooter.querySelectorAll(
      ".react-custom-option-button"
    );
    const textInput = dialogMainSection.querySelector(
      ".react-custom-input-item"
    )!;

    expect(footerButtons).toHaveLength(2);

    const cancelButton = footerButtons[0];
    const confirmButton = footerButtons[1];

    expect(cancelButton.innerHTML).toBe("Cancel");
    expect(confirmButton.innerHTML).toBe("Confirm");

    fireEvent.change(textInput, { target: { value: "John Doe" } });

    act(() => {
      fireEvent.click(confirmButton);
    });

    expect(onInputDialogSubmit).toHaveBeenCalledTimes(1);
    expect(onInputDialogSubmit).toHaveBeenCalledWith({ name: "John Doe" });

    expect(container.querySelector(".react-custom-dialog-wrapper")).toBeNull();
  });
});

describe("should successfully show and close toasts", () => {
  it("should successfully show and close toast", async () => {
    MainComponent = () => {
      const { showToast } = usePopup();

      return (
        <div>
          <button
            onClick={() =>
              showToast({
                type: PopupType.DANGER,
                text: "This is a test",
              })
            }
          >
            Show Toast
          </button>
        </div>
      );
    };

    const { container } = render(<ComponentToTest />);

    const button = container.querySelector("button")!;

    await userEvent.click(button);

    const toastWrappers = container.querySelector(
      ".react-custom-toast-bottom-right"
    )!;

    const toast = toastWrappers.querySelector(".react-custom-toast")!;

    const closeButton = toast.querySelector(".close-button")!;

    // because of internal setTimeout in the code when hiding the toast
    await userEvent.click(closeButton, { delay: 300 });

    await new Promise((r) => setTimeout(r, 500));

    expect(
      container
        .querySelector(".react-custom-toast-bottom-right")!
        .querySelector(".react-custom-toast")
    ).toBeNull();
  });
});
