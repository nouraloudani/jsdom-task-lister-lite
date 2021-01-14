
  //create new task
  const newTask = document.createElement("li");

  //(html ligne 20) where the task li are stored
  const taskUl = document.querySelector("#tasks");


  //form const and description const
  const newTaskForm = document.querySelector("#create-task-form");
  const newTaskDescription = newTaskForm.querySelector("input");
  //attach event listeners

const createNewTask = event => {
  event.preventDefault();
  newTask.innerText = newTaskDescription.value;
  taskUl.append(newTask);

  event.target.reset();

  };

  newTaskForm.addEventListener('submit', createNewTask);




