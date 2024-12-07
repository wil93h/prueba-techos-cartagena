import React from "react";
import { useTranslation } from "react-i18next";

const MainSection = () => {
  const { t } = useTranslation();

  return (
    <div className="rounded-lg p-8 bg-slate-500 dark:bg-opacity-20 bg-opacity-5" style={{ backdropFilter: "blur(2px)" }}>
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-gold dark:text-gold-dark">
          {t("welcome_title")}
        </h1>
        <p className="text-xl font-semibold text-gold-dark mt-4 dark:text-gold-dark">
          {t("welcome_subtitle")}
        </p>
      </header>
      <article className="max-w-4xl mx-auto text-center px-4">
        <p className="text-lg font-medium text-gray-800 mb-6 dark:text-black">
          {t("welcome_text")}
        </p>

        <p className="italic font-semibold text-gold-light dark:text-gold-light">
          {t("quote")}
        </p>
      </article>
      <div className="text-center mt-8">
        <a
          href="#about"
          className="bg-gold text-gray-800 px-6 py-3 rounded-lg hover:bg-gold-light transition duration-300 dark:bg-gold-dark dark:text-gray-200 dark:hover:bg-yellow-500"
        >
          {t("about_title")}
        </a>
      </div>
    </div>
  );
};

export default MainSection;
