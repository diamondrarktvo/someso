import HomeIcon1 from "_images/svg/home-icon-1.svg";
import HomeIcon2 from "_images/svg/home-icon-2.svg";
import HomeIcon3 from "_images/svg/home-icon-3.svg";
import HomeIcon4 from "_images/svg/home-icon-4.svg";
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
    svgImage: React.createElement(HomeIcon1, {
      height: RFValue(110),
      width: RFValue(110),
    }),
  },
  {
    id: 2,
    title: "Community",
    subTitle: "Figma community",
    svgImage: React.createElement(HomeIcon2, {
      height: RFValue(110),
      width: RFValue(110),
    }),
  },
  {
    id: 3,
    title: "Community",
    subTitle: "Figma community",
    svgImage: React.createElement(HomeIcon3, {
      height: RFValue(110),
      width: RFValue(110),
    }),
  },
  {
    id: 4,
    title: "Community",
    subTitle: "Figma community",
    svgImage: React.createElement(HomeIcon4, {
      height: RFValue(110),
      width: RFValue(110),
    }),
  },
];
