import createMiddleware from "next-intl/middleware";
import { locales, localePrefix } from "./navigation";

export default createMiddleware({
  locales,
  localePrefix,
  defaultLocale: "es",
});

export const config = {
  matcher: ["/", "/(es|en)/:path*"],
};
