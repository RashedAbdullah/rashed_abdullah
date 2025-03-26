import Navigations from "./navigations";
import Logo from "./logo";
import MobileNav from "./mobile-nav";

const Navbar = async () => {
  return (
    <div className="sticky top-0 z-50 text-white">
      <header className="container py-6 flex justify-between items-center bg-[#171717]">
        {/* <div className="lg:hidden inline-block">
          <MobileNav />
        </div> */}
        <div className="flex justify-center items-center align-middle gap-6">
          <Logo />
          <div className="text-[#A6A6A6]">
            <p>Software Developer</p>
          </div>
        </div>

        <nav className="hidden lg:flex gap-10 justify-center items-center">
          <Navigations />
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
