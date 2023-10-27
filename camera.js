let targetImages = [];

//Passa para a lista cada elemento "target" da câmera
document.querySelectorAll("a-entity").forEach( (target) => {
    targetImages.push(target)
  })

carregarTargets()

function carregarTargets(){
    //Passa pela lista de targets adicionando o eventListener
    targetImages.map( (target) => {
      console.log("dfhgd")
      target.addEventListener("targetFound", event => {
        //Passa para o localStorage o indice do target
        alert("achei")
        localStorage.setItem('indice', targetImages.indexOf(target))
        window.location.href =  'card.html';
      });
    });
}