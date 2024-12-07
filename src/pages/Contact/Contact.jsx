import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation(); // Inicializamos i18next
  const schema = Yup.object({
    name: Yup.string().required(t('contact_name_error')),
    email: Yup.string().email(t('contact_email_invalid')).required(t('contact_email_error')),
    phone: Yup.string().required(t('contact_phone_error')),
    message: Yup.string().required(t('contact_message_error')),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log('Datos enviados:', data);
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: '', // Reemplaza con tu clave API
  });
  if (!isLoaded) return <div>Cargando mapa...</div>;

  return (
    <div className="h-screen flex flex-col gap-4 p-4 ">
      <form onSubmit={handleSubmit(onSubmit)} className="p-4 shadow-lg rounded">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">{t('contact_name')}</label>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <InputText id="name" {...field} className={`w-full ${errors.name && 'p-invalid'}`} />
            )}
          />
          {errors.name && <small className="p-error">{errors.name.message}</small>}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">{t('contact_email')}</label>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <InputText id="email" {...field} className={`w-full ${errors.email && 'p-invalid'}`} />
            )}
          />
          {errors.email && <small className="p-error">{errors.email.message}</small>}
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-gold dark:text-gold-dark">{t('contact_phone')}</label>
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <InputText id="phone" {...field} className={`w-full ${errors.phone && 'p-invalid'}  p-2 border-2 border-gold focus:ring-2 focus:ring-gold-light dark:border-gold-dark dark:bg-black dark:text-white`} />
            )}
          />
          {errors.phone && <small className="p-error">{errors.phone.message}</small>}
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700">{t('contact_message')}</label>
          <Controller
            name="message"
            control={control}
            render={({ field }) => (
              <InputTextarea
                id="message"
                {...field}
                rows={5}
                className={`w-full ${errors.message && 'p-invalid'}`}
              />
            )}
          />
          {errors.message && <small className="p-error">{errors.message.message}</small>}
        </div>

        <Button type="submit" label="Enviar" className="w-full p-button-primary" />
      </form>

      <div className="map-container">
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '400px' }}
          center={{ lat: 40.7128, lng: -74.0060 }}
          zoom={10}
        >
          <Marker position={{ lat: 40.7128, lng: -74.0060 }} />
        </GoogleMap>
      </div>
    </div>
  );
}

export default Contact