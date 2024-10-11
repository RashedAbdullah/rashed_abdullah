
import FooterSocial from "./social";

const Footer = async () => {


  return (
    <footer className="border-t container py-5 flex md:flex-row flex-col-reverse justify-between items-center md:gap-0 gap-3">
      <div>
        <p>&copy; Rashed Abdullah. All Right Reserved</p>
      </div>
      <nav aria-label="Social Links">
        <FooterSocial />
      </nav>
    </footer>
  );
};

export default Footer;
