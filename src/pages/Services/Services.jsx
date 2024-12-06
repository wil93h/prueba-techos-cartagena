import React from 'react'
import { useTranslation } from 'react-i18next';
import teja from "../../assets/techo-teja.jpg";
import solar from "../../assets/techo-solar.jpg";
import lamina from "../../assets/techo-lamina.jpg";

const Services = () => {
  const { t } = useTranslation();

  return (
    <div className="py-20 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 h-full">
    <div className="container mx-auto text-center px-6">
      <h2 className="text-4xl font-extrabold text-gray-900 dark:text-yellow-300 mb-10">
        {t('services_title')}
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-400 mb-12">
        {t('services_subtitle')}
      </p>

      <div className="flex flex-wrap justify-center gap-8">
        {/* Techo Teja */}
        <div className="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-700 hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out w-full sm:w-1/2 md:w-1/3">
          <img
            src={teja}
            alt="Techo Teja"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              {t('roof_tile')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">{t('roof_tile_desc')}</p>
            <p className="font-bold text-gray-800 dark:text-yellow-400">
              {t('roof_tile_price')}
            </p>
          </div>
        </div>

        {/* Techo Lámina */}
        <div className="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-700 hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out w-full sm:w-1/2 md:w-1/3">
          <img
            src={lamina}
            alt="Techo Lámina"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              {t('roof_sheet')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">{t('roof_sheet_desc')}</p>
            <p className="font-bold text-gray-800 dark:text-yellow-400">
              {t('roof_sheet_price')}
            </p>
          </div>
        </div>

        {/* Techo Solar */}
        <div className="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-700 hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out w-full sm:w-1/2 md:w-1/3">
          <img
            src={solar}
            alt="Techo Solar"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              {t('roof_solar')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">{t('roof_solar_desc')}</p>
            <p className="font-bold text-gray-800 dark:text-yellow-400">
              {t('roof_solar_price')}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Services