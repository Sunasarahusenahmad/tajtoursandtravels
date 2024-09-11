import { Route, Routes } from 'react-router-dom';
import Dashboard from '../../pages/admin/Dashboard';
import NotFound from '../../pages/client/404/NotFound';
import HomePage from '../../pages/client/index';
import AboutPage from '../../pages/client/about';
import ServicesPage from '../../pages/client/services';
import CarsPage from '../../pages/client/cars';
import CarDetails from '../../pages/client/carDetails';
import ContactPage from '../../pages/client/contact';
import TermsOfUse from '../../pages/client/termsOfUse';

function ClientRoutes() {
  return (
    <>
      <Routes>
        
        {/* Home Page */}
        <Route exact path='/' element={ <HomePage />} />

        {/* About Page */}
        <Route path='/about' element={ <AboutPage />} />

        {/* Services Page */}
        <Route path='/services' element={ <ServicesPage />} />

        {/* Cars Page */}
        <Route path='/cars' element={ <CarsPage />} />

        {/* Car Details Page */}
        <Route path='/car-details' element={ <CarDetails />} />

        {/* Contact Page */}
        <Route path='/contact' element={ <ContactPage />} />

        {/* Terms and Condition Page */}
        <Route path='/terms-of-use' element={ <TermsOfUse />} />

        {/* Admin Route */}
        <Route path='/admin-dashboard' element={ <Dashboard />} />

        {/* 404 */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default ClientRoutes;
