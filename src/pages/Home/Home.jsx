import { useNavigate } from "react-router-dom";
import Button from "../../components/common/Button";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Glow background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="
            w-[260px] h-[260px]
            sm:w-[360px] sm:h-[360px]
            md:w-[420px] md:h-[420px]
            rounded-full
            bg-gradient-to-tr from-indigo-500/30 via-blue-500/30 to-purple-500/30
            blur-3xl
          "
        />
      </div>

      {/* Radial overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(99,102,241,0.25),_rgba(0,0,0,0)_60%)]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 w-full max-w-4xl">
        <h1
          className="
            font-extrabold tracking-tight text-white
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
          "
        >
          Smart Workspace Dashboard
        </h1>

        {/* Marquee */}
        <div className="relative mt-4 overflow-hidden w-full max-w-xl mx-auto">
          <div className="marquee-track text-sm sm:text-base md:text-lg whitespace-nowrap">
            <span className="mx-6 text-gray-300">
              Manage <span className="text-blue-400 font-medium">teams</span>,
              projects, and tasks in one place.
            </span>
            <span className="mx-6 text-gray-300">
              Track <span className="text-blue-400 font-medium">teams</span>{" "}
              progress with clarity and speed.
            </span>
            <span className="mx-6 text-gray-300">
              Organize work, empower{" "}
              <span className="text-blue-400 font-medium">teams</span>, deliver
              faster.
            </span>
          </div>
        </div>

        <Button onClick={() => navigate("/teams")} className="mt-8">
          Go to Teams
        </Button>
      </div>
    </div>
  );
}
