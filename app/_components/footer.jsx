import FooterSocial from "./social";

const Footer = async () => {
  return (
    <footer className="border-t">
      <div className="container py-10 flex md:flex-row flex-col-reverse justify-between items-center md:gap-0 gap-3">
        <div className="mb-10 lg:mb-0">
          <p>&copy; Rashed Abdullah. All Right Reserved</p>
        </div>
        <nav aria-label="Social Links">
          <FooterSocial />
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
