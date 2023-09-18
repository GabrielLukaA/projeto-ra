let exampleTarget = document.querySelector('#oi');
// let cena = document.querySelector('#papai');
// let title = document.querySelector('#bah');


// const startARButton = document.getElementById('startARButton');
// const hideARButton = document.getElementById('hideARButton');
// const camera = document.querySelector('a-scene');
// camera.setAttribute('look-controls', 'enabled', false);
// camera.classList.add("hidden")

// startARButton.addEventListener('click', () => {
//  // Esconder o botão de iniciar
//  startARButton.style.display = 'none';
//  // Mostrar o botão de esconder
//  hideARButton.style.display = 'block';
//  // Ativar a câmera
//  camera.setAttribute('look-controls', 'enabled', true);
//  camera.classList.remove("hidden")
// });

// hideARButton.addEventListener('click', () => {
//  // Mostrar o botão de iniciar
//  startARButton.style.display = 'block';
//  // Esconder o botão de esconder
//  hideARButton.style.display = 'none';
//  // Desativar a câmera
//  camera.setAttribute('look-controls', 'enabled', false);
//  camera.classList.add("hidden")
// });

let  equipamentos = [];
equipamentos.push('Betoneira')
function vamoporra(){
    window.location.href = 'camera.html';
}

exampleTarget.addEventListener("targetFound", event => {
    window.location.href = 'card.html';
    alert(equipamentos[0])
    let campoTexto  = document.getElementById('texto');
    alert(campoTexto)
    alert(campoTexto.innerText)
    campoTexto.textContent = ""+equipamentos[0];
    alert(campoTexto.innerText)  
});

  