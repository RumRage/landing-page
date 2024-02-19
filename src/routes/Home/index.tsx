import "../../styles/globals.scss";
import styles from "./styles.module.scss";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

//Components
import SearchButton from "@/components/SearchButton";
import Slider from "@/components/Slider";
import Stat from "@/components/Stat";
import Banner from "@/components/Banner";

//Images
import agents from "@/../../public/assets/agents.png";
import graph from "@/../../public/assets/graph.png";
import graph2 from "@/../../public/assets/graph2.png";

export default function Home() {
  const t = useTranslations("Home");
  return (
    <main className={styles.home}>
      {/* FIRST SECTION */}
      <div className={styles.first_section}>
        <div className={styles.section}>
          {/* SLIDER */}
          <div className={styles.slider}>
            <Slider />
          </div>
          {/* TEXT */}
          <div className={styles.text_container}>
            <h1 className={styles.title}>{t("home_title")}</h1>
            <p className={styles.subtitle}>
              {t("home_subtitle")}
              <span className={styles.black}> {t("subtitle_bold")}</span>
            </p>
            <ul className={styles.list}>
              <li>&gt; {t("home_list_one")}</li>
              <li>&gt; {t("home_list_two")} </li>
              <li>&gt; {t("home_list_three")}</li>
            </ul>
            <div className={styles.info}>
              <SearchButton />
              <div className={styles.stats}>
                <Stat number={+2943} title={t("stat_one")} />
                <Stat number="+1M" title={t("stat_two")} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* SECOND SECTION */}
      <div className={styles.second_section}>
        <div className={styles.top_background_nuts}></div>
        <div className={styles.section}>
          {/* FUNCTIONING */}
          <div className={styles.container}>
            <div className={styles.text_section}>
              <h1 className={styles.title_work}>{t("title")}</h1>
              <p className={styles.subtitle}>{t("subtitle")}</p>
              <ul>
                <li>&gt; {t("list_one")}</li>
                <li>&gt; {t("list_two")}</li>
                <li>&gt; {t("list_three")}</li>
              </ul>
            </div>
            {/* AGENTS */}
            <div className={styles.agents_section}>
              <h1 className={styles.title_agents}>{t("agents")} </h1>
              {/* Mobile Image */}
              <Image
                src={agents}
                alt="Agents"
                width={202}
                height={155}
                className={styles.mobile_image_agents}
              />

              {/* Desktop Image */}
              <Image
                src={agents}
                alt="Agents"
                width={350}
                height={270}
                className={styles.desktop_image_agents}
              />
              <Link href="#" className={styles.link}>
                {t("link_agents")}
              </Link>
            </div>
          </div>

          {/* DIAGRAM */}

          <div className={styles.image_section}>
            <h1 className={styles.title}>{t("title_scheme")} </h1>
            {/* MOBILE IMAGE */}
            <Image
              src={graph2}
              alt="Graph Mobile"
              width={329}
              height={777}
              className={styles.mobile_image}
            />

            {/* DESKTOP IMAGE */}
            <Image
              src={graph}
              alt="Graph Desktop"
              width={1308}
              height={706}
              className={styles.desktop_image}
            />
            <div className={styles.desktop_text}>
              <p>{t("text_scheme")}</p>
            </div>

            <div className={styles.button_container}>
              <button>{t("button")} → </button>
            </div>
          </div>
        </div>

        <div className={styles.bottom_background_nuts}> </div>

        <Banner />
      </div>
    </main>
  );
}
