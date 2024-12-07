import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import TC from '../assets/TC.svg';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, FormProvider } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';
import LanguageSelector from './LanguageSelector';
import { MultiStateCheckbox } from 'primereact/multistatecheckbox';
import { useSelector, useDispatch } from 'react-redux';
import { createUser } from '../redux/slice/user';

const MainMenu = ({ children }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const validationSchema = yup.object().shape({
    scrolling: yup.boolean(),
    activeSection: yup.boolean(),
    mode: yup.string(),
  });

  const methods = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      scrolling: false,
      mode: user.mode ?? 'light',
    },
  });

  const { watch, setValue } = methods;
  const { activeSection } = watch();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-section]');
      let currentSection = '';

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          currentSection = section.getAttribute('data-section');
        }
      });

      if (currentSection && currentSection !== activeSection) {
        setValue('activeSection', currentSection);
        navigate(`#${currentSection}`, { replace: true });
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection, navigate]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setValue('scrolling', true);
      } else {
        setValue('scrolling', false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    if (user.mode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [user.mode, setValue]);

  const options = [
    { value: 'light', icon: 'pi pi-sun' },
    { value: 'dark', icon: 'pi pi-moon' },
  ];

  const handleDarkMode = (e) => {
    const mode = e.value || 'light';
    setValue('mode', mode);
    dispatch(createUser({ mode }));
    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const logo = <img alt="logo" src={TC} width="50px" className="mr-2"></img>;

  return (
    <FormProvider {...methods}>
      <div className="h-screen w-full">
        {/* Menubar */}
        <nav
          className={`fixed top-0 left-0 w-full shadow-md z-50 flex items-center justify-between p-4 transition-all duration-300 
          ${watch('scrolling') ? 'bg-transparent text-white' : 'bg-slate-200 text-gray-700 shadow-lg dark:bg-gray-700'}`}
          style={{ backdropFilter: 'blur(5px)' }}
        >
          {logo}
          <button
            className="block md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`pi ${isMenuOpen ? 'pi-times' : 'pi-bars text-gold-dark'} text-2xl`}></i>
          </button>
          <ul
            className={`${
              isMenuOpen ? 'flex' : 'hidden'
            } flex-col md:flex md:flex-row md:space-x-8 md:items-center absolute md:static bg-slate-200 md:bg-transparent dark:bg-gray-700 md:dark:bg-transparent top-16 left-0 w-full md:w-auto space-y-4 md:space-y-0 md:pl-0 p-4 md:p-0`}
          >
            {['home', 'about', 'services', 'projects', 'contact'].map((section) => (
              <li key={section}>
                <Link
                  to={section}
                  smooth={true}
                  duration={500}
                  onClick={() => {
                    setValue('activeSection', section);
                    setIsMenuOpen(false);
                  }}
                  className={`cursor-pointer font-bold text-lg ${
                    activeSection === section ? 'text-gold-dark' : 'text-gold'
                  } hover:underline`}
                >
                  {t(section)}
                </Link>
              </li>
            ))}
          </ul>
          <div className="hidden md:flex flex-row gap-3 items-center">
            <MultiStateCheckbox
              value={watch('mode')}
              onChange={handleDarkMode}
              options={options}
              optionValue="value"
            />
            <LanguageSelector />
          </div>
        </nav>
        {children}
      </div>
    </FormProvider>
  );
};

export default MainMenu;