let mensajeDia = "🌍 Hoy es un buen día para cuidar el planeta.";
let contadorVisitas = 0;

function mostrarMensaje() {
  const mensajeElemento = document.getElementById("mensaje-dia");
  if (mensajeElemento) {
    mensajeElemento.textContent = mensajeDia;
  }
}

function contarVisitas() {
  contadorVisitas++;
  console.log(`Has visitado esta sección ${contadorVisitas} veces.`);
}

function activarBoton() {
  const boton = document.getElementById("boton-accion");
  if (boton) {
    boton.addEventListener("click", () => {
      alert("💡 Gracias por interesarte en ser más ecológico!");
      contarVisitas();
    });
  }
}

function temaPorHora() {
  const hora = new Date().getHours();
  if (hora >= 18 || hora < 6) {
    document.body.classList.add("modo-noche");
  } else {
    document.body.classList.remove("modo-noche");
  }
}

function activarFormulario() {
  const form = document.getElementById("form-contacto");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const nombre = document.getElementById("nombre").value;
      const correo = document.getElementById("correo").value;
      const mensaje = document.getElementById("mensaje").value;

      if (nombre && correo && mensaje) {
        alert(`Gracias ${nombre}, recibimos tu mensaje. 🌿`);
        form.reset();
      } else {
        alert("⚠️ Por favor, completa todos los campos.");
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  mostrarMensaje();
  activarBoton();
  activarFormulario();
  temaPorHora();
});
