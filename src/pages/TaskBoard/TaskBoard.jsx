import { useContext } from "react";
import { useParams } from "react-router-dom";
import { WorkspaceContext } from "../../context/WorkspaceContext";

export default function TaskBoard() {
  const { projectId } = useParams();
  const { data, setData } = useContext(WorkspaceContext);

  if (!data) return <div className="p-6">Loading tasks...</div>;

  let currentProject;
  let teamIndex;
  let projectIndex;

  (data.teams || []).filter(Boolean).forEach((team, tIndex) => {
    if (!team.projects) return;
    const pIndex = team.projects.findIndex((p) => p.id === projectId);
    if (pIndex !== -1) {
      currentProject = team.projects[pIndex];
      teamIndex = tIndex;
      projectIndex = pIndex;
    }
  });

  if (!currentProject) {
    return <div className="p-6">Project not found.</div>;
  }

  const updateTaskStatus = (taskId, newStatus) => {
    const updatedData = structuredClone(data);

    const tasks =
      updatedData.teams[teamIndex]?.projects?.[projectIndex]?.tasks || [];

    const task = tasks.find((t) => t.id === taskId);
    if (!task) return;
    task.status = newStatus;

    setData(updatedData);
  };

  const columns = [
    { key: "todo", title: "Todo" },
    { key: "in-progress", title: "In Progress" },
    { key: "done", title: "Done" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-6">
      <div className="p-6 grid gap-4 md:grid-cols-3">
        {columns.map((col) => (
          <div
            key={col.key}
            className={`border rounded-lg p-4 transition-colors duration-300
  ${
    col.key === "todo"
      ? "bg-red-50 dark:bg-red-900/20"
      : col.key === "in-progress"
      ? "bg-gray-100 dark:bg-gray-800"
      : "bg-green-50 dark:bg-green-900/20"
  }`}
          >
            <h2 className="font-semibold mb-3 text-sm uppercase tracking-wide">
              {col.title}
            </h2>

            {currentProject.tasks
              .filter((task) => task.status === col.key)
              .map((task) => (
                <div
                  key={task.id}
                  className="border rounded-lg p-3 mb-3 bg-white dark:bg-gray-800 shadow-inner hover:shadow-md transition"
                >
                  <p className="text-sm mb-2">{task.title}</p>

                  <div className="flex gap-2 flex-wrap">
                    {col.key !== "todo" && (
                      <button
                        onClick={() => updateTaskStatus(task.id, "todo")}
                        className="text-xs border rounded px-2 py-1 
hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                      >
                        Todo
                      </button>
                    )}

                    {col.key !== "in-progress" && (
                      <button
                        onClick={() => updateTaskStatus(task.id, "in-progress")}
                        className="text-xs border rounded px-2 py-1 
hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                      >
                        In Progress
                      </button>
                    )}

                    {col.key !== "done" && (
                      <button
                        onClick={() => updateTaskStatus(task.id, "done")}
                        className="text-xs border rounded px-2 py-1 
hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                      >
                        Done
                      </button>
                    )}
                  </div>
                </div>
              ))}

            {currentProject.tasks.filter((t) => t.status === col.key).length ===
              0 && <p className="text-sm text-gray-500">No tasks</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
