// Variables
let theInput = document.querySelector(".add-task input");
theAddButton = document.querySelector(".add-task .plus");
tasksContainer = document.querySelector(".tasks-content");
tasksCount = document.querySelector(".tasks-count span");
tasksCompleted = document.querySelector(".tasks-completed span");

// Focus on input
window.onload = function () {
    theInput.focus();
};

// Add Task
theAddButton.onclick = function () {

    // If input empty
    if (theInput.value.trim() === '') {
        alert("No Tasks To Add");
    }
    else {

        let noTasksMsg = document.querySelector(".no-tasks-message");

        // Check If Message Is Exist
        if (document.body.contains(document.querySelector(".no-tasks-message"))) {

            // Remove Msg
            noTasksMsg.remove();
        }

        // Create Main Span Element
        let mainSpan = document.createElement("span");

        // Create Delete Button
        let deleteElement = document.createElement("span");

        // Create The Main Span Text
        let text = document.createTextNode(theInput.value);

        // Create The Delete Button Text
        let deleteText = document.createTextNode("Delete");

        // Add Text To Main Span
        mainSpan.appendChild(text);

        // Add Class To Main Span
        mainSpan.className = 'task-box';

        // Add Text To Delete Button
        deleteElement.appendChild(deleteText);

        // Add Class To Delete Button
        deleteElement.className = 'delete';

        // Add Delete Button To Main Span
        mainSpan.appendChild(deleteElement);

        // Add The Task To The Container
        tasksContainer.appendChild(mainSpan);
        // Empty The Input
        theInput.value = '';

        // Focus On Field
        theInput.focus();

        // Calculate Tasks
        calculateTasks();

    }
};

document.addEventListener('click', function (e) {

    // Delet Task 
    if (e.target.className == 'delete') {

        // Remove Current Task
        e.target.parentNode.remove();

        // Check Number Of Taskes Inside The Container
        if (tasksContainer.childElementCount == 0) {

            createNoTasks();
        }
    }

    // Finish Task
    if (e.target.classList.contains('task-box')) {

        // Toggle Class 'Finished'
        e.target.classList.toggle("finished");
    }

    // Calculate Tasks
    calculateTasks();

});

// Function To Creat No Tasks Message
function createNoTasks() {

    // Create Msg Span Element
    let msgSpan = document.createElement("span");

    // Creat The  Text Message
    let msgText = document.createTextNode("No Tasks To Show");

    // Add Text To Span Element
    msgSpan.appendChild(msgText);

    // Add Class To Message Span
    msgSpan.className = 'no-tasks-message';

    // Append The Message Span Element To The Task Container
    tasksContainer.appendChild(msgSpan);

}

// Function To Calculate Tasks
function calculateTasks() {

    // Calculate All Tasks
    tasksCount.innerHTML = document.querySelectorAll('.tasks-content .task-box').length;

    // Calculate Comleted Tasks
    tasksCompleted.innerHTML = document.querySelectorAll('.tasks-content .finished').length;

}