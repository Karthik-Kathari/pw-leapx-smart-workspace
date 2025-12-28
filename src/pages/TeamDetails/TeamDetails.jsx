import { useNavigate, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { WorkspaceContext } from "../../context/WorkspaceContext";

export default function TeamDetails() {
  const { teamId } = useParams();
  const navigate = useNavigate();
  const { data } = useContext(WorkspaceContext);
  const [filter, setFilter] = useState("all");

  if (!data || !data.teams) {
    return <div className="p-6">Loading team details...</div>;
  }

  const team = data.teams.find((t) => t.id === teamId);

  if (!team) {
    return <div className="p-6">Team not found.</div>;
  }

  const projects = team.projects || [];

  const filteredProjects = projects.filter((project) => {
    const tasks = project.tasks || [];
    const completed = tasks.filter((t) => t.status === "done").length;

    if (filter === "completed")
      return completed === tasks.length && tasks.length > 0;
    if (filter === "active") return completed !== tasks.length;
    return true;
  });

  return (
    <div className="max-w-6xl mx-auto px-6 py-6 space-y-4">
      <h1 className="text-xl font-semibold">{team.name} Projects</h1>

      {/* Filters */}
      <div className="flex gap-2">
        {["all", "active", "completed"].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-3 py-1 rounded border text-sm transition ${
              filter === type
                ? "bg-gray-200 dark:bg-gray-700"
                : "hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Empty state */}
      {filteredProjects.length === 0 && (
        <div className="text-sm text-gray-500">No projects to display.</div>
      )}

      {/* Project list */}
      <div className="space-y-3">
        {filteredProjects.map((project) => {
          const tasks = project.tasks || [];
          const todo = tasks.filter((t) => t.status === "todo").length;
          const inProgress = tasks.filter(
            (t) => t.status === "in-progress"
          ).length;
          const done = tasks.filter((t) => t.status === "done").length;

          const progress =
            tasks.length === 0 ? 0 : Math.round((done / tasks.length) * 100);

          return (
            <div
              key={project.id}
              onClick={() => navigate(`/projects/${project.id}`)}
              className="rounded-xl border border-gray-200 dark:border-gray-700 
                bg-white dark:bg-gray-800 p-5 hover:shadow-md transition cursor-pointer"
            >
              <h2 className="font-medium">{project.name}</h2>

              <p className="text-sm text-gray-600 dark:text-gray-400">
                Todo: {todo} | In Progress: {inProgress} | Done: {done}
              </p>

              <div className="mt-3">
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded">
                  <div
                    className="h-2 bg-blue-500 rounded transition-all"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <p className="text-xs mt-1">{progress}% completed</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
