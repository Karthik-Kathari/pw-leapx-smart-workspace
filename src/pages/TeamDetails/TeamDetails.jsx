import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useWorkspace } from "../../hooks/useWorkspace";
import { calcProgress } from "../../utils/calcProgress";

export default function TeamDetails() {
  const { teamId } = useParams();
  const navigate = useNavigate();
  const { data } = useWorkspace();
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
          {team.name} Projects
        </h1>

        {/* Filters */}
        <div className="flex gap-2">
          {["all", "active", "completed"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={
                "px-4 py-1.5 rounded-full text-sm transition border " +
                (filter === type
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700 dark:hover:bg-gray-700")
              }
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Empty state */}
      {filteredProjects.length === 0 && (
        <div className="text-sm text-gray-500 dark:text-gray-400">
          No projects to display.
        </div>
      )}

      {/* Project cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => {
          const tasks = project.tasks || [];
          const todo = tasks.filter((t) => t.status === "todo").length;
          const inProgress = tasks.filter(
            (t) => t.status === "in-progress"
          ).length;
          const done = tasks.filter((t) => t.status === "done").length;

          const progress = calcProgress(tasks);
          const isCompleted = progress === 100;

          return (
            <div
              key={project.id}
              onClick={() => navigate(`/projects/${project.id}`)}
              className="
    group
    cursor-pointer
    rounded-xl
    p-6
    transition
    bg-white
    border border-gray-200
    hover:shadow-md
    dark:bg-gray-800/60
    dark:border-gray-700
    dark:hover:shadow-lg
  "
            >
              {/* Card Header */}
              <div className="flex items-start justify-between mb-3">
                <h2
                  className="
        font-semibold
        text-lg
        text-gray-900
        dark:text-white
        transition-colors
        group-hover:text-blue-700
        dark:group-hover:text-blue-500
      "
                >
                  {project.name}
                </h2>

                <span
                  className={
                    "text-xs px-2 py-0.5 rounded-full font-medium " +
                    (isCompleted
                      ? "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                      : "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400")
                  }
                >
                  {isCompleted ? "COMPLETED" : "ACTIVE"}
                </span>
              </div>

              <p className="text-sm text-gray-500 mb-4">
                {project.description || `Work related to ${project.name}`}
              </p>

              {/* Progress */}
              <div className="mb-3">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-500 dark:text-gray-400">
                    Progress
                  </span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {progress}%
                  </span>
                </div>

                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded">
                  <div
                    className="h-2 bg-blue-500 rounded transition-all"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* Task stats */}
              <div className="flex gap-4 text-xs text-gray-500 dark:text-gray-400 mt-2">
                <span>● {todo} Todo</span>
                <span>● {inProgress} Active</span>
                <span>● {done} Done</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
