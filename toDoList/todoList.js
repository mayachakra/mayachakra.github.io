const inputBox = document.getElementById("text-box")
const taskTitle = document.getElementById("task-title")
const checkbox = document.getElementById("task-priority")
const prioritylevel = document.getElementById("priority");


function createDivTask (tasktitle, taskpriority, taskstatus){
    let taskDiv = document.createElement("div"); 

    let taskname_p = document.createElement("h3");
    taskname_p.innerHTML = tasktitle;

    let taskstatus_p = document.createElement("h5");
    taskstatus_p.innerHTML = taskstatus;

    let taskpriority_p = document.createElement("h5");
    taskpriority_p.innerHTML = taskpriority;

    let taskDoneBTN = document.createElement("input");
    taskDoneBTN.type = "checkbox";


    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    taskDiv.appendChild(span);


    let done_clicks = 0;
    taskDoneBTN.addEventListener("change", function (params) {
        done_clicks += 1;

        if (done_clicks % 2 == 1){
            taskname_p.style.textDecoration = "line-through";
            taskstatus_p.innerHTML = "Completed!";
            taskstatus_p.style.textDecoration = "line-through";
            taskpriority_p.style.textDecoration = "line-through";
        }else{
            taskname_p.style.textDecoration = "none";
            taskstatus_p.innerHTML = "Pending.";
            taskstatus_p.style.textDecoration = "none";
            taskpriority_p.style.textDecoration = "none";
        }
       
    });
  




    taskDiv.appendChild(taskDoneBTN);

    taskDiv.appendChild(taskname_p);
    taskDiv.appendChild(taskstatus_p);
    taskDiv.appendChild(taskpriority_p);

    let taskList = document.getElementById("tasks");
    taskList.appendChild(taskDiv);
    inputBox.value = " ";

}


document.addEventListener("DOMContentLoaded", function(event){
  
    let submitBtn = document.getElementById("task-submit");
    submitBtn.onclick = function(){
    createDivTask(inputBox.value, prioritylevel.value, "pending");  



}
} );
document.addEventListener("click", function(event){
  
    if(event.target.tagName === "LI"){
        event.target.classList.toggle("checked");
    }
    else if(event.target.tagName === "SPAN"){
        event.target.parentElement.remove();
    } 


}
,
false);
