import FooterSocial from "./social";

const Footer = () => {
  return (
    <footer className="border-t container py-5 flex md:flex-row flex-col-reverse justify-between items-center md:gap-0 gap-3">
      <div>
        <p>&copy; Rashed Abdullah. All rights reserved</p>
      </div>
      <FooterSocial />
    </footer>
  );
};

export default Footer;
