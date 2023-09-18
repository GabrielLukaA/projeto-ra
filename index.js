let cam = document.querySelector('#oi');
let cena = document.querySelector('#papai');
let title = document.querySelector('#bah');


const startARButton = document.getElementById('startARButton');
const hideARButton = document.getElementById('hideARButton');
const camera = document.querySelector('a-camera');
camera.setAttribute('look-controls', 'enabled', false);

startARButton.addEventListener('click', () => {
 // Esconder o botão de iniciar
 startARButton.style.display = 'none';
 // Mostrar o botão de esconder
 hideARButton.style.display = 'block';
 // Ativar a câmera
 camera.setAttribute('look-controls', 'enabled', true);
});

hideARButton.addEventListener('click', () => {
 // Mostrar o botão de iniciar
 startARButton.style.display = 'block';
 // Esconder o botão de esconder
 hideARButton.style.display = 'none';
 // Desativar a câmera
 camera.setAttribute('look-controls', 'enabled', false);
});
