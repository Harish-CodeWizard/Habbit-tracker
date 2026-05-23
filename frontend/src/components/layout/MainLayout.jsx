import Sidebar from './Sidebar';
import MobileNav from './MobileNav';

const MainLayout = ({ children }) => (
  <div className="min-h-screen bg-gradient-to-br from-violet-50 to-white flex">
    <Sidebar />
    <main className="flex-1 md:ml-20 pb-16 md:pb-0 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">{children}</div>
    </main>
    <MobileNav />
  </div>
);

export default MainLayout;
