import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Glow background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[420px] h-[420px] rounded-full 
          bg-gradient-to-tr from-indigo-500/30 via-blue-500/30 to-purple-500/30
          blur-3xl"
        ></div>
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(99,102,241,0.25),_rgba(0,0,0,0)_60%)]"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 animate-[fadeIn_1s_ease-out]">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Smart Workspace Dashboard
        </h1>

        <p className="mt-4 text-lg text-gray-300 max-w-xl mx-auto">
          Manage <span className="text-blue-500 font-medium">teams</span>,
          projects, and tasks in one place.
        </p>

        <button
          onClick={() => navigate("/teams")}
          className="mt-8 px-6 py-3 rounded-lg
            bg-blue-600 text-white font-medium
            hover:bg-blue-700 transition"
        >
          Go to Teams
        </button>
      </div>
    </div>
  );
}
