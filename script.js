
//Functions

function createDivArray(n){
    let div = new Array(n);
    for(i=0; i<n; i++){
        div[i] = document.createElement("div");
        div[i].className = "child";
        div[i].style.backgroundColor = defaultColor;
        arrayDiv.appendChild(div[i]);
    }
}



//Variable

let defaultColor = "aquamarine";
const body = document.querySelector('body')
const arrayDiv = document.createElement("div");
const reset = document.querySelector("#reset");
const input = document.getElementById("pixel");





arrayDiv.id = "container";
body.appendChild(arrayDiv);
createDivArray(36);
let children = arrayDiv.childNodes;



//EventListener

children.forEach(child => {
    child.addEventListener("mousemove", () => {
        child.style["background-color"] = "black";
        
})});

reset.addEventListener("click", () => {
    children.forEach(child => {
        child.style.backgroundColor = defaultColor;
    })
});