import { auth } from "@/auth";
import { Tiro_Bangla } from "next/font/google";
import { redirect } from "next/navigation";
import DashboardSidebar from "./_components/sidebar";

const tiroBangla = Tiro_Bangla({ subsets: ["bengali"], weight: "400" });

const DashboardLayout = async ({ children }) => {
  const session = await auth();
  if (!session) {
    redirect("/");
  }

  return (
    <div
      className={`${tiroBangla.className} flex flex-col lg:flex-row min-h-screen`}
    >
      {/* Sidebar */}
      <aside className="w-full lg:w-1/4 xl:w-1/5 bg-gray-200 dark:bg-gray-800 p-4 lg:p-6">
        <DashboardSidebar />
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-white dark:bg-gray-900 p-4 lg:p-8">
        <div className="flex items-center justify-between container pt-5">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            ড্যাশবোর্ড
          </h1>
        </div>
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
