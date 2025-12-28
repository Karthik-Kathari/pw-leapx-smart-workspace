import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { WorkspaceContext } from "../../context/WorkspaceContext";

export default function Breadcrumbs() {
  const location = useLocation();
  const navigate = useNavigate();
  const { data } = useContext(WorkspaceContext);

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
    <div className="text-sm text-gray-600 dark:text-gray-400 flex gap-1">
      <span
        onClick={() => navigate("/")}
        className="cursor-pointer hover:underline"
      >
        Home
      </span>

      <span>›</span>
      <span
        onClick={() => navigate("/teams")}
        className="cursor-pointer hover:underline"
      >
        Teams
      </span>

      {team && (
        <>
          <span>›</span>
          <span
            onClick={() => navigate(`/teams/${team.id}`)}
            className="cursor-pointer hover:underline"
          >
            {team.name} Projects
          </span>
        </>
      )}

      {project && (
        <>
          <span>›</span>
          <span className="font-medium">Task</span>
        </>
      )}
    </div>
  );
}
