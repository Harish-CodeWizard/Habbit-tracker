import Sidebar from "./Sidebar";
import MobileNav from "./MobileNav";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white flex overflow-x-hidden">

      {/* Desktop Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 md:ml-[88px] pb-28 md:pb-0 transition-all duration-300">

        {/* Background Glow */}
        <div className="fixed top-[-120px] left-[-120px] w-[260px] h-[260px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="fixed bottom-[-120px] right-[-120px] w-[260px] h-[260px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>

        {/* Content Wrapper */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6">

          {children}
        </div>
      </main>

      {/* Mobile Navigation */}
      <MobileNav />
    </div>
  );
};

export default MainLayout;