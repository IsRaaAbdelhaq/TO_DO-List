const TodoInput = document.getElementById('todo-input');
const List = document.getElementById('list');

function addTask(){
    if(TodoInput.value === ''){
        alert("Please enter a task , thank you");
    }else{
        const li = document.createElement("li");
        li.innerHTML = TodoInput.value;
        List.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = 'X';
        li.appendChild(span);
    }
    TodoInput.value = '';
    save_data();
}

List.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        save_data();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        save_data();
    }
}, false);

function save_data(){
    localStorage.setItem("data", List.innerHTML);
}

function get_data(){
    List.innerHTML = localStorage.getItem("data");
}
get_data();

