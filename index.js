let exampleTarget = document.querySelector('#targetImage');

let  equipamentos = [];
equipamentos.push('Betoneira')


function direcionarCamera(){
    window.location.href = 'camera.html';
}


exampleTarget.addEventListener("targetFound", async event => {
    window.location.href =  'card.html';
    //mandar mensagem ou indice para o local storage e recuperar no outro js

});

  //cpa que fazemos na propria camera.html mesmo e ver se da
    //q nada irmao samo bomd+