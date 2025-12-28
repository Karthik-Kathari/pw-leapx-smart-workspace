import { useParams } from "react-router-dom";
import { useWorkspace } from "../../hooks/useWorkspace";
import { useState } from "react";

export default function TaskBoard() {
  const { projectId } = useParams();
  const { data, setData } = useWorkspace();
  const [searchTerm, setSearchTerm] = useState("");

  if (!data) return <div className="p-6">Loading tasks...</div>;

  let currentProject;
  let teamIndex;
  let projectIndex;

  (data.teams || []).forEach((team, tIndex) => {
    const pIndex = team.projects?.findIndex((p) => p.id === projectId);
    if (pIndex !== -1) {
      currentProject = team.projects[pIndex];
      teamIndex = tIndex;
      projectIndex = pIndex;
    }
  });

  if (!currentProject) {
    return <div className="p-6">Project not found.</div>;
  }

  {
    /* Statuss */
  }
  const updateTaskStatus = (taskId, newStatus) => {
    const updated = structuredClone(data);
    const tasks = updated.teams[teamIndex]?.projects[projectIndex]?.tasks || [];

    const task = tasks.find((t) => t.id === taskId);
    if (!task) return;

    task.status = newStatus;
    setData(updated);
  };

  {
    /* Priority */
  }
  const updateTaskPriority = (taskId, newPriority) => {
    const updated = structuredClone(data);
    const tasks = updated.teams[teamIndex]?.projects[projectIndex]?.tasks || [];

    const task = tasks.find((t) => t.id === taskId);
    if (!task) return;

    task.priority = newPriority;
    setData(updated);
  };

  const columns = [
    { key: "todo", title: "TO DO", bg: "bg-gray-50 dark:bg-gray-900/40" },
    {
      key: "in-progress",
      title: "IN PROGRESS",
      bg: "bg-blue-50 dark:bg-blue-900/20",
    },
    { key: "done", title: "DONE", bg: "bg-green-50 dark:bg-green-900/20" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">
          {currentProject.name} Task Board
        </h1>

        {/* Search */}
        <div className="relative w-64">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search tasks..."
            className="w-full h-10 pl-10 pr-3 text-sm rounded-lg border border-gray-300 bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-200 dark:placeholder-gray-500"
          />
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35m1.6-5.4a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {/* Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {columns.map((col) => {
          const tasks = currentProject.tasks.filter((task) => {
            const matchesStatus = task.status === col.key;
            const matchesSearch =
              task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
              (task.description || "")
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
            return matchesStatus && matchesSearch;
          });

          return (
            <div
              key={col.key}
              className={`rounded-xl border p-4 ${col.bg} border-gray-200 dark:border-gray-700`}
            >
              {/* Column Header */}
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-semibold tracking-wide">
                  {col.title}
                </h2>
                <span className="text-xs px-2 py-0.5 rounded bg-white dark:bg-gray-800">
                  {tasks.length}
                </span>
              </div>

              {/* Empty */}
              {tasks.length === 0 && (
                <div className="border border-dashed rounded-lg p-6 text-center text-sm text-gray-400">
                  No tasks here
                </div>
              )}

              {/* Tasks */}
              <div className="space-y-4">
                {tasks.map((task) => (
                  <div
                    key={task.id}
                    className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-4"
                  >
                    {/* Priority Dropdown */}
                    <select
                      value={task.priority || "medium"}
                      onChange={(e) =>
                        updateTaskPriority(task.id, e.target.value)
                      }
                      className={`mb-2 text-xs font-medium px-2 py-1 rounded
                        ${
                          (task.priority || "medium") === "high"
                            ? "bg-red-100 text-red-600"
                            : (task.priority || "medium") === "medium"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-blue-100 text-blue-700"
                        }`}
                    >
                      <option value="high">High</option>
                      <option value="medium">Medium</option>
                      <option value="low">Low</option>
                    </select>

                    <h3 className="font-medium text-sm">{task.title}</h3>
                    <p className="text-xs text-gray-500 mt-1">
                      {task.description || "No description provided."}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-2 text-xs">
                        <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-semibold">
                          A
                        </div>
                        Alex
                      </div>

                      <select
                        value={task.status}
                        onChange={(e) =>
                          updateTaskStatus(task.id, e.target.value)
                        }
                        className="text-xs border rounded px-2 py-1 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
                      >
                        <option value="todo">Todo</option>
                        <option value="in-progress">In Progress</option>
                        <option value="done">Done</option>
                      </select>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
