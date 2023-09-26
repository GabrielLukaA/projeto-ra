let exampleTarget = document.querySelector('#oi');

let  equipamentos = [];
equipamentos.push('Betoneira')

let button = document.querySelector('#hideARButton')

button.classList.remove("bg-red-500")
button.classList.add("bg-blue-500")

function vamoporra(){
    window.location.href = 'camera.html';
}
function alterarPagina(){
    window.location.href =  'card.html';
    return true;
}

exampleTarget.addEventListener("targetFound", async event => {
    if(alterarPagina()){
        alert(equipamentos[0])
    let campoTexto = document.getElementById('texto')

    alert(campoTexto)

    let porra = document.createElement('p')
    let textin = document.createTextNode(equipamentos[0])
    porra.appendChild(textin)
    alert(porra)
    alert(porra.childNodes)

     porra.innerText = equipamentos[0]

    alert(porra.innerText)

    document.appendChild(porra)
    document.getElementById('body').appendChild(porra)
    }
   
});

  //cpa que fazemos na propria camera.html mesmo e ver se da