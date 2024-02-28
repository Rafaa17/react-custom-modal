import React from "react";
import { OptionDialogButton } from "./Popup.model";

interface IProps {
  optionsToRender: Array<OptionDialogButton>;
  footerStyle?: React.CSSProperties;
}

export default function Footer({ optionsToRender, footerStyle }: IProps) {
  return (
    <div className={"react-custom-footer"} style={{ ...footerStyle }}>
      <div className={"react-custom-options-container"}>
        {optionsToRender.map((option, index) => (
          <button
            key={`option${index}`}
            className={"react-custom-option-button"}
            onClick={option.onClick}
            style={option.style ?? undefined}
          >
            {option.name}
          </button>
        ))}
      </div>
    </div>
  );
}
