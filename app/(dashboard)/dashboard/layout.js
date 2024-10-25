import { auth } from "@/auth";
import { doSignOut } from "@/controllers/signout";
import { Tiro_Bangla } from "next/font/google";
import { redirect } from "next/navigation";

const tiroBangla = Tiro_Bangla({ subsets: ["bengali"], weight: "400" });

const DashboardLayout = async ({ children }) => {
  const session = await auth();
  if (!session) {
    redirect("/");
  }
  return (
    <div className={`${tiroBangla.className}`}>
      <div className="flex items-center justify-between container pt-5">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          ড্যাশবোর্ড
        </h1>
        <form action={doSignOut}>
          <button className="bg-slate-600 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500">
            লগ আউট
          </button>
        </form>
      </div>
      {children}
    </div>
  );
};

export default DashboardLayout;
