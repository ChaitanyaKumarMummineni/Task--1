
const inputBox= document.getElementById("input-box");
console.log(inputBox);
const listContainer =document.getElementById("list-container");
function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveDate();
}
listContainer.addEventListener("click",(e)=>{
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        saveDate();
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveDate();
    }

});

inputBox.addEventListener("keyup",(e)=>{
    if(e.key === "Enter"){
        e.preventDefault();
        addTask();
    }
});

const saveDate=()=>{
    localStorage.setItem("data",listContainer.innerHTML);
}

const showTask=()=>{
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();