import FooterSocial from "./social";

const Footer = () => {
  return (
    <footer className="border-t container py-5 flex justify-between items-center">
      <div>
        <p>&copy; Rashed Abdullah. All rights reserved</p>
      </div>
      <FooterSocial />
    </footer>
  );
};

export default Footer;
