const inputText=document.getElementById("input-text");
const listC=document.getElementById("list");

function addTask(){
    if(inputText.value === ''){
        alert("This field can not be empty!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputText.value;
        listC.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputText.value="";
    save();
}

listC.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("check");
        save();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        save();
    }
},false);

function save(){
    localStorage.setItem("items",listC.innerHTML);
}

function retrieve(){
    listC.innerHTML=localStorage.getItem("items");
}

retrieve();