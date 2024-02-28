import React from "react";
import { closeIcon, iconIllustrationTypes } from "../SvgIcons";
import { PopupType } from "./Popup.model";

interface IProps {
  showCloseButton: boolean;
  type: PopupType;
  hideModal: () => void;
  title: string;
  headerTextStyle?: React.CSSProperties;
  headerStyle?: React.CSSProperties;
  customIcon?: () => JSX.Element;
}

const Header = ({
  showCloseButton,
  type,
  hideModal,
  title,
  headerTextStyle,
  headerStyle,
  customIcon,
}: IProps) => {
  return (
    <div
      className={`react-custom-header react-custom-header-${type}`}
      style={{ ...headerStyle }}
    >
      {customIcon ? customIcon() : iconIllustrationTypes[type]}
      {showCloseButton && (
        <div
          style={{ position: "absolute", right: 20, cursor: "pointer" }}
          onClick={hideModal}
        >
          {closeIcon()}
        </div>
      )}
      <div
        className={`react-custom-title ${
          iconIllustrationTypes[type] ? "react-custom-title-margin" : ""
        }`}
        style={{ ...headerTextStyle }}
      >
        {title}
      </div>
    </div>
  );
};

export default Header;
