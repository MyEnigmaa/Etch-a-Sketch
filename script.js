//Variable

let pixel = 50;
let defaultColor = "black";
let selection = defaultColor;
const main = document.getElementById("main");
const grid = document.getElementById("grid");
const reset = document.querySelector("#reset");
const input = document.getElementById("pixelValue");
const valueOut = document.getElementById("valueOut");
const rgb = document.getElementById("rgb");
const black = document.getElementById("black");

//Mouse down
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);



//Functions

function createDivArray(size){
    
    for(i=0; i<size*size; i++){
        let widthHeight = 600/size;
        const gridElement = document.createElement('div');
        gridElement.classList.add('child');
        gridElement.style.width = widthHeight + "px";
        gridElement.style.height = widthHeight + "px";
        gridElement.addEventListener('mouseover', changingColor);
        gridElement.addEventListener('mousedown', changingColor);
        grid.appendChild(gridElement);
    }
    changingColor();
}



function changingColor(e){
    if (e.type === 'mouseover' && !mouseDown) return
    if(selection === defaultColor) e.target.style.backgroundColor = defaultColor;
    if(selection === "rgb"){
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    }
}

//EventListener
input.addEventListener("change", () =>{
    pixel = input.value;
    grid.innerHTML = '';
    createDivArray(pixel);
    valueOut.textContent = pixel;
});

rgb.onclick = () =>{
    selection = "rgb"
}

black.onclick = () =>{
    selection = defaultColor;
}

reset.onclick = () => {
    grid.innerHTML = '';
    createDivArray(pixel);
}

window.onload = () =>{
    createDivArray(20);
}