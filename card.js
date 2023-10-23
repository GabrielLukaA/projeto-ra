let text = document.querySelector("#text");
let title = document.querySelector("#title");
let indice = JSON.parse(localStorage.getItem('indice'));

let body = document.querySelector("#body")
let fundo = document.querySelector("#fundo")
let testando = document.querySelector("#ohMyGod")
let button = document.querySelector("#oi")

function giraGira() {
    // body.classList.remove("flex-col")
    // fundo.classList.remove("w-full")
    fundo.classList.remove("h-[308px]")
    testando.style.height = "600px"
    testando.classList.add('w-full')
    fundo.classList.add("h-full")
    // testando.style.width = "308px";
    alert('mudei a width,  ela é' + testando.width)
    testando.classList.add("rotate-90")
}

function direcionarCamera() {
    window.location.href = 'camera.html';
}

alert(indice);

switch (indice) {
    //motor
    // 34, 22, 52, 59, 41
    case 34, 22, 52, 59, 41:
        alert("uhuuuuuu")
        text.innerText = ""
        title.innerText = "Motor"
        break;
    //cobre
    // 15
    case 15:
        text.innerText = ""
        title.innerText = "Rolos de Cobre"
        break;
    //protecao/parte de cima da garra de insercao
    // 5
    case 5:
        text.innerText = ""
        title.innerText = "Proteção Acima da Cabeça de Inserção"
        break;
    //sensor f1
    //20
    case 20:
        text.innerText = ""
        title.innerText = "Sensor F1"
        break;
    //sensor f2
    // 4
    case 4:
        text.innerText = ""
        title.innerText = "Sensor F2"
        break;
    //painel controle
    // 49, 49(2), 57, 17
    case 49, 57, 17:
        text.innerText = "Permite aos operadores configurar e controlar parâmetros da máquina, " + 
        "como a velocidade de inserção, o comprimento do fio e outras configurações."
        title.innerText = "Painel de controle"
        break;
    //maquina de frente
    // 18, 33
    case 18, 33:
        text.innerText = ""
        title.innerText = "Maquina de frente"
        break;

    //garra de insercao 
    // 19, 50
    case 19, 50:
        text.innerText = " Esta é a parte principal da máquina que insere as bobinas de fio no estator. " +
            "Geralmente, essa cabeça tem componentes mecânicos, como dedos ou agulhas, " +
            "que posicionam as bobinas com precisão nas ranhuras do estator.";
        title.innerText = "Cabeça de Inserção de Bobina (Coil Insertion Head)"
        break;
    //visao interior (colocadora de fita)
    //39, 43, 44, 30, 45
    case 39, 43, 44, 30, 45:
        text.innerText = ""
        title.innerText = "Visão interior (colocadora de fita)"
        break;
    //filtro hidraulico
    // 72, 13
    case 72, 13:
        text.innerText = ""
        title.innerText = "Filtro Hidráulico"
        break;
    //perigo alta tesão
    // 3
    case 3:
        text.innerText = ""
        title.innerText = "Alerta de Alta Tesão"
        break;
    //maquina por tras
    // 9
    case 9:
        text.innerText = ""
        title.innerText = "Visão Traseira da Máquina"
        break;
    //visao superior
    // 35, 27, 29
    case 35, 27, 29:
        text.innerText = ""
        title.innerText = "Visão Superior da Máquina"
        break;
    //placa fundadores
    //65
    case 65:
        text.innerText = ""
        title.innerText = "Placa com o Nome dos Criadores"
        break;
    //insertadora
    //53
    case 53:
        text.innerText = ""
        title.innerText = "Insertadora"
        break;
    //bobinas
    //0, 64
    case 0, 64:
        text.innerText = ""
        title.innerText = "Bobinas"
        break;
    //placa motor
    //58
    case 58:
        text.innerText = ""
        title.innerText = "Placa do Motor"
        break;
    //rosca da insertadora
    //54, 55
    case 54, 55:
        text.innerText = ""
        title.innerText = "Rosca da Insertadora"
        break;
    //painel detector de falha de isolacao
    // 56
    case 56:
        text.innerText = ""
        title.innerText = "Painel Detector de Falha de Isolação"
        break;
    //conjunto painel controle/detector falha
    //61
    case 61:
        text.innerText = ""
        title.innerText = "Painel de Controle e Detector de Falha"
        break;
    default:
        alert("Entrei switch2!")
        break;


}

//prendedor(?)/ trava seguranca
// 51, 51(2)

//prendedor(?)/ trava seguranca (lado do painel)
// 1, 1(2), 69, 12

//visao lateral (esquerda) (colocadora de fitas)
// 6, 6(2), 70, 38, 46(escrita/especificacoes), 32

//valvula e cabos/motores(?)
// 8, 24, 14, 42

//sensor f7/visao superior
// 10, 28

//visao lateral (direita)/alta tensao
// 11, 21

//suporte (motor/valvula) (lateral)
//23

//sensor braco direito
//36

//prendedor(diferente)
//37

//cabo motor
//71, 25

//suporte (visao superior)
//40, 60, 16, 66

//fita
//26, 31

//conjunto lateral esquerda
// 47

//conjunto lateral direita
//62

//visao frontal (com insertadora)
//63

//conjunto lateral esquerda
// 48