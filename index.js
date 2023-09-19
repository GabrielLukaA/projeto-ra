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
    let campoTexto = document.getElementById('texto')
    // async () =>{alert(document.querySelector('#texto'))}
    alert(campoTexto)
    // alert(document.getElementById('texto'))
    // alert(campoTexto.innerText)
    // campoTexto.textContent = ""+equipamentos[0];
    // alert(campoTexto.innerText)  

    let porra = document.createElement('p')
    let textin = document.createTextNode(equipamentos[0])
    porra.appendChild(textin)
    alert(porra)
    alert(porra.childNodes)

    // alert(porra.innerText)
    // alert(porra.innerHTML)
    // alert(porra.textContent)

     porra.innerText = equipamentos[0]
    // porra.innerHTML = equipamentos[0]

    alert(porra.innerText)

    document.appendChild(porra)
    document.getElementById('body').appendChild(porra)

    // document.appendChild(porra)
    // var texto = document.createTextNode(equipamentos[0]);
    // porra.appendChild(texto);
    // campoTexto.appendChild(porra);
    // alert(document.querySelector('p'))
    // alert('opa')
});

  