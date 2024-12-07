import React from 'react'
import MainMenu from '../components/MainMenu'
import { lazy } from 'react';
import { useInView } from 'react-intersection-observer';
import { Element } from 'react-scroll';
import { Suspense } from 'react';
import techos from '../assets/SanFrancisco.jpg';
import techos2 from '../assets/techos-2.png';
import techos3 from '../assets/techos-3.jpeg';

const MainSection = lazy(() => import('./MainSection/MainSection'));
const Services = lazy(() => import('./Services/Services'));
const Projects = lazy(() => import('./Projects/Projects'));
const About = lazy(() => import('./About/About'));
const Contact = lazy(() => import('./Contact/Contact'));

const Sections = () => {

  const [homeRef, homeInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [projectsRef, projectsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [contactRef, contactInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <MainMenu>
      <Element data-section="home" name="home" id="home" className="h-auto min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-600 dark:from-purple-700 dark:to-indigo-900 bg-no-repeat bg-cover bg-center"   
        style={{ backgroundImage: `url(${techos})` }}>
        <div ref={homeRef} className='pt-4'>
        {homeInView && (
            <Suspense fallback={<div>Loading Services...</div>}>
              <MainSection />
            </Suspense>
          )}
        </div>
      </Element>

      <Element data-section="about" name="about" id="about" className="h-auto min-h-screen flex items-center justify-center bg-cover bg-center"     
        style={{ backgroundImage: `url(${techos3})` }}>
        <div ref={aboutRef} className='justify-center flex'>
          {aboutInView && (
            <Suspense fallback={<div>Loading About...</div>}>
              <About />
            </Suspense>
          )}
        </div>
      </Element>

      <Element data-section="services" name="services" id="services" className="h-auto min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800">
        <div ref={servicesRef} className='w-full h-full'>
          {servicesInView && (
            <Suspense fallback={<div>Loading Services...</div>}>
              <Services />
            </Suspense>
          )}
        </div>
      </Element>

      <Element data-section="projects" name="projects" id="projects" className="h-screen flex items-center justify-center bg-red-500 ">
        <div ref={projectsRef} className='w-full h-full'>
          {projectsInView && (
            <Suspense fallback={<div>Loading Projects...</div>}>
              <Projects />
            </Suspense>
          )}
        </div>
      </Element>

      <Element data-section="contact" name="contact" id="contact" className="h-screen flex items-center justify-center bg-red-500 ">
        <div ref={contactRef} className='w-full h-full'>
          {contactInView && (
            <Suspense fallback={<div>Loading Contact...</div>}>
              <Contact />
            </Suspense>
          )}
        </div>
      </Element>
    </MainMenu>
  )
}

export default Sections