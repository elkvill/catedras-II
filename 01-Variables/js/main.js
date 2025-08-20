//seleccionar el boton yv el parrafo
const calcular = document.getElementById("btnCalcular");
const resultado = document.getElementById("resultado");

calcular.addEventListener("click", () => {
    const anioNacimiento = prompt("Ingresa tu año de nacimiento");
    const anioActual = new Date().getFullYear();
    const edad = anioActual - anioNacimiento;

    //mostrar el resultado
    resultado.textContent = `Tienes aproximadamente ${edad} años`;
});