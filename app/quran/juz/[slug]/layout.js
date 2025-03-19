import React from "react";
import TogglePageAndTranslation from "../../_components/toggle-page-translation";
import { JuzSideBarMobile } from "../../_components/juz-sidebar-mobile";
import JuzSidebar from "../../_components/juz-sidebar";

const QUranJuzLayout = async props => {
  const params = await props.params;

  const {
    slug
  } = params;

  const {
    children
  } = props;

  return (
    <div>
      <TogglePageAndTranslation type={"juz"} slug={slug} />
      <JuzSideBarMobile />
      <div className="hidden lg:block">
        <JuzSidebar />
      </div>
      {children}
    </div>
  );
};

export default QUranJuzLayout;
