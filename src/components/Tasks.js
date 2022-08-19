import PropTypes from "prop-types";
import Task from "./Task";

const Tasks = ({ tasks, onToggle, onDelete }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </>
  );
};

Tasks.propTypes = {
  tasks: PropTypes.array,
  onToggle: PropTypes.func,
  onDelete: PropTypes.func,
};


export default Tasks;
