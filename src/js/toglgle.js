
function initializeToggle(buttonId, optionsId) {
    const botonMostrar = document.getElementById(buttonId);
    const opciones = document.getElementById(optionsId);
    let opcionesMostradas = false;

    botonMostrar.addEventListener("click", () => {
        if (!opcionesMostradas) {
            opciones.style.display = "block";
            opcionesMostradas = true;
        } else {
            opciones.style.display = "none";
            opcionesMostradas = false;
        }
    });
}
