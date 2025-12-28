import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { WorkspaceContext } from "../../context/WorkspaceContext";

export default function TeamOverview() {
  const { data } = useContext(WorkspaceContext);
  const navigate = useNavigate();

  if (!data || !data.teams) {
    return <div>Loading teams...</div>;
  }

  if (data.teams.length === 0) {
    return <div>No teams available.</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-6 space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.teams.filter(Boolean).map((team) => {
          const projects = team.projects || [];

          const activeTasks = projects.reduce((count, project) => {
            const tasks = project.tasks || [];
            return (
              count + tasks.filter((task) => task.status !== "done").length
            );
          }, 0);

          return (
            <div
              key={team.id}
              onClick={() => navigate(`/teams/${team.id}`)}
              className="border rounded-lg p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition"
            >
              <h2 className="font-semibold">{team.name}</h2>
              <p className="text-sm">Projects: {projects.length}</p>
              <p className="text-sm">Active Tasks: {activeTasks}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
