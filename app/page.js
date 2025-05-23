import Works from "./_components/works/works";
import Contact from "./_components/contact/contact";
import HomeDiarySection from "./_components/home-diray";

import AboutMe from "./_components/aboutme/aboutme";
import HeaderInfo from "./_components/header-info";
import Skills from "./_components/skills/skills";

export default async function Home() {
  return (
    <main className="flex flex-col">
      <HeaderInfo />
      <AboutMe />
      <Skills />
      <Works />
      <HomeDiarySection />
      <Contact />
    </main>
  );
}
