import HeaderInfo from "./_components/header-info";
import AboutMe from "./_components/aboutme/aboutme";
import Skills from "./_components/skills/skills";
import Works from "./_components/works/works";
import Contact from "./_components/contact/contact";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeaderInfo />
      <AboutMe />
      <Skills />
      <Works />
      <Contact />
    </main>
  );
}
