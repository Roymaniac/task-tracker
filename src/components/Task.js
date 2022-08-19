import { FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";

const Task = ({ task, onToggle, onDelete }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : null}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}{" "}
        <FaTimes
          style={{ color: "tomato" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.object,
  onToggle: PropTypes.func,
  onDelete: PropTypes.func,
};

export default Task;
