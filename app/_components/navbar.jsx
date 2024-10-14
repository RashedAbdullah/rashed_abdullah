import NavSearch from "./nav-search";
import SocialLinks from "./social-links";
import Navigations from "./navigations";
import Logo from "./logo";
import MobileNav from "./mobile-nav";
import { ThemeSwitcher } from "./theme-switcher";

const Navbar = () => {
  return (
    <div className="border-b-[0.1px] sticky top-0 z-50 text-black backdrop-blur-lg dark:text-white">
      <header className="container py-6 flex justify-between items-center backdrop-blur-lg">
     
        <div className="lg:hidden inline-block">
          <MobileNav />
        </div>
        <Logo />

        <div className="md:hidden block">
          <ThemeSwitcher />
        </div>

        <nav className="hidden lg:flex gap-10 justify-center items-center">
          <Navigations />

          <SocialLinks />
          <ThemeSwitcher />
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
