import { useState } from "react";
import TaskRestService from "../apis/task-rest";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";


function TaskEdit({ task: task } ) {

  const [taskData, setTaskData] = useState(task || "This is a new task");
  const [taskService] = useState(new TaskRestService());
  const navigate = useNavigate();

    return (
      <div className="task">
          <input type="text" 
          value={taskData} onChange= {
            (event) => {
              setTaskData(event.target.value);
            }
          }></input>
          <button onClick={() => {
             navigate("/tasks-home");
          }}>Cancel</button>
          <button onClick={() => {
            console.log(taskData);
            taskService.addNewTask(taskData, () => {
              navigate("/tasks-home");
            })
          }}>Save</button>
      </div>
    );
  }
  
  export default TaskEdit;