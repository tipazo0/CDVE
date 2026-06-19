function abrirModal(titulo, cuerpo) {
  document.getElementById('modal-titulo').textContent = titulo;
  document.getElementById('modal-cuerpo').innerHTML = cuerpo;
  document.getElementById('modalOverlay').classList.add('activo');
  document.body.style.overflow = 'hidden';
}

function cerrarModal() {
  document.getElementById('modalOverlay').classList.remove('activo');
  document.body.style.overflow = '';
}

function enviarFormulario() {
  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const mensaje = document.getElementById('mensaje').value;

  if (nombre === '' || email === '' || mensaje === '') {
    document.getElementById('respuesta').textContent = 'Por favor completá todos los campos.';
    document.getElementById('respuesta').style.color = 'red';
    return;
  }

  document.getElementById('respuesta').textContent = '¡Mensaje enviado! Te contactamos pronto.';
  document.getElementById('respuesta').style.color = 'green';

  document.getElementById('nombre').value = '';
  document.getElementById('email').value = '';
  document.getElementById('mensaje').value = '';
}

function toggleMenu() {
  const links = document.getElementById('nav-links');
  links.classList.toggle('abierto');
}

function cerrarMenu() {
  const links = document.getElementById('nav-links');
  links.classList.remove('abierto');
}

let slideActual = 0;
const totalSlides = 4;

function mostrarSlide(index) {
  const imagenes = document.querySelectorAll('.carrusel-img');
  const puntos = document.querySelectorAll('.punto');

  imagenes.forEach(img => img.classList.remove('activa'));
  puntos.forEach(punto => punto.classList.remove('activo'));

  imagenes[index].classList.add('activa');
  puntos[index].classList.add('activo');
}

function cambiarSlide(direccion) {
  slideActual += direccion;
  if (slideActual < 0) slideActual = totalSlides - 1;
  if (slideActual >= totalSlides) slideActual = 0;
  mostrarSlide(slideActual);
}

function irASlide(index) {
  slideActual = index;
  mostrarSlide(slideActual);
}

setInterval(() => {
  cambiarSlide(1);
}, 5000);