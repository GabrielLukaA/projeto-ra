let exampleTarget = document.querySelector('#targetImage');

let  equipamentos = [];
equipamentos.push('Betoneira')


function direcionarCamera(){
    window.location.href = 'camera.html';
}


exampleTarget.addEventListener("targetFound", async event => {
    window.location.href =  'card.html';
    
});

  //cpa que fazemos na propria camera.html mesmo e ver se da
    //q nada irmao samo bomd+