import Image from "next/image";
import Link from "next/link";
import "../../../styles/globals.scss";
//Components
import Banner from "@/components/Banner";

import { useTranslations } from "next-intl";

export default function Work() {
  const t = useTranslations("Work");
  return (
    <div className="work_section">
      <div className="top_background_nuts"></div>
      <div className="section">
        {/* WORK */}
        <div className="container">
          <div className="text_section">
            <h1 className="title_work">{t("title")}</h1>
            <p className="subtitle">{t("subtitle")}</p>
            <div className="list">
              <ol>
                <li>&gt; {t("list_one")}</li>
                <li>&gt; {t("list_two")}</li>
                <li>&gt; {t("list_three")}</li>
              </ol>
            </div>
          </div>
          {/* AGENTS */}
          <div className="agents_section">
            <h1 className="title_agents">{t("agents")} </h1>
            {/* Mobile Image */}
            <Image
              src="/assets/agents.png"
              alt="Agents"
              width={202}
              height={155}
              className="mobile_image_agents"
            />

            {/* Desktop Image */}
            <Image
              src="/assets/agents.png"
              alt="Agents"
              width={350}
              height={270}
              className="desktop_image_agents"
            />
            <Link href="#" className="link">
              {t("link_agents")}
            </Link>
          </div>
        </div>

        {/* DIAGRAM */}

        <div className="image_section">
          <h1 className="title">{t("title_scheme")} </h1>
          {/* MOBILE IMAGE */}
          <Image
            src="/assets/graph2.png"
            alt="Graph Mobile"
            width={329}
            height={777}
            className="mobile_image"
          />

          {/* DESKTOP IMAGE */}
          <Image
            src="/assets/graph.png"
            alt="Graph Desktop"
            width={1308}
            height={706}
            className="desktop_image"
          />
          <div className="desktop_text">
            <p>{t("text_scheme")}</p>
          </div>

          <div className="button_container">
            <button>{t("button")} → </button>
          </div>
        </div>
      </div>

      <div className="bottom_background_nuts"> </div>

      <Banner />
    </div>
  );
}
