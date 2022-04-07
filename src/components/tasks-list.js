import { useEffect, useState } from "react";
import TaskView from "./taskView";
import TaskRestService from "../apis/task-rest";
import { useNavigate } from "react-router-dom";

function TasksList() {

    const[tasks, setTasks] = useState([]);
    const[taskRestService] = useState(new TaskRestService());
    const navigate = useNavigate();

    useEffect(()=> {
        taskRestService.getAllTask(setTasks);
    }, []);

    function addTask() {
      navigate("/task/create");
    }

    return (
      <div className="tasks">
          {tasks.map((task, index) => {
              return <TaskView task={task} key={index}></TaskView>
          })}
          <button onClick={() => { addTask()}}>Add task</button>
      </div>
    );
  }
  
  export default TasksList;