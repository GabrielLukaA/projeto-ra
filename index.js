//Intancia a variável como uma lista
let targetImages = [];
let dark = false
console.log(JSON.parse(localStorage.getItem("theme")))
if (JSON.parse(localStorage.getItem("theme")==null)){
  localStorage.setItem("theme", false)
}
else if (JSON.parse(localStorage.getItem("theme"))){
  let fundo =  document.querySelector("#fundo")
  fundo.classList.add("bg-[#272727]")
  let theme = document.querySelector("#theme")
  theme.src = "./assets/themeDark.svg"
  let banner = document.querySelector("#banner")
  banner.src = "./assets/bannerWeg.svg"
  dark=true
}


//Passa para a lista cada elemento "target" da câmera
document.querySelectorAll("a-entity").forEach( (target) => {
  targetImages.push(target)
})


function mudarTema(){
  if (!dark){
    let fundo =  document.querySelector("#fundo")
    fundo.classList.add("bg-[#272727]")
    let banner = document.querySelector("#banner")
    banner.src = "./assets/bannerWeg.svg"
    let theme = document.querySelector("#theme")
    theme.src = "./assets/themeDark.svg"
    dark = true
    localStorage.setItem("theme",dark)
  } else {
    let fundo =  document.querySelector("#fundo")
    fundo.classList.remove("bg-[#272727]")
    let banner = document.querySelector("#banner")
    banner.src = "./assets/bannerWegLight.svg"
    let theme = document.querySelector("#theme")
    theme.src = "./assets/theme.svg"
    dark = false
    localStorage.setItem("theme",dark)
  }

}

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