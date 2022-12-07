
//Functions

function createDivArray(n){
    let div = new Array(n*n);
    for(i=0; i<n*n; i++){
        let widthHeight = 600/n;
        div[i] = document.createElement("div");
        div[i].className = "child";
        div[i].style.width = widthHeight + "px";
        div[i].style.height = widthHeight + "px";
        div[i].style.backgroundColor = defaultColor;
        arrayDiv.appendChild(div[i]);
    }
}


//Variable

let defaultColor = "aquamarine";
let pixel = 50;
const body = document.querySelector('body')
const arrayDiv = document.createElement("div");
const reset = document.querySelector("#reset");
const input = document.getElementById("pixelValue");
createDivArray(20);



arrayDiv.id = "container";
body.appendChild(arrayDiv);


//EventListener
input.addEventListener("change", () =>{
    pixel = input.value;
    while(arrayDiv.firstChild != null){
        arrayDiv.removeChild(arrayDiv.lastChild);
    }
    createDivArray(pixel);
});

let children = arrayDiv.childNodes;
children.forEach(child => {  //Coloring the matrix
    child.addEventListener("mousemove", () => {
        child.style["background-color"] = "green";
        
})});

reset.addEventListener("click", () => { //Resetting the matrix to defaultColor
    children.forEach(child => {
        child.style.backgroundColor = defaultColor;
    })
});