import Timer from "./timer";
import { useNavigate } from "react-router-dom";

function TaskView({ task: task } ) {

  const navigate = useNavigate();

  function editTask() {
    navigate("/task/edit/" + task.id);
  }

    return (
      <div className="task">
          {task?.task}
          <button onClick={() => { editTask()}}>Edit task</button>
          <Timer></Timer>
      </div>
    );
  }
  
  export default TaskView;