import NavSearch from "./nav-search";
import SocialLinks from "./social-links";
import Navigations from "./navigations";
import Logo from "./logo";
import LanguageSwitcher from "./language-witcher";

const Navbar = ({ lang }) => {
  return (
    <header
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="container border-b py-6 flex justify-between items-center align-middle sticky top-0 z-50 backdrop-blur-lg"
    >
      <Logo lang={lang} />
      <div className="flex gap-10 justify-center items-center align-middle">
        <Navigations lang={lang} />
        <NavSearch lang={lang} />
        <SocialLinks lang={lang} />
        <LanguageSwitcher lang={lang} />
      </div>
    </header>
  );
};

export default Navbar;
