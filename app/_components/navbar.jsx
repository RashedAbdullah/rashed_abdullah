import NavSearch from "./nav-search";
import SocialLinks from "./social-links";
import Navigations from "./navigations";
import Logo from "./logo";
import MobileNav from "./mobile-nav";

const Navbar = () => {
  return (
    <div className="border-b-[0.1px] sticky top-0 z-50">
      <header className="container py-6 flex justify-between items-center backdrop-blur-lg">
        <Logo />

        {/* Use <nav> for the navigation area */}
        <nav className="hidden lg:flex gap-10 justify-center items-center">
          <Navigations />
          <NavSearch />
          <SocialLinks />
        </nav>

        {/* Mobile Navigation */}
        <div className="lg:hidden inline-block">
          <MobileNav />
        </div>
      </header>
    </div>
  );
};

export default Navbar;
