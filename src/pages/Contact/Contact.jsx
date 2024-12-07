import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { ProgressSpinner } from 'primereact/progressspinner';

const Contact = () => {
  const { t } = useTranslation(); // Inicializamos i18next
  const schema = Yup.object({
    name: Yup.string().required(t('contact_name_error')),
    email: Yup.string().email(t('contact_email_invalid')).required(t('contact_email_error')),
    phone: Yup.string().required(t('contact_phone_error')),
    message: Yup.string().required(t('contact_message_error')),
    loading: Yup.boolean()
  });

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      loading: false
    },
  });

  const onSubmit = (data) => {
    console.log('Datos enviados:', data);
    setValue("loading",true);
    setTimeout(() => {
      reset();
      setValue("loading",false);
    }, 3000); 
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: '', // Reemplaza con tu clave API
  });
  if (!isLoaded) return <div>Cargando mapa...</div>;


  return (
    <div className="pt-20 h-full flex flex-col gap-4 bg-gradient-to-l from-slate-200 to-gold-light dark:from-gray-900 dark:to-gold-dark">
      <div className='flex justify-center pb-5'>
        <form onSubmit={handleSubmit(onSubmit)} className="w-5/6 sm:w-4/6 px-10 py-4 shadow-lg rounded-2xl  bg-gradient-to-br from-gray-800  to-gold-dark bg-opacity-20 dark:from-gold-light dark:to-gold-dark">
          <h1 className="p-4 text-4xl text-center font-extrabold text-gold dark:text-gold-dark">
            {t("contact_title")}
          </h1>
          <div className="mb-4">
            <label htmlFor="name" className="block  text-gold-light dark:text-gold-dark">{t('contact_name')}</label>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <InputText id="name" {...field} className={`w-full ${errors.name && 'p-invalid'} p-2 border-2 border-gold focus:ring-2 focus:ring-gold-light dark:border-gold-dark dark:bg-gray-700 dark:text-slate-200`} />
              )}
            />
            {errors.name && <small className="text-gold dark:text-gold-light">{errors.name.message}</small>}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block  text-gold-light dark:text-gold-dark">{t('contact_email')}</label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <InputText id="email" {...field} className={`w-full ${errors.email && 'p-invalid'} p-2 border-2 border-gold focus:ring-2 focus:ring-gold-light dark:border-gold-dark dark:bg-gray-700 dark:text-slate-200`} />
              )}
            />
            {errors.email && <small className="text-gold dark:text-gold-light">{errors.email.message}</small>}
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-gold-light dark:text-gold-dark">{t('contact_phone')}</label>
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <InputText id="phone" {...field} className={`w-full ${errors.phone && 'p-invalid'}  p-2 border-2 border-gold focus:ring-2 focus:ring-gold-light dark:border-gold-dark dark:bg-gray-700 dark:text-slate-200`} />
              )}
            />
            {errors.phone && <small className="text-gold dark:text-gold-light">{errors.phone.message}</small>}
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block  text-gold-light dark:text-gold-dark">{t('contact_message')}</label>
            <Controller
              name="message"
              control={control}
              render={({ field }) => (
                <InputTextarea
                  id="message"
                  {...field}
                  rows={5}
                  className={`w-full ${errors.message && 'p-invalid'} p-2 border-2 border-gold focus:ring-2 focus:ring-gold-light dark:border-gold-dark dark:bg-gray-700 dark:text-slate-200`}
                />
              )}
            />
            {errors.message && <small className="text-gold dark:text-gold-light">{errors.message.message}</small>}
          </div>

          <Button
            type="submit"
            label="Enviar"
            className="w-full p-button-primary bg-gold hover:bg-gold-dark text-gray-900 font-semibold py-2 px-4 rounded transition duration-300 transform hover:scale-105 hover:shadow-lg"
          />
        </form>
        {watch("loading") && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
            <ProgressSpinner />
          </div>
        )}
      </div>

      <div className="flex flex-col lg:flex-row gap-8 p-6 ">
      {/* Contact Information */}
      <div className="flex-1 space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">{t("contact_title")}</h2>
        <p className="text-gray-600 dark:text-gold-light">{t("contact_description")}</p>
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{t("contact_address_title")}</h3>
          <p className="text-gray-600 dark:text-gold-light">{t("contact_address")}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{t("contact_phone_title")}</h3>
          <p className="text-gray-600 dark:text-gold-light">{t("contact_phone1")}</p>
          <p className="text-gray-600 dark:text-gold-light">{t("contact_phone2")}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{t("contact_hours_title")}</h3>
          <p className="text-gray-600 dark:text-gold-light">{t("contact_hours_weekdays")}</p>
          <p className="text-gray-600 dark:text-gold-light">{t("contact_hours_saturdays")}</p>
        </div>
      </div>

      <div className="w-5/6 sm:flex-1 h-[400px]   rounded-xl">
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={{ lat: 10.3932, lng: -75.4832 }}
          zoom={14}
          className="rounded-2xl"
        >
          <Marker position={{ lat: 10.3932, lng: -75.4832 }} />
        </GoogleMap>
      </div>
    </div>
    </div>
  );
}

export default Contact