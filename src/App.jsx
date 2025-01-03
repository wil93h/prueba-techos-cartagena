import { Suspense,lazy } from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import { BrowserRouter, Route } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import RouterWithNotFound from './components/RouterWithNotFound'
import MainMenubar from './components/MainMenu.jsx'
import Sections from './pages/Sections.jsx'


const MainSection = lazy(() => import('./pages/MainSection/MainSection.jsx'));
const Services = lazy(() => import('./pages/Services/Services.jsx'));
const Projects = lazy(() => import('./pages/Projects/Projects.jsx'));

function App() {
  const { t } = useTranslation();
  const routes = {
    mainSection: t('mainSection'),
    services: t('services'),
    projects: t('projects'),
  };
  return (
   <Suspense fallback={<>Cargando...</>}>
    <Provider store={store}>
      <BrowserRouter>
        <RouterWithNotFound>
          <Route path="/" element={<Sections/>} />
        </RouterWithNotFound>
      </BrowserRouter>
    </Provider>
   </Suspense>
  )
}

export default App