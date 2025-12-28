import { useLocation, useNavigate } from "react-router-dom";
import { useWorkspace } from "../../hooks/useWorkspace";

export default function Breadcrumbs() {
  const location = useLocation();
  const navigate = useNavigate();
  const { data } = useWorkspace();

  if (location.pathname === "/") return null;

  const parts = location.pathname.split("/").filter(Boolean);

  let team = null;
  let project = null;

  if (data?.teams) {
    // /teams/:teamId
    if (parts[0] === "teams" && parts[1]) {
      team = data.teams.find((t) => t.id === parts[1]);
    }

    // /projects/:projectId
    if (parts[0] === "projects" && parts[1]) {
      team = data.teams.find((t) => t.projects?.some((p) => p.id === parts[1]));
      project = team?.projects?.find((p) => p.id === parts[1]);
    }
  }

  return (
    <nav
      aria-label="Breadcrumb"
      className="flex flex-wrap items-center gap-1 text-sm text-gray-500"
    >
      {/* Home */}
      <span
        onClick={() => navigate("/")}
        className="cursor-pointer hover:text-gray-900 transition"
      >
        Home
      </span>

      <span className="mx-1">/</span>

      {/* Teams */}
      <span
        onClick={() => navigate("/teams")}
        className="cursor-pointer hover:text-gray-900 transition"
      >
        Teams
      </span>

      {/* Team */}
      {team && (
        <>
          <span className="mx-1">/</span>
          <span
            onClick={() => navigate(`/teams/${team.id}`)}
            className="cursor-pointer hover:text-gray-900 transition"
          >
            {team.name}
          </span>
        </>
      )}

      {/* Project */}
      {project && (
        <>
          <span className="mx-1">/</span>
          <span className="font-medium text-gray-900">Task Board</span>
        </>
      )}
    </nav>
  );
}
