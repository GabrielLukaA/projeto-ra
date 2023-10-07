let targetImages = [];
targetImages = document.querySelectorAll("a-entity");

function direcionarCamera(){
    window.location.href = 'camera.html';
}

if(window.location.pathname == '/camera.html'){
  targetImages.map( (target) => {
    target.addEventListener("targetFound", async event => {
      localStorage.setItem('indice', targetImages.indexOf(target))
      window.location.href =  'card.html';
    });
  });
}

  //cpa que fazemos na propria camera.html mesmo e ver se da
    //q nada irmao samo bomd+