import SocialLinks from "./social-links";
import Navigations from "./navigations";
import Logo from "./logo";
import MobileNav from "./mobile-nav";
import { ThemeSwitcher } from "./theme-switcher";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-[#1e1e1e] border-b border-gray-700/80 backdrop-blur-lg">
      <header className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main navigation container */}
        <div className="flex h-16 items-center justify-between">
          {/* Logo and mobile menu */}
          <div className="flex items-center gap-6">
            <div className="lg:hidden">
              <MobileNav />
            </div>
            <Logo />
          </div>

          {/* Desktop navigation - Professional tab style */}
          <nav className="hidden lg:flex items-center h-full">
            <div className="flex h-full items-center border-r border-gray-700 pr-6 mr-6">
              <Navigations />
            </div>

            <div className="flex items-center gap-5">
              <SocialLinks />

              <div className="w-px h-6 bg-gray-700"></div>

              <ThemeSwitcher />
            </div>
          </nav>

          {/* Mobile theme switcher */}
          <div className="flex lg:hidden items-center gap-4">
            <ThemeSwitcher />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
