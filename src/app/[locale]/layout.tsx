import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "../../styles/theme.scss";
import { notFound } from "next/navigation";
import { locales } from "@/navigation";
import { NextIntlClientProvider, useMessages } from "next-intl";

//components
import Navbar from "../../components/Navbar";

const barlow = Barlow({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Landing Page",
  description: "Clara Villarruel",
};

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale as any)) notFound();

  const messages = useMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={barlow.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
