import React from 'react'
import { useTranslation } from 'react-i18next';
import TC from '../assets/TC.svg';
import { useEffect } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, FormProvider } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';
import LanguageSelector from './LanguageSelector';
import { MultiStateCheckbox } from 'primereact/multistatecheckbox';
import { useSelector,useDispatch } from 'react-redux';
import { createUser } from '../redux/slice/user';



const MainMenu = ({ children }) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const validationSchema = yup.object().shape({
    scrolling: yup.boolean(),
    activeSection: yup.boolean(),
    mode: yup.string(),
  })
  
  const methods = useForm({ 
    resolver: yupResolver(validationSchema),
    defaultValues:{
      scrolling: false,
      mode: user.mode ?? "light"
    }
  });
  
  const { watch, setValue } = methods;
  const { activeSection } = watch();

  useEffect(() => {
    const handleScroll = () => {
      // Obtener las posiciones de cada sección
      const sections = document.querySelectorAll("[data-section]");
      let currentSection = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          currentSection = section.getAttribute("data-section");
        }
      });

      // Actualizar la URL solo si la sección cambia
      if (currentSection && currentSection !== activeSection) {
        setValue("activeSection",currentSection);
        navigate(`#${currentSection}`, { replace: true });
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection, navigate]);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setValue("scrolling", true)
      } else {
        setValue("scrolling", false)
      }
    };
    window.addEventListener("scroll", handleScroll);

    if (user.mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const options = [
      { value: "light", icon: "pi pi-sun" },
      { value: "dark", icon: "pi pi-moon" }
  ];
  const handleDarkMode = (e) =>{
    const mode =  e.value || "light";
    setValue("mode",mode);
    dispatch(createUser({mode:mode}));
    if (mode === "dark") {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
  const logo = <img alt="logo" src={TC} width="50px" className="mr-2"></img>;
  
  return (
    <FormProvider {...methods}>
    <div className="h-screen w-full">
      {/* Menubar */}
      <nav className={`fixed top-0 left-0 w-full rounded-md  shadow-md z-50 flex items-center justify-between p-4 transition-all duration-300 
        ${watch("scrolling") ? 'bg-transparent text-white' : 'bg-slate-200 text-gray-700 shadow-lg dark:bg-gray-700'}`}
        style={{ backdropFilter: 'blur(5px)' }}
      >
      {logo}
      <ul className="flex space-x-8">
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            onClick={() => setValue("activeSection","home")}
            className={`cursor-pointer font-bold text-lg ${
              activeSection === "home" ? "text-gold-dark" : "text-gold"
            } hover:underline`}
          >
            {t("mainSection")}
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            onClick={() => setValue("activeSection","about")}
            className={`cursor-pointer font-bold text-lg ${
              activeSection === "about" ? "text-gold-dark" : "text-gold"
            } hover:underline`}
          >
            {t("about")}
          </Link>
        </li>
        <li>
          <Link
            to="services"
            smooth={true}
            duration={500}
            onClick={() => setValue("activeSection","services")}
            className={`cursor-pointer font-bold text-lg ${
              activeSection === "services" ? "text-gold-dark" : "text-gold"
            } hover:underline`}
          >
            {t("services")}
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            onClick={() => setValue("activeSection","projects")}
            className={`cursor-pointer font-bold text-lg ${
              activeSection === "projects" ? "text-gold-dark" : "text-gold"
            } hover:underline`}
          >
            {t("projects")}
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            onClick={() => setValue("activeSection","contact")}
            className={`cursor-pointer font-bold text-lg ${
              activeSection === "contact" ? "text-gold-dark" : "text-gold"
            } hover:underline`}
          >
            {t("contact")}
          </Link>
        </li>
      </ul>
      <div className="flex flex-row gap-3 items-center">
      <MultiStateCheckbox
        value={watch("mode")}  
        onChange={handleDarkMode} 
        options={options} 
        optionValue="value" 
      />
        <LanguageSelector/>
      </div>
    </nav>
      { children }
  </div>
  </FormProvider>
  )
  
}

export default MainMenu