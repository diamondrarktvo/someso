import Box from "./Box";
import HomeIcon1 from "_images/svg/home-icon-1.svg";
import HomeIcon2 from "_images/svg/home-icon-2.svg";
import HomeIcon3 from "_images/svg/home-icon-3.svg";
import HomeIcon4 from "_images/svg/home-icon-4.svg";
import HomeIcon5 from "_images/svg/home-icon-5.svg";

import { RFValue } from "_utils";
import React from "react";

export type Props = {
  index?: number;
  height?: number;
  width?: number;
};

const RenderRandomImageDynamic = ({ index = 0, height, width }: Props) => {
  const iconsMap = [HomeIcon1, HomeIcon2, HomeIcon3, HomeIcon4, HomeIcon5];

  return (
    <Box>
      {React.createElement(iconsMap[index % iconsMap.length], {
        height: height ?? RFValue(50),
        width: width ?? RFValue(50),
      })}
    </Box>
  );
};

export default RenderRandomImageDynamic;
