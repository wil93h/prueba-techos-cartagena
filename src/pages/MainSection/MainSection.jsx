import React from 'react'
import { useTranslation } from 'react-i18next';

const MainSection = () => {
  const { t } = useTranslation();

  return (
    <div className='rounded-lg p-8' style={{ backdropFilter: 'blur(2px)' }}>
 <header className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-yellow-400 dark:text-yellow-300">
            {t('welcome_title')}
          </h1>
          <p className="text-xl text-yellow-300 mt-4 dark:text-yellow-200">
            {t('welcome_subtitle')}
          </p>
        </header>
        <article className="max-w-4xl mx-auto text-center px-4">
          <p className="text-lg text-gray-300 mb-6 dark:text-gray-200">
            {t('welcome_text')}
          </p>

          <p className="italic text-gray-400 dark:text-gray-500">
            {t('quote')}
          </p>
        </article>
        <div className="text-center mt-8">
          <a
            href="#about"
            className="bg-yellow-400 text-gray-800 px-6 py-3 rounded-lg hover:bg-yellow-500 transition duration-300 dark:bg-yellow-600 dark:text-gray-200 dark:hover:bg-yellow-500"
          >
            {t('about_title')}
          </a>
        </div>
    </div>
  )
}

export default MainSection