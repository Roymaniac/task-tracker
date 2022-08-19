// Fetch All Tasks
const fetchTasks = async () => {
  const res = await fetch("http://localhost:5000/tasks");
  const data = await res.json();

  return data;
};

export default fetchTasks;
