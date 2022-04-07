class TaskRestService  {
    constructor() {
        const API_URL = "";
    };

   getAllTask(responseFunc) {
        fetch(`http://localhost:5000/tasks/all`).then((result)=> {
            console.log(result);
            return result.json();
        }).then((data)=> {
            console.log(data);
            responseFunc(data);
        });
    };

    addNewTask(taskData, responseFunc) {
        fetch(`http://localhost:5000/task/add`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({task : taskData }),
        }).then((result)=> {
            return result.json();
        }).then((data)=> {
            responseFunc(data);
        });
    }
}

export default TaskRestService;