import ActiveLink from "./active-link";

const Navigations = () => {
  return (
    <div className="flex h-full items-center space-x-1">
      <ActiveLink link="/">Home</ActiveLink>
      <ActiveLink link="/projects">Projects</ActiveLink>
      <ActiveLink link="/blog">Blog</ActiveLink>
      <ActiveLink link="/about">About</ActiveLink>
      <ActiveLink link="/contact">Contact</ActiveLink>
    </div>
  );
};

export default Navigations;
