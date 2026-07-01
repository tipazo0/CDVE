const seccion = document.querySelector("section");

const parrafo = document.createElement("p");
parrafo.textContent = "Este párrafo lo creó JavaScript";
parrafo.style.color = "#d4af37";
parrafo.style.fontWeight = "bold";

seccion.appendChild(parrafo);

const boton = document.createElement("button");
boton.textContent = "Hacé clic";
boton.style.padding = "10px 20px";
boton.style.marginTop = "10px";
boton.style.cursor = "pointer";

boton.addEventListener("click", () => {
  boton.textContent = "¡Clickeado!";
  boton.style.backgroundColor = "#d4af37";
});

seccion.appendChild(boton);

boton.addEventListener("mouseover", () => {
  boton.style.opacity = "0.8";
});

boton.addEventListener("mouseout", () => {
  boton.style.opacity = "1";
});

document.addEventListener("keydown", (evento) => {
  console.log(evento.key);
});

document.addEventListener("keydown", (evento) => {
  if (evento.key === "ArrowRight") {
    console.log("flecha derecha - mover carrusel");
    cambiarSlide(1);
  }
  if (evento.key === "ArrowLeft") {
    console.log("flecha izquierda - mover carrusel");
    cambiarSlide(-1);
  }
});

localStorage.setItem("nombreClub", "Club Tipazo");

const nombre = localStorage.getItem("nombreClub");
console.log(nombre);

let visitas = localStorage.getItem("visitas");

if (visitas === null) {
  visitas = 1;
} else {
  visitas = parseInt(visitas) + 1;
}

localStorage.setItem("visitas", visitas);
console.log("Visitaste esta página " + visitas + " veces");

try {
  const resultado = 10 / 0;
  console.log(resultado);
  
  const objeto = null;
  console.log(objeto.nombre);
} catch (error) {
  console.log("Algo salió mal:", error.message);
}

console.log("El código siguió ejecutándose");

async function obtenerDatos() {
  try {
    const respuesta = await fetch("https://url-que-no-existe.com/api");
    const datos = await respuesta.json();
    console.log(datos);
  } catch (error) {
    console.log("Error al obtener datos:", error.message);
    console.log("Mostrando datos de respaldo...");
  }
}

obtenerDatos();