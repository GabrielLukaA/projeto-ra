//Intancia a variável como uma lista
let targetImages = [];

//Passa para a lista cada elemento "target" da câmera
document.querySelectorAll("a-entity").forEach( (target) => {
  targetImages.push(target)
})

function direcionarCamera(){
    window.location.href = 'camera.html';
}

//Verifica se está na câmera
if(window.location.pathname == '/camera.html'){
  //Passa pela lista de targets adicionando o eventListener
  targetImages.map( (target) => {
    target.addEventListener("targetFound", async event => {
      //Passa para o localStorage o indice do target
      alert(targetImages.indexOf(target))
      localStorage.setItem('indice', targetImages.indexOf(target))
      window.location.href =  'card.html';
    });
  });
}

/////////////////////////////////////////////////////////////////
//OBS: Não é possivel atribuir os elementos diretamente na 
//instancia da variável pois eles sao do tipo nodeListOf<Element> 
//que não possui alguns metodos como o  map por exemplo
/////////////////////////////////////////////////////////////////

  //cpa que fazemos na propria camera.html mesmo e ver se da
    //q nada irmao samo bomd+