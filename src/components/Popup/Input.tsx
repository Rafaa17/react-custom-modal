import React, { Dispatch, SetStateAction } from "react";
import { InputProps } from "./Popup.model";

interface IProps {
  item: InputProps;
  setInputValues: Dispatch<SetStateAction<{ [key: string]: any }>>;
  inputValues: {};
  error?: string;
  errorMessageStyle?: React.CSSProperties;
}

export default function Input({
  item,
  setInputValues,
  inputValues,
  error,
  errorMessageStyle,
}: IProps) {
  return (
    <div style={{ textAlign: "left" }}>
      <label
        style={{ display: "block" }}
        className={"react-custom-input-label-item"}
      >
        {item.label}
      </label>
      {item.inputType && item.inputType !== "textarea" ? (
        <input
          className={"react-custom-input-item"}
          onChange={(val) => {
            setInputValues({
              ...inputValues,
              // @ts-ignore
              [item.name]: val.nativeEvent.target.value,
            });
          }}
          // @ts-ignore
          value={inputValues[item.name] ? inputValues[item.name] : ""}
          id={item.name}
          placeholder={item.placeholder}
          type={item.inputType || "text"}
        />
      ) : null}
      {item.inputType === "textarea" ? (
        <textarea
          onChange={(val) => {
            setInputValues({
              ...inputValues,
              // @ts-ignore
              [item.name]: val.nativeEvent.target.value,
            });
          }}
          // @ts-ignore
          value={inputValues[item.name] ? inputValues[item.name] : ""}
          className={"react-custom-input-item"}
          id={item.name}
          placeholder={item.placeholder}
        />
      ) : null}
      {error && (
        <label
          className={"react-custom-input-error-item"}
          style={errorMessageStyle ?? undefined}
        >
          {error}
        </label>
      )}
    </div>
  );
}
