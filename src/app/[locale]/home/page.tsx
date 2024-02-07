import "../../../styles/globals.scss";

//Components
import SearchButton from "@/components/SearchButton";
import Slider from "@/components/Slider";
import Stats from "@/components/Stats";

import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Home");
  return (
    <div className="home_container">
      <div className="section">
        {/* SLIDER */}
        <div className="slider">
          <Slider />
        </div>
        {/* TEXT */}
        <div className="text_container">
          <h1 className="title">{t("title")}</h1>
          <p className="subtitle">
            {t("subtitle")}
            <span className="black"> {t("subtitle_bold")}</span>
          </p>
          <div className="list">
            <ol>
              <li>&gt; {t("list_one")}</li>
              <li>&gt; {t("list_two")} </li>
              <li>&gt; {t("list_three")}</li>
            </ol>
          </div>
          <div className="info">
            <SearchButton />
            <div className="stats">
              <Stats />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
