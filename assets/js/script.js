// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

const addTaskEl = $('#testButton');
const formEl = $('#modal');
const closeEl = $('#close');

// function for showing modal when new task button is pressed
formEl.hide();
addTaskEl.on('click', function() {
    formEl.show();
});

// function for hiding modal when submitted
closeEl.on('click', function() {
    formEl.hide();
})
// function for exiting modal when closed


// Todo: create a function to generate a unique task id
function generateTaskId() {
    
}

// Todo: create a function to create a task card
function createTaskCard(task) {

}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){
 

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});
