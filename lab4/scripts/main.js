let contador = 0;

const numeroContador = document.getElementById('numero');
const btnComprar = document.getElementById('btn-comprar');
const imagemBike = document.getElementById('imagem-bike');
const textoInfo = document.getElementById('texto-info');
const btnContacto = document.getElementById('btn-contacto');
const btnHorario = document.getElementById('btn-horario');
const coordenadas = document.getElementById('coordenadas');
const preco = document.getElementById('preco');

btnComprar.addEventListener('click', function() {
    contador = contador + 1;
    numeroContador.textContent = contador;
    btnComprar.textContent = 'Obrigado pela compra!';
    btnComprar.style.backgroundColor = '#5cb85c';
});

btnComprar.addEventListener('dblclick', function() {
    contador = 0;
    numeroContador.textContent = contador;
    btnComprar.textContent = 'Comprar Agora';
    btnComprar.style.backgroundColor = '#2c5f2d';
});

imagemBike.addEventListener('mouseover', function() {
    imagemBike.style.transform = 'scale(1.1)';
    imagemBike.style.transition = 'transform 0.3s';
    preco.textContent = 'Preço especial: 399€';
    preco.style.color = '#5cb85c';
});

imagemBike.addEventListener('mouseout', function() {
    imagemBike.style.transform = 'scale(1)';
    preco.textContent = 'Preço: 450€';
    preco.style.color = '#d9534f';
});

document.body.addEventListener('mousemove', function(evento) {
    coordenadas.textContent = 'X: ' + evento.clientX + ', Y: ' + evento.clientY;
});

btnContacto.addEventListener('click', function() {
    textoInfo.textContent = 'Email: geral@bicicletaslisboa.pt - Respondemos em 24 horas!';
    textoInfo.style.color = '#2c5f2d';
    textoInfo.style.fontWeight = 'bold';
});

btnHorario.addEventListener('click', function() {
    textoInfo.textContent = 'Aberto de segunda a sábado, das 9h às 19h. Domingo fechado.';
    textoInfo.style.color = '#d9534f';
    textoInfo.style.fontWeight = 'bold';
});

textoInfo.addEventListener('mouseover', function() {
    textoInfo.style.fontSize = '22px';
});

textoInfo.addEventListener('mouseout', function() {
    textoInfo.style.fontSize = '18px';
});