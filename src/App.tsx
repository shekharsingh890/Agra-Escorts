import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import { lazy, Suspense } from 'react'

const Header = lazy(() => import('./components/Header'))
const Footer = lazy(() => import('./components/Footer'))
const ScrollToTop = lazy(() => import('./components/ScrollToTop'))
const BackToTopButton = lazy(() => import('./components/BackToTopButton'))
const AboutUs = lazy(() => import('./pages/AboutUs'))
const Companions = lazy(() => import('./pages/Companions'))
const Services = lazy(() => import('./pages/Services'))
const Rates = lazy(() => import('./pages/Rates'))
const Contact = lazy(() => import('./pages/Contact'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const TermsAndConditions = lazy(() => import('./pages/Terms&Conditions'))

function App() {
  return (
    <main id='main-content'>
      <Suspense fallback={<div className='flex justify-center items-center w-screen h-screen'>Loading...</div>}>
        <Header />
        <ScrollToTop />

        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about-us' element={<AboutUs />}/>
          <Route path='/companions' element={<Companions />}/>
          <Route path='/services' element={<Services />}/>
          <Route path='/rates' element={<Rates />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/privacy-policy' element={<PrivacyPolicy />}/>
          <Route path='/terms-and-conditions' element={<TermsAndConditions />}/>
          
          <Route path='*' element={<Navigate to='/'/>}/>
        </Routes>

        <BackToTopButton />
        <Footer />
      </Suspense>
    </main>
  )
}

export default App
