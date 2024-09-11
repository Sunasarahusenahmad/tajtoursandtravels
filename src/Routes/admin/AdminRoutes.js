import { Route, Routes } from 'react-router-dom';
import Dashboard from '../../pages/admin/Dashboard';
import Settings from '../../pages/admin/Settings/Settings';
import Singin from '../../pages/admin/Auth/Singin';
import ForgetPassword from '../../pages/admin/Auth/ForgetPassword';
import AdminAuthGuard from '../../shared/AdminAuthGuard';
import AdminPageGuard from '../../shared/AdminPageGuard';
import NotFound from '../../pages/admin/404/NotFound';
import Bookings from '../../pages/admin/Bookings/Bookings';
import Vehicle from '../../pages/admin/Vehicle/Vehicle';
import Services from '../../pages/admin/Service/Services';
import Reviews from '../../pages/admin/Review/Reviews';
import Blogs from '../../pages/admin/Blogs/Blogs';
import AddReview from '../../pages/admin/Review/AddReview';
import EditReview from '../../pages/admin/Review/EditReview';
import AddService from '../../pages/admin/Service/AddService';
import EditService from '../../pages/admin/Service/EditService';
import AddBlog from '../../pages/admin/Blogs/AddBlog';
import EditBlog from '../../pages/admin/Blogs/EditBlog';
import AddVehicle from '../../pages/admin/Vehicle/AddVehicle';
import EditVehicle from '../../pages/admin/Vehicle/EditVehicle';
import Utils from '../../pages/admin/Utils/Utils';
import EditUtils from '../../pages/admin/Utils/EditUtils';
import EditBooking from '../../pages/admin/Bookings/EditBooking';
import SendEmail from '../../pages/admin/Auth/SendEmail';

function AdminRoutes() {
  return (
    <>
      <Routes>

        {/* Auth */}
        <Route path='/signin' element={<AdminPageGuard><Singin /></AdminPageGuard>} />
        <Route path='/forgetpassword/:token' element={<AdminPageGuard><ForgetPassword /></AdminPageGuard>} />
        <Route path='/sendemail' element={<AdminPageGuard><SendEmail /></AdminPageGuard>} />
        
        {/* Dashboard */}
        <Route path='/dashboard' element={<AdminAuthGuard> <Dashboard /> </AdminAuthGuard>} />
        
        {/* Settings */}
        <Route path='/settings' element={<AdminAuthGuard> <Settings /> </AdminAuthGuard>} />

        {/* Bookings */}
        <Route path='/booking' element={<AdminAuthGuard> <Bookings /> </AdminAuthGuard>} />
        <Route path='/booking/edit/:id' element={<AdminAuthGuard> <EditBooking /> </AdminAuthGuard>} />

        {/* Vehicles */}
        <Route path='/vehicle' element={<AdminAuthGuard> <Vehicle /> </AdminAuthGuard>} />
        <Route path='/vehicle/add' element={<AdminAuthGuard> <AddVehicle /> </AdminAuthGuard>} />
        <Route path='/vehicle/edit/:id' element={<AdminAuthGuard> <EditVehicle /> </AdminAuthGuard>} />

        {/* Services */}
        <Route path='/service' element={<AdminAuthGuard> <Services /> </AdminAuthGuard>} />
        <Route path='/service/add' element={<AdminAuthGuard> <AddService /> </AdminAuthGuard>} />
        <Route path='/service/edit/:id' element={<AdminAuthGuard> <EditService /> </AdminAuthGuard>} />

        {/* Reviews */}
        <Route path='/review' element={<AdminAuthGuard> <Reviews /> </AdminAuthGuard>} />
        <Route path='/review/add' element={<AdminAuthGuard> <AddReview /> </AdminAuthGuard>} />
        <Route path='/review/edit/:id' element={<AdminAuthGuard> <EditReview /> </AdminAuthGuard>} />



        {/* Utils */}
        <Route path='/util' element={<AdminAuthGuard> <Utils /> </AdminAuthGuard>} />
        <Route path='/util/edit/:id' element={<AdminAuthGuard> <EditUtils /> </AdminAuthGuard>} />

        {/* Blog */}
        <Route path='/blog' element={<AdminAuthGuard> <Blogs /> </AdminAuthGuard>} />
        <Route path='/blog/add' element={<AdminAuthGuard> <AddBlog /> </AdminAuthGuard>} />
        <Route path='/blog/edit/:id' element={<AdminAuthGuard> <EditBlog /> </AdminAuthGuard>} />
        
        {/* 404 */}
        <Route path='*' element={<AdminAuthGuard><NotFound /></AdminAuthGuard>} />
      </Routes>
    </>
  );
}

export default AdminRoutes;
