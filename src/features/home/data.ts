import ChatMessageSVG from "_images/svg/chat-message.svg";
import { RFValue } from "_utils";
import React from "react";

type HomeDataType = {
  id: number;
  title: string;
  subTitle: string;
  svgImage: JSX.Element;
};

export const HOME_DATA: HomeDataType[] = [
  {
    id: 1,
    title: "Community",
    subTitle: "Figma community",
    svgImage: React.createElement(ChatMessageSVG, {
      height: RFValue(110),
      width: RFValue(110),
    }),
  },
  {
    id: 2,
    title: "Community",
    subTitle: "Figma community",
    svgImage: React.createElement(ChatMessageSVG, {
      height: RFValue(110),
      width: RFValue(110),
    }),
  },
  {
    id: 3,
    title: "Community",
    subTitle: "Figma community",
    svgImage: React.createElement(ChatMessageSVG, {
      height: RFValue(110),
      width: RFValue(110),
    }),
  },
];
