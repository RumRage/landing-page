import { useState } from "react";
import { Link } from "@/navigation";
import styles from "./styles.module.scss";

const LangDrop = () => {
  const [changeLangDropdown, setChangeLangDropdown] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("es");

  const toggleLanguage = () => {
    setChangeLangDropdown(!changeLangDropdown);
  };

  const changeLanguage = (lang: string) => {
    setCurrentLanguage(lang);
    setChangeLangDropdown(false);
  };
  return (
    <div onClick={toggleLanguage} className={styles.dropdown}>
      {currentLanguage === "es" ? (
        <>
          <Link href="/" className={styles.link}>
            ES
          </Link>
          {changeLangDropdown && (
            <div className={styles.dropdown_lang}>
              <Link
                href="/"
                locale="en"
                className={styles.link}
                onClick={() => changeLanguage("en")}
              >
                EN
              </Link>
            </div>
          )}
        </>
      ) : (
        <>
          <Link href="/" className={styles.link}>
            EN
          </Link>
          {changeLangDropdown && (
            <div className={styles.dropdown_lang}>
              <Link
                href="/"
                locale="es"
                className={styles.link}
                onClick={() => changeLanguage("es")}
              >
                ES
              </Link>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default LangDrop;
