import { EmergencsI } from "./types";

export const ALL_EMERGENCY_SERVICES: EmergencsI[] = [
  {
    id: 1,
    title: "Grossesse",
    module: "sms_ana",
    description:
      "Problèmes de santé liés à une grossesse nécessitant une intervention médicale urgente.",
    icon: "Pregnant",
  },
  {
    id: 2,
    title: "Contraceptif",
    module: "sms_ana",
    description:
      "Demande de contraceptif d'urgence suite à un rapport non protégé.",
    icon: "Contraception",
  },
  {
    id: 3,
    title: "Violence",
    module: "sms_ana",
    description:
      "Signalement d'abus physiques, mentaux ou émotionnels, besoin d'assistance immédiate.",
    icon: "ViolenceWoman",
  },
  {
    id: 4,
    title: "IST",
    module: "sms_ana",
    description:
      "Signalement d'une IST nécessitant un traitement immédiat ou des conseils médicaux.",
    icon: "Infection",
  },
  {
    id: 5,
    title: "Inondation",
    module: "sms_clim",
    description:
      "Urgence liée à une inondation, nécessitant une aide pour évacuation et soutien.",
    icon: "Innondation",
  },
  {
    id: 6,
    title: "Sécheresse",
    module: "sms_clim",
    description:
      "Signalement de pénuries d'eau causées par la sécheresse, demandant des ressources.",
    icon: "Secheresse",
  },
  {
    id: 7,
    title: "Pollution",
    module: "sms_clim",
    description:
      "Signalement de problèmes graves de pollution ayant un impact sur la santé publique.",
    icon: "Pollution",
  },
  {
    id: 8,
    title: "Incendie",
    module: "sms_clim",
    description:
      "Incendies menaçant des zones habitées, nécessitant une intervention d'urgence.",
    icon: "Fire",
  },
];
