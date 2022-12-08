//Variable

let pixel = 50;
const main = document.getElementById("main");
const grid = document.getElementById("grid");
const reset = document.querySelector("#reset");
const input = document.getElementById("pixelValue");
const valueOut = document.getElementById("valueOut");




//Functions

function createDivArray(size){
    
    for(i=0; i<size*size; i++){
        let widthHeight = 600/size;
        const gridElement = document.createElement('div');
        gridElement.classList.add('child');
        gridElement.style.width = widthHeight + "px";
        gridElement.style.height = widthHeight + "px";
        gridElement.addEventListener('mouseover', changingColor);
        grid.appendChild(gridElement);
    }
    changingColor();
}

function changingColor(e){
    e.target.style.backgroundColor = 'green';
}

//EventListener
input.addEventListener("change", () =>{
    pixel = input.value;
    while(grid.firstChild != null){
        grid.removeChild(grid.lastChild);
    }
    createDivArray(pixel);
    valueOut.textContent = pixel;

});



reset.addEventListener("click", () => { //Resetting the matrix to defaultColor
    let children = grid.childNodes;
    grid.innerHTML = '';
});

window.onload = () =>{
    createDivArray(20);
}