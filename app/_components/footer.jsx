import FooterSocial from "./social";

const Footer = async () => {
  return (
    <footer className="border-t backdrop-blur-lg">
      <div className="container py-10 flex md:flex-row flex-col-reverse justify-between items-center md:gap-0 gap-3">
        <div className="mb-10 lg:mb-0">
          <p>&copy; {new Date().getFullYear()} Rashed Abdullah</p>
        </div>
        <nav aria-label="Social Links">
          <FooterSocial />
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
