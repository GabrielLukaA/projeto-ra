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
    //motor //cabo motor
    // 34, 22, 52, 59, 41, 71, 25
    case 34, 22, 52, 59, 41, 71, 25:
        alert("uhuuuuuu")
        text.innerText = "O motor é usado para acionar o sistema hidráulico. Ele gera energia mecânica para operar " +
            "a bomba hidráulica, que pressuriza o fluido hidráulico. Esse fluido é então usado para controlar os movimentos " +
            "das partes da máquina, como a inserção das bobinas no estator ou outras ações mecânicas necessárias no processo."
        title.innerText = "Motor"
        break;
    //cobre
    // 15
    case 15:
        text.innerText = "Rolos com fios de cobre que são usados como material para preparar as bobinas, " +
            "um dos recursos principais do processo."
        title.innerText = "Rolos de Fio de Cobre"
        break;
    //protecao/parte de cima da garra de insercao
    // 5
    case 5:
        text.innerText = "Escudo de proteção, contendo o nome da Máquina (Insertadeira de bobinas - Coil Inserting Machine)"
        title.innerText = "Proteção Acima da Cabeça de Inserção"
        break;
    //sensor f1, sensor f7/visao superior, sensor f2, sensor braco direito
    //20, 10, 28, 36
    case 20, 10, 28, 4, 36:
        text.innerText = "Sensores de segurança, como barreiras de luz ou interruptores de emergência," +
            "são usados para garantir a segurança dos operadores durante a operação da máquina."
        title.innerText = "Sensor(es) de Segurança (Safety Sensors)"
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

    //garra de insercao / visao frontal (com insertadora)
    // 19, 50, 63
    case 19, 50, 63:
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
        text.innerText = "O filtro hidráulico é um componente importante para manter a qualidade do fluido hidráulico. " +
            "Ele retira partículas e impurezas do fluido, garantindo que o sistema funcione de maneira eficiente e " +
            "evitando danos aos componentes hidráulicos."
        title.innerText = "Filtro Hidráulico"
        break;
    //perigo alta tesão
    // 3
    case 3:
        text.innerText = "Estrutura projetada para abrigar equipamentos e componentes elétricos que operam em tensões " +
            "elétricas elevadas. Essas cabines desempenham um papel crucial em ambientes industriais e de energia, fornecendo " +
            "isolamento elétrico, segurança para operadores e monitoramento dos sistemas elétricos de alta tensão."
        title.innerText = "Cabine Elétrica de alta Tensão"
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
        text.innerText = "Placa possuindo o nome dos criadores da máquina. CTW - Turma: MM-42 de 2006 "
        title.innerText = "Placa com o Nome dos Criadores"
        break;
    //insertadora
    //53
    case 53:
        text.innerText = " O estator é mantido no lugar nesta estação enquanto as bobinas são inseridas. " +
            "Isso garante a precisão do processo."
        title.innerText = "Estação de Fixação do Estator (Stator Holding Station)"
        break;
    //bobinas
    //0, 64
    case 0, 64:
        text.innerText = "Bobinas são componentes elétricos fundamentais, compostos por fios enrolados em torno de um núcleo. " +
            "Na Insertadeira de bobinas, o processo envolve a montagem precisa das bobinas no estator de um motor elétrico. Isso " +
            "inclui o fornecimento do fio condutor, o enrolamento das bobinas de forma espiralada e sua fixação na posição correta, " +
            "contribuindo para a produção de motores elétricos de alta qualidade e desempenho."
        title.innerText = "Bobinas"
        break;
    //prendedor(?)/ trava seguranca //prendedor(diferente)
    // 1, 1(2), 69, 12, 51, 51(2), 37
    case 1, 69, 12, 51, 37:
        text.innerText = "As travas de segurança têm a função primordial de garantir a segurança do operador, bem como " +
            "a precisão na montagem. Elas fixam a bobina no cabeçote de inserção, assegurando a precisão na posição de montagem " +
            "e a integridade do processo. Normalmente, são controladas automaticamente pela máquina, desbloqueando apenas quando a " +
            "operação está segura, como após o término do ciclo de inserção, garantindo a segurança e a qualidade da montagem."
        title.innerText = "Trava de Segurança"
        break;
    //fita
    //26, 31
    case 26, 31:
        text.innerText = ""
        title.innerText = "Fita"
        break;
    //valvula e cabos/motores(?)
    // 8, 24, 14, 42
    case 8, 24, 14, 42:
        text.innerText = " As válvulas hidráulicas são usadas para controlar o fluxo do fluido e, consequentemente, " +
            "os movimentos das partes da máquina. Elas podem direcionar o fluido para diferentes atuadores, controlar a pressão " +
            "e a direção do movimento, e ajustar a velocidade das operações."
        title.innerText = "Válvulas e cabos de Alimentação Hidráulica"
        break;
    //suporte (visao superior) / suporte (motor/valvula) (lateral)
    //40, 60, 16, 66, 23
    case 40, 60, 16, 66, 23:
        text.innerText = "Suporte sobre o qual estão as principais fontes de alimentção da máqina como " +
            "o motor, o filtro hidráulico e as válvulas, bem como medidores de pressão."
        title.innerText = "Suporte de Alimentação"
        break;
    //placa motor
    //58
    case 58:
        text.innerText = "Contém as especificações do motor. Modelo: W22 Premium; Fabricante: WEG; " +
            "Data de Fabricação: 25 de Outubro de 2015."
        title.innerText = "Placa do Motor"
        break;
    //conjunto lateral esquerda / direita
    // 47, 48, 11, 21, 62
    case 47, 48, 11, 21, 62:
        text.innerText = ""
        title.innerText = "Conjunto da Máquina visto de Lado"
        break;
    //rosca da insertadora
    //54, 55
    case 54, 55:
        text.innerText = "Rosca que auxilia a Insertadora."
        title.innerText = "Rosca da Insertadora"
        break;
    //painel detector de falha de isolacao
    // 56
    case 56:
        text.innerText = " Painel especializado projetado para monitorar a integridade da isolação elétrica em sistemas " +
            "e detectar quaisquer falhas, emitindo alertas quando ocorre um problema. Painel essencial para prevenir " +
            "curtos-circuitos e outros perigos associados a falhas na isolação de equipamentos elétricos."
        title.innerText = "Painel Detector de Falha de Isolação"
        break;
    //conjunto painel controle/detector falha
    //61
    case 61:
        text.innerText = "Conjunto do Painel de Controle e do Painel Detector de Falha de Isolação. " +
            " São paineis que permitem o monitoramento, comportamento e controle adequados da máquina "
        title.innerText = "Painel de Controle e Detector de Falha"
        break;
    default:
        alert("Não foi possível encontrar uma descrição para essa imagem!")
        break;
}