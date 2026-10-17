
const boton = document.getElementById("btnContacto");
const bloque = document.getElementById("bloqueContacto");

boton.addEventListener("click", () => {
  const estaOculto = bloque.classList.toggle("oculto");
  boton.setAttribute("aria-expanded", String(!estaOculto));
});