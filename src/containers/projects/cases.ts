import { SuccessCaseProps } from "./Projects";
import tpImage from "../../assets/tp.webp";
import mpuntosImage from "../../assets/mpuntos.webp";
import affiImage from "../../assets/affi.webp";
import backofficeImage from "../../assets/backoffice.webp";

const successCaseMocks: SuccessCaseProps[] = [
  {
    image: affiImage,
    title: "Mentorías y programa de afiliados",
    technologies: [
      "nodejs",
      "express",
      "react",
      "preact",
      "rollup",
      "awscloudfront",
      "awss3",
      "awslambda",
      "nginx",
      "jira",
    ],
    description:
      "Fuí referente técnico y mentor de varios desarrolladores en Mercado Libre, estuve en el desarrollo del programa de afiliados desde sus inicios y ayudé a evolucionar la arquitectura frontend y backend de la misma. Ayudé a mejorar el delivery, los procesos de control de calidad, la calidad de los entregables de frontend, y apliqué arquitectura hexagonal en los frontends para mejorar la mantenibilidad, escalabilidad y seguridad de esas aplicaciones.",
    links: [],
  },

  {
    image: backofficeImage,
    title: "Desarrollos de alto impacto",
    technologies: [
      "nodejs",
      "express",
      "react",
      "aws",
      "node",
      "storybook",
      "sass",
      "javascript",
      "jira",
      "spring",
      "go",
    ],
    description:
      "Hice varios desarrollos en Mercado Libre de alto impacto, desde un widget en las paginas de productos que soportaba mas de 45krpm, hasta liderar la iniciativa de backoffice de mi BU, facilitando con esas herramientas la resolucion de casos de customer experience. Desarrollé las primeras herramientas basadas en microfrontends en mi BU y fuí pionero para los desarrollos de las mismas.",
    links: [],
  },
  {
    image: mpuntosImage,
    title: "Migraciones en Mercado Libre",
    technologies: [
      "nodejs",
      "express",
      "react",
      "storybook",
      "sass",
      "javascript",
      "typescript",
      "jira",
    ],
    description:
      "Participé en diferentes procesos de migración dentro de Mercado Libre, en las iniciativas del programa de fidelidad y suscripciones, lideré una migración de framework testing donde logramos mejorar el coverage de todas las aplicaciones de frontend de la BU de <40% a >95%, y estuve en el proceso de evolución hacia su nuevo servicio de suscripcion meli+.",
    links: [],
  },

  {
    image: tpImage,
    title: "Desarrollo Billetera Virtual",
    technologies: [
      "react",
      "nodejs",
      "redux",
      "javascript",
      "sass",
      "spring",
      "jira",
      "angular",
    ],
    description:
      "Lideré el desarrollo de una aplicación de billetera virtual de Prisma Medios de pago desde cero, donde los vendedores podían cobrar, ver saldos, generar links y qr's de pago, ver sus estadisticas y otras operaciones.",
    links: [],
  },
];

export default successCaseMocks;
