import React, { useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";
import { useThemeCtx } from "./ThemeProvider";

export const I18nProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const { setDirection } = useThemeCtx();

  useEffect(() => {
    const handleLanguageChange = (lng: string) => {
      const dir = lng === "fa" ? "rtl" : "ltr";
      setDirection(dir);
    };

    handleLanguageChange(i18n.language);

    i18n.on("languageChanged", handleLanguageChange);

    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, [setDirection]);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};
