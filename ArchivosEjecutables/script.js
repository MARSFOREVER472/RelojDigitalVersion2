function generateTime()
{
    let tiempoActual = new Date();


let horas = tiempoActual.getHours().toString().length < 2 ? "0" + tiempoActual.getHours() : tiempoActual.getHours();
let minutos = tiempoActual.getMinutes().toString().length < 2 ? "0" + tiempoActual.getMinutes() : tiempoActual.getMinutes();
let segundos = tiempoActual.getSeconds().toString().length < 2 ? "0" + tiempoActual.getSeconds() : tiempoActual.getSeconds();

let tiempoPrincipal = `${horas}:${minutos}:${segundos}`;
document.getElementById("time").innerHTML = tiempoPrincipal;

}

setInterval(() => {
    generateTime();
}, 1000);

