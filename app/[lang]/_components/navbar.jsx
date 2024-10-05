import NavSearch from "./nav-search";
import SocialLinks from "./social-links";
import Navigations from "./navigations";
import Logo from "./logo";
import LanguageSwitcher from "./language-witcher";
import MobileNav from "./mobile-nav";

const Navbar = ({ lang }) => {
  return (
    <div className="border-b-[0.1px] sticky top-0 z-50">
      <header
        dir={lang === "ar" ? "rtl" : "ltr"}
        className="container py-6 flex justify-between items-center backdrop-blur-lg"
      >
        <Logo lang={lang} />

        {/* Use <nav> for the navigation area */}
        <nav className="hidden lg:flex gap-10 justify-center items-center">
          <Navigations lang={lang} />
          <NavSearch lang={lang} />
          <SocialLinks lang={lang} />
          <LanguageSwitcher lang={lang} />
        </nav>

        {/* Mobile Navigation */}
        <div className="lg:hidden inline-block">
          <MobileNav lang={lang} />
        </div>
      </header>
    </div>
  );
};

export default Navbar;
