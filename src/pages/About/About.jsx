import React from "react";
import { useTranslation } from "react-i18next";
import techos2 from "../../assets/techos-1.jpg";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="rounded-lg p-8 w-4/6" style={{ backdropFilter: "blur(2px)" }}>
      <div className="container mx-auto px-6 py-16 text-center bg-opacity-50 bg-black rounded-lg">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-yellow-300 mb-6">
          {t("about_title")}
        </h2>
        <p className="text-lg sm:text-xl text-white dark:text-gray-300 mb-8">
          {t("about_subtitle")}
        </p>
        <p className="text-lg text-white dark:text-gray-300 mb-12">
          {t("about_description")}
        </p>
        <a
          href="#projects"
          className="bg-yellow-500 text-gray-900 dark:bg-yellow-400 dark:text-gray-800 px-8 py-3 rounded-lg shadow-md transition transform hover:scale-105 hover:shadow-2xl"
        >
          {t("see_projects")}
        </a>
      </div>
    </div>
  );
};

export default About;
