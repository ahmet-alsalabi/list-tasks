const addTask = () => {
    let taskInput = document.getElementById("newTaskInput");
    let taskText = taskInput.value.trim();


    if (taskText === "") {
        alert("المهمة فارغة")
        return
    }


    const taskItem = document.createElement('li');
    taskItem.classList.add('list-group-item', 'task-item');

    const taskTextElement = document.createElement('span');
    taskTextElement.textContent = taskText;

    //appendChild=> انشاء عنصر 
    taskItem.appendChild(taskTextElement);






    //delete button
    const deleteButton = document.createElement('button');

    deleteButton.classList.add('btn', 'btn-danger', 'btn-sm');

    deleteButton.textContent = "delete";

    //appendChild=> انشاء عنصر 
    taskItem.appendChild(deleteButton);

    deleteButton.onclick = function () {
        taskItem.remove()

    }


    //appendChild=> انشاء عنصر 
    document.getElementById("taskList").appendChild(taskItem);
    taskInput.value = "";





}