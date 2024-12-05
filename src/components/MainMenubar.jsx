import React from 'react'
import { useTranslation } from 'react-i18next';
import { Menubar } from 'primereact/menubar';
import LanguageSelector from './LanguageSelector';
import { FaArrowLeftLong } from "react-icons/fa6";
import { Button } from 'primereact/button';
import TC from '../assets/TC.svg';
import { useState } from 'react';
import { useEffect } from 'react';

const MainMenubar = ({ children }) => {
  const { t, i18n } = useTranslation();
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolling(true)
      } else {
        setScrolling(false)
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const items = [
    {
        label: 'Home',
        icon: 'pi pi-home'
    },
    {
        label: 'Features',
        icon: 'pi pi-star'
    }
  ];
  
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  const start = <img alt="logo" src={TC} height="40" className="mr-2"></img>;
  return (
  <div className='h-screen w-fullflex flex-col '>
    {/* <div className='h-1/8 flex justify-between'>
      <Button
        label="Submit" 
        icon={<FaArrowLeftLong  style={{ marginRight: '8px' }}/>} 
        className=''
        iconPos="left" 
        // loading={loading} 
        // onClick={load} 
      />
      <img 
        src={TC}
      />

      <div>
        <LanguageSelector/>
      </div>
    </div> */}
    <div className="card">
      <Menubar  model={items} start={start}  className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
          ${scrolling ? 'bg-transparent text-white' : 'bg-yellow-600 text-white shadow-lg'}`}
        style={{ backdropFilter: 'blur(10px)' }}  />
    </div>
    <div className='pt-32'>
      { children }
    </div>
  </div>
  )
}

export default MainMenubar