export function calcProgress(tasks = []) {
  if (!tasks.length) return 0;

  const done = tasks.filter(task => task.status === "done").length;
  return Math.round((done / tasks.length) * 100);
}
