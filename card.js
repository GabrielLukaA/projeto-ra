let text = document.querySelector("#text");
let title = document.querySelector("#title");

let indice = localStorage.getItem('indice');
let body = document.querySelector("#body")
let fundo = document.querySelector("#fundo")
let testando = document.querySelector("#ohMyGod")
let button = document.querySelector("#oi")

alert(indice);

switch(indice){
    //motor
    // 34, 22, 52, 59, 41
    case 41 : 
        alert("entrei pois sou a 41 yay")
        text.innerText = "Sou a imagem 72, represento uma valvula por cima"
        title.innerText = "Motor"
        break;
    //painel controle
    // 49, 49(2), 57, 17
    case 49, 57, 17 : {
        text.innerText = ""
        title.innerText = "Painel de controle"
        break;
    }
    //maquina de frente
    // 18, 33
    case 18, 33 : {
        text.innerText = ""
        title.innerText = "Maquina de frente"
        break;
    }
    //garra de insercao
    // 19, 50
    case 19, 50 : {
        break;
    }
    default:{
        alert("Entrei switch2!")
        break;
    }

}

// if (indice==72){
//     text.innerText = "Uma insertadora de bobinas é uma máquina especializada utilizada na indústria de impressão e encadernação. Ela desempenha um papel crucial no processo de produção, especialmente quando se trata de livros, revistas e outros materiais impressos em grande escala. Esta máquina automatizada é projetada para inserir bobinas de forma precisa e eficiente nos materiais, criando assim um acabamento de alta qualidade.."
//     title.innerText = "Válvula"
// }

function giraGira(){
    // body.classList.remove("flex-col")
    // fundo.classList.remove("w-full")
    fundo.classList.remove("h-[308px]")
    testando.style.height = "600px"
    testando.classList.add('w-full')
    fundo.classList.add("h-full")
    // testando.style.width = "308px";
    alert('mudei a width,  ela é'+testando.width)
    testando.classList.add("rotate-90")
}

function direcionarCamera(){
    window.location.href = 'camera.html';
}

// alert(text.innerText)

//prendedor(?)/ trava seguranca
// 51, 51(2)

//prendedor(?)/ trava seguranca (lado do painel)
// 1, 1(2), 69, 12

//perigo alta tesão
// 3

//sensor f1
//20

//sensor f2
// 4

//protecao/parte de cima da garra de insercao
// 5

//visao lateral (esquerda) (colocadora de fitas)
// 6, 6(2), 70, 38, 46(escrita/especificacoes), 32

//valvula e cabos/motores(?)
// 8, 24, 14, 42

//maquina por tras
// 9

//sensor f7/visao superior
// 10, 28

//visao superior
// 35, 27, 29

//visao lateral (direita)/alta tensao
// 11, 21

//suporte (motor/valvula) (lateral)
//23

//sensor braco direito
//36

//prendedor(diferente)
//37

//visao interior (colocadora de fita)
//39, 43, 44, 30, 45

//cabo motor
//71, 25

//filtro hidraulico
// 72, 13

//suporte (visao superior)
//40, 60, 16, 66    

//insertadora
//53

//rosca da insertadora
//54, 55

//painel detector de falha de isolacao
// 56

//fita
//26, 31

//placa motor
//58

//conjunto painel controle/detector falha
//61

//conjunto lateral esquerda
// 47

//conjunto lateral direita
//62

//visao frontal (com insertadora)
//63

//bobinas
//0, 64

//cobre
// 15

//placa fundadores
//65

//conjunto lateral esquerda
// 48