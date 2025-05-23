import ActiveLink from "./active-link";

const Navigations = async () => {
  return (
    <nav className="flex items-center space-x-1 sm:space-x-3 md:space-x-6">
      <ActiveLink link="/">Home</ActiveLink>
      <ActiveLink link="/articles">Articles</ActiveLink>
      <ActiveLink link="/projects">Projects</ActiveLink>
      <ActiveLink link="/diary">Diary</ActiveLink>
    </nav>
  );
};

export default Navigations;
