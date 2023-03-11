import React from "react";
import {
  AnimationType,
  DialogType,
  OutAnimationType,
  PopupProvider,
  usePopup,
} from "./lib";

import "./TestApp.css";
import { ToastPosition } from "./lib/index";

const buttonStyles: React.CSSProperties = {
  display: "block",
  marginTop: 5,
};

const TestComponent = (props: { a: string }) => {
  return (
    <div
      style={{ background: "white", borderRadius: 5, width: 500, padding: 20 }}
    >
      <h4> Fantasy T-shirt</h4>
      <label className={"text-muted"}>Shirts</label>
      <h3 className={"mt-3"} style={{ fontWeight: 600, fontSize: "20px" }}>
        $39.99
      </h3>
      <p className={"mt-3"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
        sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim
        perferendis voluptates laboriosam. Distinctio, officia quis dolore quos
        sapiente tempore alias.
      </p>
      Received Props: {JSON.stringify(props)}
    </div>
  );
};

const MyComponent = () => {
  const { showModal, showToast } = usePopup();

  return (
    <>
      <h2>Modal</h2>
      <div
        className={"example-button"}
        style={buttonStyles}
        onClick={() =>
          showModal(<TestComponent a={"test"} />, {
            animationType: AnimationType.SLIDE_IN_UP,
            outAnimationType: OutAnimationType.SLIDE_OUT_UP,
            allowCloseOnEscKey: true,
          })
        }
      >
        Modal
      </div>

      <AlertConfigurator />

      <h2>Toast</h2>

      <div
        className={"example-button"}
        style={buttonStyles}
        onClick={() =>
          showToast({
            text: "Lorem Lipsum Lorem Lipsum Lorem Lipsum Lorem Lipsum Lorem Lipsum Lorem Lipsum Lorem Lipsum",
            type: DialogType.INFO,
            position: ToastPosition.BOTTOM_RIGHT,
            // timeoutDuration: 5000
          })
        }
      >
        Toast Bottom Right
      </div>

      <div
        className={"example-button"}
        style={buttonStyles}
        onClick={() =>
          showToast({
            text: "Lorem Lipsum Lorem Lipsum Lorem Lipsum Lorem Lipsum Lorem Lipsum Lorem Lipsum Lorem Lipsum",
            type: DialogType.INFO,
            position: ToastPosition.BOTTOM_CENTER,
            // timeoutDuration: 5000
          })
        }
      >
        Toast Bottom Center
      </div>

      <div
        className={"example-button"}
        style={buttonStyles}
        onClick={() =>
          showToast({
            text: "Lorem Lipsum Lorem Lipsum Lorem Lipsum Lorem Lipsum Lorem Lipsum Lorem Lipsum Lorem Lipsum",
            type: DialogType.INFO,
            position: ToastPosition.BOTTOM_LEFT,
            // timeoutDuration: 5000
          })
        }
      >
        Toast Bottom Left
      </div>

      <div
        className={"example-button"}
        style={buttonStyles}
        onClick={() =>
          showToast({
            text: "Lorem Lipsum Lorem Lipsum Lorem Lipsum Lorem Lipsum Lorem Lipsum Lorem Lipsum Lorem Lipsum",
            type: DialogType.INFO,
            position: ToastPosition.TOP_RIGHT,
            // timeoutDuration: 5000
          })
        }
      >
        Toast Top Right
      </div>

      <div
        className={"example-button"}
        style={buttonStyles}
        onClick={() =>
          showToast({
            text: "Lorem Lipsum Lorem Lipsum Lorem Lipsum Lorem Lipsum Lorem Lipsum Lorem Lipsum Lorem Lipsum",
            type: DialogType.INFO,
            position: ToastPosition.TOP_LEFT,
            timeoutDuration: 5000,
            showProgress: true,
          })
        }
      >
        Toast Top Left
      </div>

      <div
        className={"example-button"}
        style={buttonStyles}
        onClick={() =>
          showToast({
            text: "Lorem Lipsum Lorem Lipsum Lorem Lipsum Lorem Lipsum Lorem Lipsum Lorem Lipsum Lorem Lipsum",
            type: DialogType.INFO,
            position: ToastPosition.TOP_CENTER,
            timeoutDuration: 10000,
            showProgress: true,
            progressColor: "white",
            containerStyle: { background: "darkgray" },
          })
        }
      >
        Toast Top Center
      </div>
    </>
  );
};

const App = () => {
  return <MyComponent />;
};

const AlertConfigurator = () => {
  const { showAlert, showOptionDialog, showInputDialog, showToast } =
    usePopup();

  return (
    <>
      <h2>Alert</h2>
      <div
        className={"example-button"}
        style={buttonStyles}
        onClick={() =>
          showAlert({
            type: DialogType.DANGER,
            text: "Text",
            title: "Title",
            animationType: AnimationType.FADE_IN,
            outAnimationType: OutAnimationType.FADE_OUT,
          })
        }
      >
        Danger Alert
      </div>
      <div
        className={"example-button"}
        style={buttonStyles}
        onClick={() =>
          showAlert({
            type: DialogType.WARNING,
            text: "Text",
            title: "Title",
            animationType: AnimationType.ZOOM_IN,
          })
        }
      >
        Warning Alert
      </div>
      <div
        className={"example-button"}
        style={buttonStyles}
        onClick={() =>
          showAlert({
            type: DialogType.SUCCESS,
            text: "Text",
            title: "Title",
          })
        }
      >
        Success Alert
      </div>
      <div
        className={"example-button"}
        style={buttonStyles}
        onClick={() =>
          showAlert({
            type: DialogType.INFO,
            text: "Text",
            title: "Title",
            allowOutsideClick: false,
          })
        }
      >
        Info Alert
      </div>
      <div
        className={"example-button"}
        style={buttonStyles}
        onClick={() =>
          showAlert({
            type: DialogType.WARNING,
            text: "Text",
            title: "Title",
            animationType: AnimationType.FADE_IN,
            bodyComponent: <TestComponent a={"a"} />,
          })
        }
      >
        Custom Content Alert
      </div>
      <div
        className={"example-button"}
        style={buttonStyles}
        onClick={() =>
          showOptionDialog({
            text: "Text",
            title: "Title",
            options: [
              {
                name: "No Thanks!",
                type: "cancel",
                style: { background: "lightcoral" },
              },
              {
                name: "Cancel",
                type: "cancel",
              },
              {
                name: "Confirm",
                type: "confirm",
                style: { background: "lightgreen" },
              },
            ],
          })
        }
      >
        Option Dialog
      </div>

      <div
        className={"example-button"}
        style={buttonStyles}
        onClick={() =>
          showOptionDialog({
            containerStyle: { width: 350 },
            text: "Are you sure you want to delete this user? You won't be able to revert that action.",
            title: "Delete User?",
            options: [
              {
                name: "Cancel",
                type: "cancel",
              },
              {
                name: "Delete",
                type: "confirm",
                style: { background: "lightcoral" },
              },
            ],
            onConfirm: () =>
              showToast({
                type: DialogType.SUCCESS,
                text: "User Deleted",
                timeoutDuration: 3000,
                showProgress: true,
              }),
          })
        }
      >
        Confirmation Dialog
      </div>
      <div
        className={"example-button"}
        style={buttonStyles}
        onClick={() =>
          showInputDialog({
            title: "Sign Up",
            showCloseButton: true,
            headerTextStyle: { fontWeight: "bold", fontSize: "x-large" },
            headerStyle: { marginTop: 5, marginBottom: 5 },
            errorMessageStyle: { color: "green" },
            options: [
              {
                name: "No Thanks!",
                type: "cancel",
                style: { background: "lightcoral" },
              },
              {
                name: "Cancel",
                type: "cancel",
              },
              {
                name: "Confirm",
                type: "confirm",
                style: { background: "lightgreen" },
              },
            ],
            inputs: [
              {
                inputType: "text",
                name: "fname",
                label: "First Name",
                default: "John Doe",
                validation: {
                  minLength: {
                    value: 5,
                  },
                },
              },
              {
                inputType: "text",
                name: "lname",
                label: "Last Name",
                validation: {
                  required: { value: true, message: "Value is required" },
                },
              },
              {
                inputType: "text",
                name: "address",
                label: "Address",
                validation: { required: { value: true } },
              },
              {
                inputType: "text",
                name: "zip",
                label: "Zip",
                validation: { required: { value: true } },
              },
              {
                inputType: "number",
                name: "age",
                label: "Age",
                validation: { min: { value: 5 } },
              },
              {
                inputType: "image",
                name: "avatar",
                label: "Avatar",
                multiple: false,
                validation: {
                  required: {
                    value: true,
                  },
                },
              },
              {
                inputType: "date",
                name: "dob",
                label: "Date of Birth",
                default: new Date(),
                validation: {
                  minDate: {
                    value: new Date(),
                  },
                },
              },
            ],
            onConfirm: (response) => {
              showAlert({ title: "Result", text: JSON.stringify(response) });
            },
          })
        }
      >
        Input Dialog With Multiple Input Fields
      </div>

      <div
        className={"example-button"}
        style={buttonStyles}
        onClick={() =>
          showInputDialog({
            title: "Title",
            inputs: [{ inputType: "text", name: "test" }],
            onConfirm: (response) => {
              showAlert({ title: "Result", text: JSON.stringify(response) });
            },
          })
        }
      >
        Input Dialog With Text Field
      </div>

      <div
        className={"example-button"}
        style={buttonStyles}
        onClick={() =>
          showInputDialog({
            title: "Title",
            inputs: [{ inputType: "date", name: "test" }],
            onConfirm: (response) => {
              showAlert({ title: "Result", text: JSON.stringify(response) });
            },
          })
        }
      >
        Input Dialog With Date
      </div>

      <div
        className={"example-button"}
        style={buttonStyles}
        onClick={() =>
          showInputDialog({
            title: "Title",
            input: { inputType: "image", name: "myimage" },
            onConfirm: (response) => {
              showAlert({ title: "Result", text: JSON.stringify(response) });
            },
          })
        }
      >
        Input Dialog With Date
      </div>
    </>
  );
};

export const Setup = () => {
  return (
    <PopupProvider>
      <App />
    </PopupProvider>
  );
};
