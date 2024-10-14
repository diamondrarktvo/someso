import { Box, Image } from "_shared";
import { RFValue } from "_utils";
import React from "react";

export type Props = {
  name: string;
  height?: number;
  width?: number;
};

export const ImageEmergency = ({ name, height, width }: Props) => {
  let ImageSource = null;

  switch (name) {
    case "Fire":
      ImageSource = require("_images/png-jpg-jpeg/fire.png");
      break;
    case "Contraception":
      ImageSource = require("_images/png-jpg-jpeg/contraception.png");
      break;
    case "Infection":
      ImageSource = require("_images/png-jpg-jpeg/infection.png");
      break;
    case "Innondation":
      ImageSource = require("_images/png-jpg-jpeg/innondation.png");
      break;
    case "Pollution":
      ImageSource = require("_images/png-jpg-jpeg/pollution.png");
      break;
    case "Pregnant":
      ImageSource = require("_images/png-jpg-jpeg/pregnant.png");
      break;
    case "Secheresse":
      ImageSource = require("_images/png-jpg-jpeg/secheresse.png");
      break;
    case "ViolenceWoman":
      ImageSource = require("_images/png-jpg-jpeg/violence_woman.png");
      break;
    default:
      ImageSource = require("_images/png-jpg-jpeg/icon-siren.png");
  }

  return (
    <Box>
      {ImageSource && (
        <Image
          source={ImageSource}
          style={{
            height: height ?? RFValue(40),
            width: width ?? RFValue(40),
            resizeMode: "center",
          }}
        />
      )}
    </Box>
  );
};
