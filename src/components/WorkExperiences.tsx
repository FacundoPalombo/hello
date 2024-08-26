import { useTranslation } from "react-i18next";
import Experience from "./Experience";
import styles from "./WorkExperiences.module.css";
import Case from "../assets/Case";
import MercadoLibre from "../assets/MercadoLibre";
import Globant from "../assets/Globant";

export default function WorkExperiences() {
  const { t } = useTranslation();
  return (
    <section className={styles.workExperiences}>
      <h2 className={styles.workExperiences__heading}>
        <Case />
        {t("Experiencia laboral")}
      </h2>
      <div className={styles.workExperiences__list}>
        <Experience
          title={t("Senior Software Engineer")}
          company={t("Mercado Libre")}
          lastDate={t("Septiembre 2023")}
          logo={<MercadoLibre />}
        >
          {t(
            "Lideré el desarrollo frontend en Mercadolibre, diseñé arquitecturas clave, integré proveedores como Disney+ y HBO Max, ejecuté migraciones críticas, y desarrollé un widget estratégico para usuarios afiliados, contribuyendo al programa de lealtad y suscripciones."
          )}
        </Experience>

        <Experience
          title={t("Frontend Technical Leader")}
          company={t("Globant")}
          lastDate={t("Junio 2021")}
          logo={<Globant />}
        >
          {t(
            "Lideré un equipo en Globant para desarrollar una billetera virtual para Prisma Medios de Pago, facilitando la colaboración entre frontend, backend e infraestructura. Implementé funciones clave, promoví buenas prácticas de desarrollo y trabajé en productos para Disney, incluyendo landing pages y mantenimiento de reproductores de video."
          )}
        </Experience>
      </div>
    </section>
  );
}
