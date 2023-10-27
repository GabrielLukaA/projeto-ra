let targetImages = [];

//Passa para a lista cada elemento "target" da câmera
document.querySelectorAll("a-entity").forEach( (target) => {
    targetImages.push(target)
  })

carregarTargets()

function carregarTargets(){
    alert("carreguei targets")
    //Passa pela lista de targets adicionando o eventListener
    targetImages.map( (target) => {
      console.log(target)
      target.addEventListener("targetFound", event => {
        //Passa para o localStorage o indice do target
        alert("achei")
        alert(targetImages.indexOf(target))
        localStorage.setItem('indice', targetImages.indexOf(target))
        window.location.href =  'card.html';
      });
    });
}