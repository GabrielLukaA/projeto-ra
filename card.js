let text = document.querySelector("#text");
let title = document.querySelector("#title");
let indice = JSON.parse(localStorage.getItem("indice"));
// alert(indice)

let body = document.querySelector("#body");
let fundo = document.querySelector("#fundo");
let imgFundo = document.querySelector("#imgFundo");
let button = document.querySelector("#oi");
let cam = document.querySelector("#cam");
let imgContains = document.querySelector("#imgContains");
let imgContainer = document.querySelector("#imgContainer");
let lista = [];
let dark =   JSON.parse(localStorage.getItem("theme"));
console.log(dark)
let girado = false;


if (dark==true){
  document.querySelector("#body").classList.add("bg-[#272727]")
  document.querySelector("#card").classList.add("bg-[#111111]")
  document.querySelector("#textoVerImagens").classList.add("text-[#fff]")
  document.querySelector("#verMaisImagens").src = "./assets/imagesDark.svg"
  title.classList.add("text-[#fff]")
  text.classList.add("text-[#fff]")
  cam.src = "./assets/cameraDark.svg"
  document.querySelector("#theme").src = "./assets/themeDark.svg"
  document.querySelector("#seta").src = "./assets/setaDark.svg"
  document.querySelector("#centerTitle").classList.add("text-[#fcfcfc]")

}


function mostrarCarrossel() {
  const carrossel = document.getElementById('carrossel');
  carrossel.classList.toggle('escondido');
  if (!girado){
    document.querySelector("#centerTitle").classList.remove("hidden")
    girado = true;
  } else {
    document.querySelector("#centerTitle").classList.add("hidden")
    girado = false;
  }

  if (!carrossel.classList.contains('escondido')) {
      // Exibir as imagens na lista // Substitua pelos URLs reais das suas imagens
      const slider = document.getElementById('slider');
console.log(lista)
      lista.forEach(function(imagemURL) {
          const slide = document.createElement('div');
          slide.classList.add('slide');
          const img = document.createElement('img');
          img.src = imagemURL;
          slide.appendChild(img);
          slider.appendChild(slide);
      });
      imgContainer.classList.add("hidden")
      text.classList.add("hidden")
      title.classList.add("hidden")
      carrossel.classList.remove("hidden")
      document.querySelector("#textoVerImagens").innerText = "Voltar as informações"
      document.querySelector("#verMaisImagens").classList.add("hidden")
  } else {
      // Limpar o carrossel ao ocultar
      imgContainer.classList.remove("hidden")
      carrossel.classList.add("hidden")
      text.classList.remove("hidden")
      title.classList.remove("hidden")
      document.querySelector("#textoVerImagens").innerText = "Veja mais Imagens"
      document.querySelector("#verMaisImagens").classList.remove("hidden")
  }
};

function mudarTema(){
  if (!dark){
    document.querySelector("#body").classList.add("bg-[#272727]")
    document.querySelector("#card").classList.add("bg-[#111111]")
    document.querySelector("#textoVerImagens").classList.add("text-[#fff]")
    document.querySelector("#verMaisImagens").src = "./assets/imagesDark.svg"
    title.classList.add("text-[#fff]")
    text.classList.add("text-[#fff]")
    cam.src = "./assets/cameraDark.svg"
    document.querySelector("#theme").src = "./assets/themeDark.svg"
    document.querySelector("#seta").src = "./assets/setaDark.svg"
    document.querySelector("#centerTitle").classList.add("text-[#fcfcfc]")
    dark = true
    localStorage.setItem("theme",dark)
  } else {
    document.querySelector("#body").classList.remove("bg-[#272727]")
    document.querySelector("#card").classList.remove("bg-[#111111]")
    title.classList.remove("text-[#fff]")
    text.classList.remove("text-[#fff]")
    document.querySelector("#textoVerImagens").classList.remove("text-[#fff]")
    cam.src = "./assets/ion_camera.svg"
    document.querySelector("#theme").src = "./assets/theme.svg"
    document.querySelector("#seta").src = "./assets/seta.svg"
    document.querySelector("#verMaisImagens").src = "./assets/images.svg"
    document.querySelector("#centerTitle").classList.remove("text-[#fcfcfc]")
    dark = false
    localStorage.setItem("theme",dark)
  }

  // document.querySelector("#body").classList.remove("bg-[#1C78BB]")
}


