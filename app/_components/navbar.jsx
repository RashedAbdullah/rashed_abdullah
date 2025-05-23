import SocialLinks from "./social-links";
import Navigations from "./navigations";
import Logo from "./logo";
import MobileNav from "./mobile-nav";
import { ThemeSwitcher } from "./theme-switcher";

const Navbar = async () => {
  return (
    <div className="sticky top-0 z-50 border-b border-opacity-10 dark:border-opacity-10 border-gray-400 dark:border-gray-600 bg-white/80 dark:bg-black/80 backdrop-blur-lg backdrop-saturate-150 transition-colors duration-300">
      <header className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Mobile menu button and logo */}
          <div className="flex items-center gap-4 md:gap-8">
            <div className="lg:hidden">
              <MobileNav />
            </div>
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            <div className="flex items-center border-r border-gray-200 dark:border-gray-700 pr-6 mr-6 h-6">
              <Navigations />
            </div>

            <div className="flex items-center gap-6">
              <SocialLinks />

              <div className="w-px h-6 bg-gray-200 dark:bg-gray-700"></div>

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
