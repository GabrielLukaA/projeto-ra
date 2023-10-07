let targetImages  = []
targetImages.push( document.querySelector('#targetImage0' ))
targetImages.push( document.querySelector('#targetImage1' ))
targetImages.push( document.querySelector('#targetImage2' ))
targetImages.push( document.querySelector('#targetImage3' ))
targetImages.push( document.querySelector('#targetImage4' ))
targetImages.push( document.querySelector('#targetImage5' ))
targetImages.push( document.querySelector('#targetImage6' ))
targetImages.push( document.querySelector('#targetImage7' ))
targetImages.push( document.querySelector('#targetImage8' ))
targetImages.push( document.querySelector('#targetImage9' ))
targetImages.push( document.querySelector('#targetImage10'))
targetImages.push( document.querySelector('#targetImage11'))
targetImages.push( document.querySelector('#targetImage12'))
targetImages.push( document.querySelector('#targetImage13'))
targetImages.push( document.querySelector('#targetImage14'))
targetImages.push( document.querySelector('#targetImage15'))
targetImages.push( document.querySelector('#targetImage16'))
targetImages.push( document.querySelector('#targetImage17'))
targetImages.push( document.querySelector('#targetImage18'))
targetImages.push( document.querySelector('#targetImage19'))
targetImages.push( document.querySelector('#targetImage20'))
targetImages.push( document.querySelector('#targetImage21'))
targetImages.push( document.querySelector('#targetImage22'))
targetImages.push( document.querySelector('#targetImage23'))
targetImages.push( document.querySelector('#targetImage24'))
targetImages.push( document.querySelector('#targetImage25'))
targetImages.push( document.querySelector('#targetImage26'))
targetImages.push( document.querySelector('#targetImage27'))
targetImages.push( document.querySelector('#targetImage28'))
targetImages.push( document.querySelector('#targetImage29'))
targetImages.push( document.querySelector('#targetImage30'))
targetImages.push( document.querySelector('#targetImage31'))
targetImages.push( document.querySelector('#targetImage32'))
targetImages.push( document.querySelector('#targetImage33'))
targetImages.push( document.querySelector('#targetImage34'))
targetImages.push( document.querySelector('#targetImage35'))
targetImages.push( document.querySelector('#targetImage36'))
targetImages.push( document.querySelector('#targetImage37'))
targetImages.push( document.querySelector('#targetImage38'))
targetImages.push( document.querySelector('#targetImage39'))
targetImages.push( document.querySelector('#targetImage40'))
targetImages.push( document.querySelector('#targetImage41'))
targetImages.push( document.querySelector('#targetImage42'))
targetImages.push( document.querySelector('#targetImage43'))
targetImages.push( document.querySelector('#targetImage44'))
targetImages.push( document.querySelector('#targetImage45'))
targetImages.push( document.querySelector('#targetImage46'))
targetImages.push( document.querySelector('#targetImage47'))
targetImages.push( document.querySelector('#targetImage48'))
targetImages.push( document.querySelector('#targetImage49'))
targetImages.push( document.querySelector('#targetImage50'))
targetImages.push( document.querySelector('#targetImage51'))
targetImages.push( document.querySelector('#targetImage52'))
targetImages.push( document.querySelector('#targetImage53'))
targetImages.push( document.querySelector('#targetImage54'))
targetImages.push( document.querySelector('#targetImage55'))
targetImages.push( document.querySelector('#targetImage56'))
targetImages.push( document.querySelector('#targetImage57'))
targetImages.push( document.querySelector('#targetImage58'))
targetImages.push( document.querySelector('#targetImage59'))
targetImages.push( document.querySelector('#targetImage60'))
targetImages.push( document.querySelector('#targetImage61'))
targetImages.push( document.querySelector('#targetImage62'))
targetImages.push( document.querySelector('#targetImage63'))
targetImages.push( document.querySelector('#targetImage64'))
targetImages.push( document.querySelector('#targetImage65'))
targetImages.push( document.querySelector('#targetImage66'))
targetImages.push( document.querySelector('#targetImage67'))
targetImages.push( document.querySelector('#targetImage68'))
targetImages.push( document.querySelector('#targetImage69'))
targetImages.push( document.querySelector('#targetImage70'))
targetImages.push( document.querySelector('#targetImage71'))
targetImages.push( document.querySelector('#targetImage72'))

function direcionarCamera(){
    window.location.href = 'camera.html';
}

if(window.location.pathname == '/camera.html'){
  console.log("to na camera")
  targetImages.map( (target) => {
    target.addEventListener("targetFound", async event => {
      console.log(target)
      localStorage.setItem('indice', targetImages.indexOf(target))
      window.location.href =  'card.html';
    });
  })
}


let  equipamentos = [];
equipamentos.push('Betoneira')



// //console.log(targetImage72)
// targetImage72.addEventListener("targetFound", async event => {
//   targetImage72.setAttribute("value", 72)
//   alert(targetImage72);
//   console.log(targetImage72)
//   console.log(targetImage72.value)
//   localStorage.setItem('indice', 72)
//   // window.location.href =  'card.html';
//   // alert('sou a porra do 72')
//   //mandar mensagem ou indice para o local storage e recuperar no outro js

// });


// targetImage.addEventListener("targetFound", async event => {
//     window.location.href =  'card.html';
//     //mandar mensagem ou indice para o local storage e recuperar no outro js

// });

  //cpa que fazemos na propria camera.html mesmo e ver se da
    //q nada irmao samo bomd+