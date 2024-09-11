import { Route, Routes } from 'react-router-dom';
import AdminRoutes from './admin/AdminRoutes';
import ClientRoutes from './client/ClientRoutes';

function Index() {
  return (
    <Routes>
      {/* Client Routes */}
      <Route path='/*' element={<ClientRoutes />} />
      
      {/* Admin Routes */}
      <Route path='/admin/*' element={<AdminRoutes />} />

    </Routes>
  );
}

export default Index;
