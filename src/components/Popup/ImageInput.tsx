import React, { ChangeEvent, Dispatch, SetStateAction, useRef } from "react";

import { closeIcon } from "../SvgIcons";
import { InputProps, ImageInputProps } from "./Popup.model";

interface IProps {
  setInputValues: Dispatch<SetStateAction<{ [key: string]: any }>>;
  inputValues: { [key: string]: any };
  item: InputProps;
  error?: string;
  errorMessageStyle?: React.CSSProperties;
}

export default function ImageInput({
  setInputValues,
  inputValues,
  item,
  error,
  errorMessageStyle,
}: IProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const readImage = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      let imagePromises: Array<Promise<void>> = [];
      let images: Array<any> = [];
      Array.from(event.target.files).forEach((file: File) => {
        imagePromises.push(
          new Promise((resolve) => {
            var reader = new FileReader();
            reader.onload = function (e) {
              images.push({ src: e.target!.result, value: file });
              resolve();
            };
            reader.readAsDataURL(file);
          })
        );
      });
      Promise.all(imagePromises).then(() => {
        setInputValues({
          ...inputValues,
          // @ts-ignore
          [item.name]: [...images],
        });
        inputRef.current!.value! = "";
        // event.target.reset();
      });
    }
  };

  return (
    <>
      <div style={{ textAlign: "left" }}>
        <label style={{ display: "block", marginBottom: 5 }}>
          {item.label || ""}
        </label>
        <div
          style={{ cursor: "pointer" }}
          className={"react-custom-input-item select-image"}
          onClick={() => {
            if (inputRef.current) inputRef.current.click();
          }}
        >
          Select Image
        </div>
        <input
          ref={(ref) => {
            // @ts-ignore
            inputRef.current = ref;
          }}
          value={inputRef.current ? inputRef.current.value : ""}
          multiple={(item as ImageInputProps).multiple || false}
          className={"react-custom-input-item"}
          onChange={(val) => readImage(val)}
          style={{ display: "none" }}
          id={"image"}
          type={"file"}
        />
      </div>
      <div style={{ textAlign: "left" }}>
        {inputValues &&
          inputValues[item.name] &&
          // @ts-ignore
          inputValues[item.name].map((image, index) => (
            <div
              className={"react-custom-input-img-container"}
              key={"image" + index}
              style={{
                position: "relative",
              }}
            >
              <img alt="" style={{ maxHeight: 100 }} src={image.src} />
              <div
                onClick={() => {
                  setInputValues({
                    ...inputValues,
                    // @ts-ignore
                    [item.name]: [
                      ...inputValues[item.name].slice(0, index),
                      ...inputValues[item.name].slice(index + 1),
                    ],
                  });
                }}
                style={{
                  borderRadius: 5,
                  position: "absolute",
                  top: 5,
                  right: 5,
                  zIndex: 500,
                  cursor: "pointer",
                }}
              >
                {closeIcon("white")}
              </div>
            </div>
          ))}
      </div>
      {error && (
        <label
          className={"react-custom-input-error-item"}
          style={errorMessageStyle ?? undefined}
        >
          {error}
        </label>
      )}
    </>
  );
}
