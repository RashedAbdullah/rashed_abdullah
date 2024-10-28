import React from "react";
import TogglePageAndTranslation from "../../_components/toggle-page-translation";

const SurahTranslationOrPageLayout = ({ params: { slug }, children }) => {
  return (
    <div>
      <TogglePageAndTranslation slug={slug} />
      {children}
    </div>
  );
};

export default SurahTranslationOrPageLayout;
