// src/layouts/PublicLayout.jsx
import { Outlet } from 'react-router-dom';
import PublicNavbar from '../components/common/PublicNavbar';
import Footer from '../components/common/Footer';

const PublicLayout = () => {
  return (
    <div className="public-layout">
      <PublicNavbar />
      <main className="container py-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;