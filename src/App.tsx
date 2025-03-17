import './styes.scss'
import "aos/dist/aos.css";
import { Layout } from './componentes/layout/layout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import LoadingDots from './componentes/loading/loading';
import AboutMe from './pages/aboutMePage';

const Work = lazy(() => import('./pages/profilePage'));

function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<LoadingDots />}>
        <Routes>
          <Route path='/'element={<AboutMe />}/>
          <Route path='/work' element={<Work />}/> 
        </Routes>
        </Suspense>
      </Layout>
    </Router>
  )
}

export default App
