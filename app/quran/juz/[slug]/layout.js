import React from "react";
import TogglePageAndTranslation from "../../_components/toggle-page-translation";

const QUranJuzLayout = ({ params: { slug }, children }) => {
  return (
    <div>
      <TogglePageAndTranslation type={"juz"} slug={slug} />
      {children}
    </div>
  );
};

export default QUranJuzLayout;
