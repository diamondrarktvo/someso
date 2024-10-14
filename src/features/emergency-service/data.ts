import { EmergencsI } from "./types";

export const ALL_EMERGENCY_SERVICES = [
  {
    id: 1,
    title: "Incendie",
    image: require("_images/png-jpg-jpeg/icon-siren.png"),
  },
  {
    id: 2,
    title: "Braquage",
    image: require("_images/png-jpg-jpeg/icon-siren.png"),
  },
  {
    id: 3,
    title: "Voleur",
    image: require("_images/png-jpg-jpeg/icon-siren.png"),
  },
  {
    id: 4,
    title: "Accident",
    image: require("_images/png-jpg-jpeg/icon-siren.png"),
  },
  {
    id: 5,
    title: "Mort",
    image: require("_images/png-jpg-jpeg/icon-siren.png"),
  },
  {
    id: 6,
    title: "Bagarre",
    image: require("_images/png-jpg-jpeg/icon-siren.png"),
  },
];

export const ALL_EMERGENCY_SERVICES2: EmergencsI[] = [
  {
    id: 1,
    title: "Grossesse",
    module: "sms_ana",
    description:
      "Problèmes de santé liés à une grossesse nécessitant une intervention médicale urgente.",
  },
  {
    id: 2,
    title: "Contraceptif",
    module: "sms_ana",
    description:
      "Demande de contraceptif d'urgence suite à un rapport non protégé.",
  },
  {
    id: 3,
    title: "Violence",
    module: "sms_ana",
    description:
      "Signalement d'abus physiques, mentaux ou émotionnels, besoin d'assistance immédiate.",
  },
  {
    id: 4,
    title: "IST",
    module: "sms_ana",
    description:
      "Signalement d'une IST nécessitant un traitement immédiat ou des conseils médicaux.",
  },
  {
    id: 5,
    title: "Inondation",
    module: "sms_clim",
    description:
      "Urgence liée à une inondation, nécessitant une aide pour évacuation et soutien.",
  },
  {
    id: 6,
    title: "Sécheresse",
    module: "sms_clim",
    description:
      "Signalement de pénuries d'eau causées par la sécheresse, demandant des ressources.",
  },
  {
    id: 7,
    title: "Pollution",
    module: "sms_clim",
    description:
      "Signalement de problèmes graves de pollution ayant un impact sur la santé publique.",
  },
  {
    id: 8,
    title: "Incendie",
    module: "sms_clim",
    description:
      "Incendies menaçant des zones habitées, nécessitant une intervention d'urgence.",
  },
];
