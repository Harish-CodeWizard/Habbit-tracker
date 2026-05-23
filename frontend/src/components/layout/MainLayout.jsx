import Sidebar from './Sidebar';
import MobileNav from './MobileNav';

const MainLayout = ({ children }) => (
  <div className="min-h-screen bg-gradient-to-br from-violet-100 to-fuchsia-100 flex">
    <Sidebar />
    <main className="flex-1 md:ml-20 pb-16 md:pb-0 transition-all duration-300">
      {children}
    </main>
    <MobileNav />
  </div>
);

export default MainLayout;
