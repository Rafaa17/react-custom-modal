import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

import { InputValidation } from "@/utils/Validation";
import Footer from "./Footer";
import Header from "./Header";
import ImageInput from "./ImageInput";
import Input from "./Input";
import { InputProps, OptionDialogButton, PopupType } from "./Popup.model";
import { ValidateResult } from "./Popup.validation.model";

// @ts-ignore
Date.prototype.toDateInputValue = function () {
  var local = new Date(this);
  local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
  return local.toJSON().slice(0, 10);
};

interface DialogProps {
  title: string;
  text: string;
  type: PopupType;
  hideModal: () => {};
  options: Array<OptionDialogButton>;
  onConfirm: (result?: { [key: string]: any }) => {};
  onCancel: (result?: { [key: string]: any }) => {};
  isAlert: boolean;
  isInput: boolean;
  confirmText: string;
  cancelText: string;
  showCloseButton: boolean;
  inputs: Array<InputProps>;
  onDismissed: (result?: { [key: string]: any }) => {};
  onOpened: (result?: { [key: string]: any }) => {};
  input: InputProps;
  headerTextStyle?: React.CSSProperties;
  errorMessageStyle?: React.CSSProperties;
  textStyle?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
  headerStyle?: React.CSSProperties;
  footerStyle?: React.CSSProperties;
  bodyComponent?: JSX.Element;
  customIcon?: () => JSX.Element;
}

const Dialog = (props: DialogProps) => {
  const {
    title,
    text,
    type,
    hideModal,
    onConfirm = null,
    onCancel = null,
    isAlert = true,
    showCloseButton = false,
    isInput = false,
    confirmText = "Ok",
    cancelText = "Cancel",
    inputs = null,
    onDismissed = null,
    input,
    headerTextStyle,
    textStyle,
    containerStyle,
    headerStyle,
    footerStyle,
    bodyComponent,
    errorMessageStyle,
    options,
    customIcon,
  } = props;

  const getDefaultValues = () => {
    let defaultVals: { [key: string]: any } = {};

    if (input && !inputs && input.default) {
      if (input.inputType === "date") {
        // @ts-ignore
        defaultVals[input.name] = (input.default as Date).toDateInputValue();
      } else {
        defaultVals[input.name] = input.default;
      }
    }
    if (inputs && !input) {
      inputs.forEach((i) => {
        if (i.default) {
          if (i.inputType === "date") {
            // @ts-ignore
            defaultVals[i.name] = (i.default as Date).toDateInputValue();
          } else {
            defaultVals[i.name] = i.default;
          }
        }
      });
    }

    return defaultVals;
  };

  const [inputValues, setInputValues] = useState<{ [key: string]: any }>(() =>
    getDefaultValues()
  );
  const [errorValues, setErrorValues] = useState<{ [key: string]: string }>({});

  const validateInputValue = async (
    input: InputProps
  ): Promise<ValidateResult> => {
    let result: ValidateResult;

    if (input.validation?.validate) {
      return await input.validation.validate(inputValues[input.name]);
    } else {
      switch (input.inputType) {
        case "text":
          result = InputValidation.validateText(input, inputValues[input.name]);
          break;
        case "number":
          result = InputValidation.validateNumber(
            input,
            inputValues[input.name]
          );
          break;
        case "date":
          result = InputValidation.validateDate(input, inputValues[input.name]);
          break;
        case "file":
          result = InputValidation.validateFile(input, inputValues[input.name]);
          break;
        case "image":
          result = InputValidation.validateFile(input, inputValues[input.name]);
          break;
        default:
          result = {
            success: true,
            message: "",
          };
      }
    }

    if (!result.success) {
      return { success: false, [input.name]: result.message! };
    }

    throw new Error("Unsupported input type");
  };

  const validateInputs = (): { [key: string]: string } => {
    setErrorValues({});

    const allInputsToValidate = [];

    if (input && input.validation) {
      allInputsToValidate.push(input);
    }

    if (inputs) {
      for (const i of inputs) {
        if (i.validation) {
          allInputsToValidate.push(i);
        }
      }
    }

    let errorsMapping = {};

    allInputsToValidate.forEach((input) => {
      const res = validateInputValue(input);
      if (res !== null) {
        errorsMapping = {
          ...errorsMapping,
          ...res,
        };
      }
    });

    return errorsMapping;
  };

  const confirmHandle = () => {
    const errors = validateInputs();

    if (Object.keys(errors).length === 0) {
      hideModal();
      if (onConfirm) {
        onConfirm(inputValues);
      }
      if (onDismissed && isInput) onDismissed(inputValues);
    } else {
      setErrorValues(errors);
    }
  };

  const cancelHandle = () => {
    hideModal();
    if (onCancel) onCancel();
    if (onDismissed && isInput) onDismissed(inputValues);
  };

  let optionsToRender: Array<OptionDialogButton> = [];

  if (!isAlert)
    if (options) {
      optionsToRender = options.map((option) => {
        return {
          ...option,
          onClick: () => {
            if (option.type === "confirm") {
              confirmHandle();
            } else if (option.type === "cancel") {
              cancelHandle();
            } else {
            }
          },
        };
      });
    } else
      optionsToRender = [
        {
          name: cancelText,
          onClick: cancelHandle,
        },
        {
          name: confirmText,
          onClick: confirmHandle,
        },
      ];
  else
    optionsToRender = [
      {
        name: confirmText,
        onClick: () => {
          hideModal();
          onDismissed && onDismissed();
        },
      },
    ];

  let inputsToRender: InputProps[] = [];

  if (isInput) {
    if (!inputs) inputsToRender = [input];
    else inputsToRender = inputs;
  }

  return (
    <div
      className={"react-custom-dialog-wrapper"}
      style={{ ...containerStyle }}
    >
      <Header
        customIcon={customIcon}
        headerStyle={headerStyle}
        headerTextStyle={headerTextStyle}
        showCloseButton={showCloseButton}
        type={type}
        hideModal={hideModal}
        title={title}
      />
      {bodyComponent || (
        <>
          {text && text !== "" ? (
            <div className={"react-custom-body-text"} style={{ ...textStyle }}>
              {text}
            </div>
          ) : null}
          {isInput && (
            <div className={"react-custom-inputs-container"}>
              <>
                {inputsToRender.map((item, index) => (
                  <div
                    key={`input${index}`}
                    className={"react-custom-input-container"}
                  >
                    {item.inputType !== "image" ? (
                      <Input
                        errorMessageStyle={errorMessageStyle}
                        error={errorValues[item.name]}
                        item={item}
                        setInputValues={setInputValues}
                        inputValues={inputValues}
                      />
                    ) : (
                      <ImageInput
                        errorMessageStyle={errorMessageStyle}
                        error={errorValues[item.name]}
                        item={item}
                        setInputValues={setInputValues}
                        inputValues={inputValues}
                      />
                    )}
                  </div>
                ))}
              </>
            </div>
          )}
        </>
      )}
      <Footer footerStyle={footerStyle} optionsToRender={optionsToRender} />
    </div>
  );
};

export default Dialog;
