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

function enviarInscripcion() {
  const nombre = document.getElementById('insc-nombre').value;
  const dni = document.getElementById('insc-dni').value;
  const actividad = document.getElementById('insc-actividad').value;
  const email = document.getElementById('insc-email').value;

  if (nombre === '' || dni === '' || actividad === '' || email === '') {
    document.getElementById('insc-respuesta').textContent = 'Por favor completá los campos obligatorios.';
    document.getElementById('insc-respuesta').style.color = 'red';
    return;
  }

  document.getElementById('insc-respuesta').textContent = '¡Solicitud enviada! Te contactaremos para confirmar.';
  document.getElementById('insc-respuesta').style.color = 'green';
}

const postsEjemplo = [
  {
    imagen: "imagenes/basquet.webp",
    fecha: "15 de junio, 2025",
    link: "https://instagram.com"
  },
  {
    imagen: "imagenes/tenis.webp",
    fecha: "12 de junio, 2025",
    link: "https://instagram.com"
  },
  {
    imagen: "imagenes/carrusel/gente.png",
    fecha: "10 de junio, 2025",
    link: "https://instagram.com"
  },
  {
    imagen: "imagenes/carrusel/cancha.png",
    fecha: "8 de junio, 2025",
    link: "https://instagram.com"
  },
  {
    imagen: "imagenes/carrusel/campito.png",
    fecha: "5 de junio, 2025",
    link: "https://instagram.com"
  }
];

let posicionNoticias = 0;
let tarjetasReales = 0;

function renderNoticias() {
  const contenedor = document.getElementById("noticias-contenedor");
  if (!contenedor) return;

  tarjetasReales = postsEjemplo.length;

  // Clonamos el final al principio y el principio al final
  const todosLosPosts = [
    postsEjemplo[postsEjemplo.length - 1], // clon del último
    ...postsEjemplo,                         // posts reales
    postsEjemplo[0]                          // clon del primero
  ];

  contenedor.innerHTML = "";

  todosLosPosts.forEach((post) => {
    contenedor.innerHTML += `
      <a class="noticia-card" href="${post.link}" target="_blank">
        <img src="${post.imagen}" alt="Post del club">
        <div class="noticia-info">
          <p class="noticia-fecha">${post.fecha}</p>
        </div>
      </a>
    `;
  });

  // Arrancamos en la posición 1 (primer post real, saltando el clon)
  posicionNoticias = 1;
  aplicarPosicion(false);
}

function aplicarPosicion(conTransicion) {
  const contenedor = document.getElementById("noticias-contenedor");
  if (!contenedor) return;

  if (!conTransicion) {
    contenedor.classList.add("sin-transicion");
  } else {
    contenedor.classList.remove("sin-transicion");
  }

  const tarjeta = contenedor.querySelectorAll(".noticia-card")[0];
  const ancho = tarjeta.offsetWidth + 20;
  contenedor.style.transform = `translateX(-${posicionNoticias * ancho}px)`;
}

function moverNoticias(direccion) {
  const contenedor = document.getElementById("noticias-contenedor");
  if (!contenedor) return;

  posicionNoticias += direccion;
  aplicarPosicion(true);

  // Cuando termina la transición, verificamos si estamos en un clon
  setTimeout(() => {
    if (posicionNoticias <= 0) {
      posicionNoticias = tarjetasReales;
      aplicarPosicion(false);
    }
    if (posicionNoticias >= tarjetasReales + 1) {
      posicionNoticias = 1;
      aplicarPosicion(false);
    }
  }, 300); // mismo tiempo que la transición CSS (0.3s)
}

renderNoticias();