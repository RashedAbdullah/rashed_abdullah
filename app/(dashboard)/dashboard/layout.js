import { auth } from "@/auth";
import { Tiro_Bangla } from "next/font/google";
import { redirect } from "next/navigation";

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
