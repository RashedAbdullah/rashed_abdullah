import React from "react";
import AddDirayForm from "../_components/add-diray-form";
import { createDiray } from "@/controllers/diraies";

const DahsAddDirayPage = () => {
  const handlingNewDiray = async (diray) => {
    "use server";
    await createDiray(diray);
  };
  return (
    <div>
      <AddDirayForm createDiray={handlingNewDiray} />
    </div>
  );
};

export default DahsAddDirayPage;
