import { createDiray } from "@/controllers/diraies";
import AddDirayForm from "./_components/add-diray-form";

const DashboardPage = () => {
  const handlingNewDiray = async (diray) => {
    "use server";
    await createDiray(diray);
  };

  return (
    <div>
      <div>
        <AddDirayForm createDiray={handlingNewDiray} />
      </div>
    </div>
  );
};

export default DashboardPage;
