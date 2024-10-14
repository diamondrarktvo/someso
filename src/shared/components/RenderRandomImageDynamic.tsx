import Box from "./Box";
import HomeIcon1 from "_images/svg/home-icon-1.svg";
import HomeIcon2 from "_images/svg/home-icon-2.svg";
import HomeIcon3 from "_images/svg/home-icon-3.svg";
import HomeIcon4 from "_images/svg/home-icon-4.svg";
import HomeIcon5 from "_images/svg/home-icon-5.svg";
import HomeIcon6 from "_images/svg/home-icon-6.svg";
import HomeIcon7 from "_images/svg/home-icon-7.svg";
import HomeIcon8 from "_images/svg/home-icon-8.svg";
import HomeIcon9 from "_images/svg/home-icon-9.svg";
import HomeIcon10 from "_images/svg/home-icon-10.svg";

import { RFValue } from "_utils";
import React from "react";
import { useSelector } from "react-redux";
import { functionnalitySelectors } from "../slice/functionnalitySlice";

export type Props = {
  index?: number;
  height?: number;
  width?: number;
};

const RenderRandomImageDynamic = ({ index = 0, height, width }: Props) => {
  const iconMapSMSAna = [HomeIcon1, HomeIcon2, HomeIcon3, HomeIcon4, HomeIcon5];
  const iconMqpSMSClim = [
    HomeIcon6,
    HomeIcon7,
    HomeIcon8,
    HomeIcon9,
    HomeIcon10,
  ];

  const moduleChoicedByUser = useSelector(functionnalitySelectors.menuChoiced);

  return (
    <Box>
      {moduleChoicedByUser === "sms_ana"
        ? React.createElement(iconMapSMSAna[index % iconMapSMSAna.length], {
            height: height ?? RFValue(50),
            width: width ?? RFValue(50),
          })
        : React.createElement(iconMqpSMSClim[index % iconMapSMSAna.length], {
            height: height ?? RFValue(50),
            width: width ?? RFValue(50),
          })}
    </Box>
  );
};

export default RenderRandomImageDynamic;
