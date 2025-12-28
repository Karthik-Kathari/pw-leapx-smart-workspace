import { useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Breadcrumbs from "../common/Breadcrumbs";

export default function AppLayout({ children }) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  {
    /* Home */
  }
  if (isHome) {
    return (
      <div className="w-screen h-screen overflow-hidden bg-black">
        {children}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0b1220] text-black dark:text-white overflow-x-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Content area */}
      <div className="flex flex-col min-h-screen md:ml-64">
        {/* Breadcrumb */}
        <div className="px-4 sm:px-6 pt-4">
          <Breadcrumbs />
        </div>

        {/* Page content */}
        <main className="flex-1 px-4 sm:px-6 py-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
