import React from "react";
import { useTranslation } from "react-i18next";
import project1 from "../../assets/project-1.jpg"
import project2 from "../../assets/project-2.jpg"
import project3 from "../../assets/project-3.jpg"
import project4 from "../../assets/project-4.jpg"
import project5 from "../../assets/project-5.jpg"
import project6 from "../../assets/project-6.jpg"
import project7 from "../../assets/project-7.jpg"
import project8 from "../../assets/project-8.jpg"
import { ScrollPanel } from 'primereact/scrollpanel';

const Projects = () => {
  const { t } = useTranslation();
  const projectList = [
    { id: 1, image: project1, title: t('project_1_title'), description: t('project_1_description') },
    { id: 2, image: project2, title: t('project_2_title'), description: t('project_2_description') },
    { id: 3, image: project3, title: t('project_3_title'), description: t('project_3_description') },
    { id: 4, image: project4, title: t('project_4_title'), description: t('project_4_description') },
    { id: 5, image: project5, title: t('project_5_title'), description: t('project_5_description') },
    { id: 6, image: project6, title: t('project_6_title'), description: t('project_6_description') },
    { id: 7, image: project7, title: t('project_7_title'), description: t('project_7_description') },
    { id: 8, image: project8, title: t('project_8_title'), description: t('project_8_description') },
  ];
  return (
    <div className="flex flex-col lg:flex-row h-full ">
      {/* Columna izquierda */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 bg-gradient-to-b from-slate-200 to-gold-dark shadow dark:from-gray-800 dark:to-gold-dark">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-yellow-600 dark:text-yellow-400">
          {t("projects_title")}
        </h2>
        <p className="text-lg sm:text-xl mb-4 dark:text-gray-900">
          {t("projects_general_description")}
        </p>
        <p className="text-base sm:text-lg dark:text-gray-900">
          {t("projects_detail_description")}
        </p>
      </div>
    
      {/* Columna derecha */} 
      <div className="w-full lg:w-1/2 overflow-y-auto justify-center flex items-center align-middle p-6 bg-gradient-to-tr from-slate-200 to-gray-400 shadow dark:from-gray-800 dark:to-gold-dark ">
      <ScrollPanel
            style={{
              width: '100%',
              height: '80%',
              overflow: 'hidden',
              borderRadius: '0.5rem',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}
            className="dark:bg-gray-800"
        >

        
        <div className="grid gap-6">
          {projectList.map((project) => (
            <div
              key={project.id}
              className="flex items-start bg-white dark:bg-gray-900 shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-24 h-24 object-cover rounded-lg mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-yellow-400">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        </ScrollPanel>
      </div>
    </div>
  );
};

export default Projects;
