//   //create new task
//   const newTask = document.createElement("li");

//   //(html ligne 20) where the task li are stored
//   const taskUl = document.querySelector("#tasks");


//   //form const and description const
//   const newTaskForm = document.querySelector("#create-task-form");
//   const newTaskDescription = newTaskForm.querySelector("input");
//   //attach event listeners

// const createNewTask = event => {
//   event.preventDefault();
//   newTask.innerText = newTaskDescription.value;
//   taskUl.append(newTask);
//   event.target.reset();
//   };

//   newTaskForm.addEventListener('submit', createNewTask);


  document.addEventListener("DOMContentLoaded", () => {
    //grab all the necessary DOM elements
  
    //form and relevant input fields
    const newTaskForm = document.getElementById("create-task-form");
    const newTaskDescription = document.getElementById("new-task-description");
    const newTaskPriority = document.getElementById("new-task-priority");
  
    //ul where new tasks will live on the DOM
    const newTaskUl = document.getElementById("tasks");
  
    //attach event listeners
    newTaskForm.addEventListener("submit", createNewTask);
  });
  
  const createNewTask = event => {
    event.preventDefault();
    //stop form from trying to submit
    const newTaskDescription = document.getElementById("new-task-description");
    const newTask = document.createElement("li");
    newTask.innerText = newTaskDescription.value;
  
    appendNewTask(newTask);
    event.target.reset();
  };
  
  const appendNewTask = task => {
    document.getElementById("tasks").appendChild(task);
  };
