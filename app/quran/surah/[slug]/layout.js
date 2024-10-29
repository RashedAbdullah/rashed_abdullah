import React from "react";
import TogglePageAndTranslation from "../../_components/toggle-page-translation";
import { SurahSideBarMobile } from "../../_components/surah-sidebar-mobile";
import SidebarSurah from "../../_components/surah-sidebar";

const SurahTranslationOrPageLayout = ({ params: { slug }, children }) => {
  return (
    <div>
      <TogglePageAndTranslation slug={slug} />
      <SurahSideBarMobile />
      <div className="hidden lg:block">
        <SidebarSurah />
      </div>
      {children}
    </div>
  );
};

export default SurahTranslationOrPageLayout;
