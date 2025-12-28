import { NavLink, Link } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";

export default function Sidebar() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <aside
      className="
        w-full lg:w-64
        lg:fixed lg:left-0 lg:top-0
        lg:h-screen
        bg-white dark:bg-[#0b1220]
        border-b lg:border-b-0 lg:border-r
        border-gray-200 dark:border-gray-800
        flex flex-col
      "
    >
      {/* Top section */}
      <div>
        {/* Logo (goes to Home) */}
        <Link
          to="/"
          className="
            h-14 flex items-center gap-2 px-4 lg:px-6
            font-semibold text-lg
            border-b border-gray-200 dark:border-gray-800
            hover:opacity-90 transition
          "
        >
          <span className="w-8 h-8 flex items-center justify-center rounded bg-blue-600 text-white">
            S
          </span>
          <span className="text-gray-900 dark:text-white">SmartWorkspace</span>
        </Link>

        {/* Navigation */}
        <nav className="px-3 py-3">
          <NavLink
            to="/teams"
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition ${
                isActive
                  ? "bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10"
              }`
            }
          >
            👥 Teams
          </NavLink>
        </nav>
      </div>

      {/* Bottom section */}
      <div className="px-3 pb-4 mt-auto">
        <button
          onClick={toggleTheme}
          className="
            w-full flex items-center justify-between
            px-3 py-2 rounded-md text-sm font-medium
            bg-gray-100 dark:bg-white/10
            text-gray-800 dark:text-gray-200
            hover:bg-gray-200 dark:hover:bg-white/20
            transition
          "
        >
          <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
          <span>{theme === "dark" ? "☀️" : "🌙"}</span>
        </button>
      </div>
    </aside>
  );
}
