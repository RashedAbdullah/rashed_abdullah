import Link from "next/link";
import { doSignOut } from "@/controllers/signout";

const DashboardSidebar = () => {
  return (
    <aside className="w-64 bg-slate-800 text-white p-5">
      <nav>
        <ul className="space-y-4">
          <li>
            <Link
              href="/dashboard/add-blog"
              className="block px-4 py-2 rounded hover:bg-slate-700"
            >
              ব্লগ যোগ করুন
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/update-blog"
              className="block px-4 py-2 rounded hover:bg-slate-700"
            >
              ব্লগ আপডেট করুন
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/add-diary"
              className="block px-4 py-2 rounded hover:bg-slate-700"
            >
              ডায়েরি যোগ করুন
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/update-diary"
              className="block px-4 py-2 rounded hover:bg-slate-700"
            >
              ডায়েরি আপডেট করুন
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/add-project"
              className="block px-4 py-2 rounded hover:bg-slate-700"
            >
              প্রজেক্ট যোগ করুন
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/update-project"
              className="block px-4 py-2 rounded hover:bg-slate-700"
            >
              প্রজেক্ট আপডেট করুন
            </Link>
          </li>
        </ul>
      </nav>
      <form action={doSignOut} className="mt-8">
        <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
          লগ আউট
        </button>
      </form>
    </aside>
  );
};

export default DashboardSidebar;
