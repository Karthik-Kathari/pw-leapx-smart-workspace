import { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import Breadcrumbs from "../common/Breadcrumbs";

export default function AppLayout({ children }) {
  const { theme, setTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-500 ease-in-out">
      {/* Navbar */}
      <header className="bg-black border-b border-white/10">
        <div className="w-full px-6 h-14 flex items-center justify-between">
          {/* Brand */}
          <div
            onClick={() => navigate("/")}
            className="font-semibold text-lg cursor-pointer text-white"
          >
            Smart Workspace
          </div>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="
              text-lg rounded-full w-9 h-9
              flex items-center justify-center
              bg-white/10 text-white
              hover:bg-white/20 transition
            "
            title="Toggle theme"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>
      </header>

      {/* Breadcrumbs + conditional Back button */}
      {location.pathname !== "/" && (
        <div className="max-w-6xl mx-32 px-6 pt-4 flex flex-col gap-1 items-start">
          {/* Back button (NOT on /teams) */}
          {location.pathname !== "/teams" && (
            <button
              onClick={() => navigate(-1)}
              className="
          text-sm px-3 py-1 rounded
          bg-gray-200 text-gray-800
          hover:bg-gray-300
          dark:bg-white/10 dark:text-white
          dark:hover:bg-white/20
          transition
        "
            >
              ← Back
            </button>
          )}

          {/* Breadcrumbs (always visible except home) */}
          <Breadcrumbs />
        </div>
      )}
      {/* Page content */}
      <main className="flex-1 w-full">
        {location.pathname === "/" ? (
          // HOME → full width, no padding
          children
        ) : (
          // OTHER PAGES → constrained layout
          <div className="max-w-6xl mx-auto px-6 py-4">{children}</div>
        )}
      </main>
    </div>
  );
}
