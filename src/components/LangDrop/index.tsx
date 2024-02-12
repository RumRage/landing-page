import { usePathname, useRouter, locales } from "@/navigation";
import { useLocale } from "next-intl";
import useCloseDropdown from "@/hooks/useCloseDropdown";

import styles from "./styles.module.scss";

const LangDrop = () => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useCloseDropdown(false);
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();

  return (
    <div className={styles.dropdown} ref={ref}>
      <p
        className={styles.text}
        onClick={() => setIsComponentVisible(!isComponentVisible)}
      >
        {locale.toUpperCase()}
      </p>
      {isComponentVisible && (
        <ol>
          <li className={styles.list_container}>
            {locales
              .filter((loc) => loc != locale)
              .map((loc) => {
                return (
                  <button
                    key={loc}
                    className={styles.list_text}
                    onClick={() => router.replace(pathname, { locale: loc })}
                  >
                    {loc.toUpperCase()}
                  </button>
                );
              })}
          </li>
        </ol>
      )}
    </div>
  );
};

export default LangDrop;
