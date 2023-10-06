let exampleTarget = document.querySelector('#targetImage0');
let exampleTarget72 = document.querySelector('#targetImage72');
let exampleTarget73 = document.querySelector('#targetImage73');


let  equipamentos = [];
equipamentos.push('Betoneira')


function direcionarCamera(){
    window.location.href = 'camera.html';
}

exampleTarget72.addEventListener("targetFound", async event => {
  window.location.href =  'card.html';
  //mandar mensagem ou indice para o local storage e recuperar no outro js

});
exampleTarget73.addEventListener("targetFound", async event => {
  window.location.href =  'card.html';
  //mandar mensagem ou indice para o local storage e recuperar no outro js

});

exampleTarget.addEventListener("targetFound", async event => {
    window.location.href =  'card.html';
    //mandar mensagem ou indice para o local storage e recuperar no outro js

});

  //cpa que fazemos na propria camera.html mesmo e ver se da
    //q nada irmao samo bomd+