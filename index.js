let count = 2;
let todos = [
    {
        id:1,
        title:'New Year Tods',
        desc: 'Create resolution for new year todos'
    },
    {
        id:2,
        title:'Learn Mern',
        desc: 'become full stack'
    }
];

const todoD = document.getElementById("todos");
const title = document.getElementById("title");
const description = document.getElementById("description");
function renderTodos() {
    todoD.innerHTML = "";
    todos.forEach((todo)=>{
        console.log(todo.id);   
        const div = document.createElement("div");
        div.setAttribute("id",todo.id);
        div.setAttribute("class","box");
        const titleSpan = document.createElement("div");
        titleSpan.innerHTML = `<span>${todo.title}</span><span id="delete-${todo.id}">Delete</span>`
        const descSpan = document.createElement("span");
        descSpan.innerHTML = todo.desc;
        div.appendChild(titleSpan);
        div.appendChild(descSpan);
        todoD.appendChild(div);
    });
}
renderTodos();


todoD.addEventListener("click",(e)=>{
    console.log(e.target.id);
    if(e.target.tagName === "SPAN") {
    //    const id = e.target.getElementById(e.target.id);
       todos = todos.filter(todo=>todo.id!=e.target.id.split("-")[1]);
       renderTodos();
    }
    
})


document.querySelector("form").addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log(description.value, description,'kokok',Object.keys(title));
    const obj = {
        id:count+1,
        title: title.value,
        desc: description.value
    }

    todos.push(obj);
    renderTodos();
})