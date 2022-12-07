function createDivArray(){
    let div = new Array(16);
    let arrayDiv = document.createElement("div");
    arrayDiv.className = "container";
    let body = document.querySelector('body');
    for(i=0; i<16; i++){
        div[i] = new Array(16);
        for(n = 0; n < 16; n++)
        {
            div[i][n] = document.createElement("div");
            div[i][n].className = "child";
            arrayDiv.appendChild(div[i][n]);
        }
    }
    body.appendChild(arrayDiv);
}

createDivArray();