function direcionarCamera() {
  window.location.href = "camera.html";
}

function direcionarHome() {
  window.location.href = "index.html";
}


switch (indice) {
  //motor //cabo motor
  // 34, 22, 52, 59, 41, 71, 25
  case 34:
  case 22:
  case 52:
  case 59:
  case 41:
  case 71:
  case 25:
    text.innerText =
      "O motor é usado para acionar o sistema hidráulico. Ele gera energia mecânica para operar " +
      "a bomba hidráulica, que pressuriza o fluido hidráulico. Esse fluido é então usado para controlar os movimentos " +
      "das partes da máquina, como a inserção das bobinas no estator ou outras ações mecânicas necessárias no processo.";
    title.innerText = "Motor";
    imgContainer.src = "/assets/targetImages/indice34.jpg";
    imgFundo.src = "/assets/targetImages/indice34.jpg";
    lista.push("/assets/targetImages/indice34.jpg");
    lista.push("/assets/targetImages/indice22.jpg");
    lista.push("/assets/targetImages/indice52.jpg");
    lista.push("/assets/targetImages/indice59.jpg");
    lista.push("/assets/targetImages/indice41.jpg");
    lista.push("/assets/targetImages/indice71.jpg");
    lista.push("/assets/targetImages/indice25.jpg");
    break;
  //cobre
  // 15
  case 15:
    text.innerText =
      "Rolos com fios de cobre que são usados como material para preparar as bobinas, " +
      "um dos recursos principais do processo.";
    title.innerText = "Rolos de Fio de Cobre";
    imgContainer.src = "/assets/targetImages/indice15.jpg";
    imgFundo.src = "/assets/targetImages/indice15.jpg";
    lista.push("/assets/targetImages/indice15.jpg");
    break;
  //protecao/parte de cima da garra de insercao
  // 5
  case 5:
    text.innerText =
      "Escudo de proteção, contendo o nome da Máquina (Insertadeira de bobinas - Coil Inserting Machine)";
    title.innerText = "Proteção Acima da Cabeça de Inserção";
    imgContainer.src = "/assets/targetImages/indice5.jpg";
    imgFundo.src = "/assets/targetImages/indice5.jpg";
    lista.push("/assets/targetImages/indice5.jpg");
    break;
  //sensor f1, sensor f7/visao superior, sensor f2, sensor braco direito
  //20, 10, 28, 36
  case 20:
  case 10:
  case 28:
  case 4:
  case 36:
    text.innerText =
      "Sensores de segurança, como barreiras de luz ou interruptores de emergência," +
      "são usados para garantir a segurança dos operadores durante a operação da máquina.";
    title.innerText = "Sensor(es) de Segurança (Safety Sensors)";
    imgContainer.src = "/assets/targetImages/indice36.jpg";
    imgFundo.src = "/assets/targetImages/indice36.jpg";
    lista.push("/assets/targetImages/indice20.jpg");
    lista.push("/assets/targetImages/indice10.jpg");
    lista.push("/assets/targetImages/indice28.jpg");
    lista.push("/assets/targetImages/indice4.jpg");
    lista.push("/assets/targetImages/indice36.jpg");

    break;
  //painel controle
  // 49, 49(2), 57, 17
  case 49:
  case 57:
  case 17:
    text.innerText =
      "Permite aos operadores configurar e controlar parâmetros da máquina, " +
      "como a velocidade de inserção, o comprimento do fio e outras configurações.";
    title.innerText = "Painel de controle";
    imgContainer.src = "/assets/targetImages/indice49.jpg";
    imgFundo.src = "/assets/targetImages/indice49.jpg";
    lista.push("/assets/targetImages/indice49.jpg");
    lista.push("/assets/targetImages/indice57.jpg");
    lista.push("/assets/targetImages/indice17.jpg");
    break;
  //maquina de frente
  // 18, 33
  case 18:
  case 33:
    text.innerText =
      "Aqui se é possível ver a máquina de frente, onde já identificamos a Cabeça de inserção de Bobina, caso deseje saber mais sobre, se aproxime e escaneie ela.";
    title.innerText = "Maquina de frente";
    imgContainer.src = "/assets/targetImages/indice18.jpg";
    imgFundo.src = "/assets/targetImages/indice18.jpg";
    lista.push("/assets/targetImages/indice18.jpg");
    lista.push("/assets/targetImages/indice33.jpg");
    break;

  //garra de insercao / visao frontal (com insertadora)
  // 19, 50, 63
  case 19:
  case 50:
  case 63:
    text.innerText =
      " Esta é a parte principal da máquina que insere as bobinas de fio no estator. " +
      "Geralmente, essa cabeça tem componentes mecânicos, como dedos ou agulhas, " +
      "que posicionam as bobinas com precisão nas ranhuras do estator.";
    title.innerText = "Cabeça de Inserção de Bobina (Coil Insertion Head)";
    imgContainer.src = "/assets/targetImages/indice19.jpg";
    imgFundo.src = "/assets/targetImages/indice19.jpg";
    lista.push("/assets/targetImages/indice19.jpg");
    lista.push("/assets/targetImages/indice50.jpg");
    lista.push("/assets/targetImages/indice63.jpg");
    break;
  //visao interior (colocadora de fita)
  //39, 43, 44, 30, 45
  case 39:
  case 43:
  case 44:
  case 30:
  case 45:
    text.innerText = "";
    title.innerText = "Visão interior (colocadora de fita)";
    imgContainer.src = "/assets/targetImages/indice39.jpg";
    imgFundo.src = "/assets/targetImages/indice39.jpg";
    lista.push("/assets/targetImages/indice39.jpg");
    lista.push("/assets/targetImages/indice43.jpg");
    lista.push("/assets/targetImages/indice44.jpg");
    lista.push("/assets/targetImages/indice30.jpg");
    lista.push("/assets/targetImages/indice45.jpg");

    break;
  //filtro hidraulico
  // 72, 13
  case 72:
  case 13:
    text.innerText =
      "O filtro hidráulico é um componente importante para manter a qualidade do fluido hidráulico. " +
      "Ele retira partículas e impurezas do fluido, garantindo que o sistema funcione de maneira eficiente e " +
      "evitando danos aos componentes hidráulicos.";
    title.innerText = "Filtro Hidráulico";
    imgContainer.src = "/assets/targetImages/indice13.jpg";
    imgFundo.src = "/assets/targetImages/indice13.jpg";
    lista.push("/assets/targetImages/indice72.jpg");
    lista.push("/assets/targetImages/indice13.jpg");
    break;
  //perigo alta tesão
  // 3
  case 3:
    text.innerText =
      "Estrutura projetada para abrigar equipamentos e componentes elétricos que operam em tensões " +
      "elétricas elevadas. Essas cabines desempenham um papel crucial em ambientes industriais e de energia, fornecendo " +
      "isolamento elétrico, segurança para operadores e monitoramento dos sistemas elétricos de alta tensão.";
    title.innerText = "Cabine Elétrica de alta Tensão";
    imgContainer.src = "/assets/targetImages/indice3.jpg";
    imgFundo.src = "/assets/targetImages/indice3.jpg";
    lista.push("/assets/targetImages/indice3.jpg");
    break;
  //maquina por tras
  // 9
  case 9:
    text.innerText = "";
    title.innerText = "Visão Traseira da Máquina";
    imgContainer.src = "/assets/targetImages/indice9.jpg";
    imgFundo.src = "/assets/targetImages/indice9.jpg";
    lista.push("/assets/targetImages/indice9.jpg");
    break;
  //visao superior
  // 35, 27, 29
  case 35:
  case 27:
  case 29:
    text.innerText = "";
    title.innerText = "Visão Superior da Máquina";
    lista.push("/assets/targetImages/indice35.jpg");
    lista.push("/assets/targetImages/indice27.jpg");
    lista.push("/assets/targetImages/indice29.jpg");
    break;
  //placa fundadores
  //65
  case 65:
    text.innerText =
      "Placa possuindo o nome dos criadores da máquina. CTW - Turma: MM-42 de 2006 ";
    title.innerText = "Placa com o Nome dos Criadores";
    imgContainer.src = "/assets/targetImages/indice65.jpg";
    imgFundo.src = "/assets/targetImages/indice65.jpg";
    lista.push("/assets/targetImages/indice65.jpg");
    break;
  //insertadora
  //53
  case 53:
    text.innerText =
      " O estator é mantido no lugar nesta estação enquanto as bobinas são inseridas. " +
      "Isso garante a precisão do processo.";
    title.innerText = "Estação de Fixação do Estator (Stator Holding Station)";
    imgContainer.src = "/assets/targetImages/indice53.jpg";
    imgFundo.src = "/assets/targetImages/indice53.jpg";
    lista.push("/assets/targetImages/indice53.jpg");
    break;
  //bobinas
  //0, 64
  case 0:
  case 64:
    text.innerText =
      "Bobinas são componentes elétricos fundamentais, compostos por fios enrolados em torno de um núcleo. " +
      "Na Insertadeira de bobinas, o processo envolve a montagem precisa das bobinas no estator de um motor elétrico. Isso " +
      "inclui o fornecimento do fio condutor, o enrolamento das bobinas de forma espiralada e sua fixação na posição correta, " +
      "contribuindo para a produção de motores elétricos de alta qualidade e desempenho.";
    title.innerText = "Bobinas";
    imgContainer.src = "/assets/targetImages/indice64.jpg";
    imgFundo.src = "/assets/targetImages/indice64.jpg";
    lista.push("/assets/targetImages/indice0.jpg");
    lista.push("/assets/targetImages/indice64.jpg");
    break;
  //prendedor(?)/ trava seguranca //prendedor(diferente)
  // 1, 1(2), 69, 12, 51, 51(2), 37
  case 1:
  case 69:
  case 12:
  case 51:
  case 37:
    text.innerText =
      "As travas de segurança têm a função primordial de garantir a segurança do operador, bem como " +
      "a precisão na montagem. Elas fixam a bobina no cabeçote de inserção, assegurando a precisão na posição de montagem " +
      "e a integridade do processo. Normalmente, são controladas automaticamente pela máquina, desbloqueando apenas quando a " +
      "operação está segura, como após o término do ciclo de inserção, garantindo a segurança e a qualidade da montagem.";
    title.innerText = "Trava de Segurança";
    imgContainer.src = "/assets/targetImages/indice51.jpg";
    imgFundo.src = "/assets/targetImages/indice51.jpg";
    lista.push("/assets/targetImages/indice1.jpg");
    lista.push("/assets/targetImages/indice69.jpg");
    lista.push("/assets/targetImages/indice12.jpg");
    lista.push("/assets/targetImages/indice51.jpg");
    lista.push("/assets/targetImages/indice37.jpg");
    break;
  //fita
  //26, 31
  case 26:
  case 31:
    text.innerText = "";
    title.innerText = "Fita";
    imgContainer.src = "/assets/targetImages/indice31.jpg";
    imgFundo.src = "/assets/targetImages/indice31.jpg";
    lista.push("/assets/targetImages/indice26.jpg");
    lista.push("/assets/targetImages/indice31.jpg");
    break;
  //valvula e cabos/motores(?)
  // 8, 24, 14, 42
  case 8:
  case 24:
  case 14:
  case 42:
    text.innerText =
      " As válvulas hidráulicas são usadas para controlar o fluxo do fluido e, consequentemente, " +
      "os movimentos das partes da máquina. Elas podem direcionar o fluido para diferentes atuadores, controlar a pressão " +
      "e a direção do movimento, e ajustar a velocidade das operações.";
    title.innerText = "Válvulas e cabos de Alimentação Hidráulica";
    imgContainer.src = "/assets/targetImages/indice24.jpg";
    imgFundo.src = "/assets/targetImages/indice24.jpg";
    lista.push("/assets/targetImages/indice8.jpg");
    lista.push("/assets/targetImages/indice24.jpg");
    lista.push("/assets/targetImages/indice14.jpg");
    lista.push("/assets/targetImages/indice42.jpg");

    break;
  //suporte (visao superior) / suporte (motor/valvula) (lateral)
  //40, 60, 16, 66, 23
  case 40:
  case 60:
  case 16:
  case 66:
  case 23:
    text.innerText =
      "Suporte sobre o qual estão as principais fontes de alimentção da máqina como " +
      "o motor, o filtro hidráulico e as válvulas, bem como medidores de pressão.";
    title.innerText = "Suporte de Alimentação";
    imgContainer.src = "/assets/targetImages/indice40.jpg";
    imgFundo.src = "/assets/targetImages/indice40.jpg";
    lista.push("/assets/targetImages/indice40.jpg");
    lista.push("/assets/targetImages/indice60.jpg");
    lista.push("/assets/targetImages/indice16.jpg");
    lista.push("/assets/targetImages/indice66.jpg");
    lista.push("/assets/targetImages/indice23.jpg");
    break;
  //placa motor
  //58
  case 58:
    text.innerText =
      "Contém as especificações do motor. Modelo: W22 Premium; Fabricante: WEG; " +
      "Data de Fabricação: 25 de Outubro de 2015.";
    title.innerText = "Placa do Motor";
    imgContainer.src = "/assets/targetImages/indice58.jpg";
    imgFundo.src = "/assets/targetImages/indice58.jpg";
    break;
  //conjunto lateral esquerda / direita
  // 47, 48, 11, 21, 62
  case 47:
  case 48:
  case 11:
  case 21:
  case 62:
    text.innerText = "";
    title.innerText = "Conjunto da Máquina visto de Lado";
    imgContainer.src = "/assets/targetImages/indice62.jpg";
    imgFundo.src = "/assets/targetImages/indice62.jpg";
    lista.push("/assets/targetImages/indice47.jpg");
    lista.push("/assets/targetImages/indice48.jpg");
    lista.push("/assets/targetImages/indice11.jpg");
    lista.push("/assets/targetImages/indice21.jpg");
    lista.push("/assets/targetImages/indice62.jpg");
    break;
  //rosca da insertadora
  //54, 55
  case 54:
  case 55:
    text.innerText = "Rosca que auxilia a Insertadora.";
    title.innerText = "Rosca da Insertadora";
    imgContainer.src = "/assets/targetImages/indice54.jpg";
    imgFundo.src = "/assets/targetImages/indice54.jpg";
    lista.push("/assets/targetImages/indice54.jpg");
    lista.push("/assets/targetImages/indice55.jpg");
    break;
  //painel detector de falha de isolacao
  // 56
  case 56:
    text.innerText =
      " Painel especializado projetado para monitorar a integridade da isolação elétrica em sistemas " +
      "e detectar quaisquer falhas, emitindo alertas quando ocorre um problema. Painel essencial para prevenir " +
      "curtos-circuitos e outros perigos associados a falhas na isolação de equipamentos elétricos.";
    title.innerText = "Painel Detector de Falha de Isolação";
    imgContainer.src = "/assets/targetImages/indice56.jpg";
    imgFundo.src = "/assets/targetImages/indice56.jpg";
    lista.push("/assets/targetImages/indice56.jpg");
    break;
  //conjunto painel controle/detector falha
  //61
  case 61:
    text.innerText =
      "Conjunto do Painel de Controle e do Painel Detector de Falha de Isolação. " +
      " São paineis que permitem o monitoramento, comportamento e controle adequados da máquina ";
    title.innerText = "Painel de Controle e Detector de Falha";
    imgContainer.src = "/assets/targetImages/indice61.jpg";
    imgFundo.src = "/assets/targetImages/indice61.jpg";
    lista.push("/assets/targetImages/indice61.jpg");

    break;
  default:
    break;
}
