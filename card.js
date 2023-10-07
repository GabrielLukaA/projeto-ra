let text = document.querySelector("#text");
let title = document.querySelector("#title");
let indice = localStorage.getItem('indice');

alert(indice);

if (indice==72){
    text.innerText = "Sou a imagem 72, represento uma valvula por cima"
    title.innerText = "Válvula"
}

function direcionarCamera(){
    window.location.href = 'camera.html';
}

// alert(text.innerText)