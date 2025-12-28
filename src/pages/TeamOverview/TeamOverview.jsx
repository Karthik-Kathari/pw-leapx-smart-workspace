import { useNavigate } from "react-router-dom";
import { useWorkspace } from "../../hooks/useWorkspace";

export default function TeamOverview() {
  const { data } = useWorkspace();
  const navigate = useNavigate();

  if (!data || !data.teams) {
    return <div className="p-6">Loading teams...</div>;
  }

  if (data.teams.length === 0) {
    return <div className="p-6">No teams available.</div>;
  }

  const teamDescriptions = {
    Engineering: "Product development and infrastructure",
    Marketing: "Growth, campaigns, and customer acquisition",
    Design: "UI, UX, and brand identity",
    Product: "Roadmaps and feature planning",
    Sales: "Revenue and client relationships",
    "Customer Success": "Customer support and retention",
    "Human Resources": "Hiring and people operations",
    Finance: "Budgets, payroll, and compliance",
  };

  return (
    <div className="w-full px-4 sm:px-6 py-6">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Teams
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Overview of your organizational units
        </p>
      </div>

      {/* Teams Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
              className="group cursor-pointer rounded-xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-blue-500 dark:bg-gray-800/60 dark:border-gray-700 dark:hover:border-blue-400"
            >
              {/* Card Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-semibold transition-colors group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-500/20 dark:text-blue-400 dark:group-hover:bg-blue-500 dark:group-hover:text-white">
                    {team.name.charAt(0)}
                  </div>

                  <div>
                    <h2 className="font-semibold text-gray-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                      {team.name}
                    </h2>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {teamDescriptions[team.name] || "Team operations"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-200 dark:border-gray-700 my-4" />

              {/* Stats */}
              <div className="flex justify-between text-sm">
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    PROJECTS
                  </p>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {projects.length}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    ACTIVE TASKS
                  </p>
                  <p className="font-semibold text-blue-600 dark:text-blue-400">
                    {activeTasks}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
