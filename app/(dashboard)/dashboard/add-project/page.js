import { createProject } from "@/controllers/projects";
import AddProjectForm from "../_components/add-project-form";

const DashAddProjectPage = () => {
  const handlingNewProject = async (project) => {
    "use server";
    await createProject(project);
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">নতুন প্রজেক্ট যোগ করুন</h1>
      <AddProjectForm handlingNewProject={handlingNewProject} />
    </div>
  );
};

export default DashAddProjectPage;
