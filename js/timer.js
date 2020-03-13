var countDownDate = new Date("Mar 15, 2020 10:51:00").getTime();

// Actualizo la cuenta cada 1 segundo
var x = setInterval(function() {

  // Asigno la fecha de hoy a una variable
  var hoy = new Date().getTime();

  // Calcula la diferencia entre la fecha que espero y la fecha de hoy.
  var diferencia = countDownDate - hoy;

  // Calcula el tiempo en dias, horas, minutos y segundos.
  var days = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  var hours = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((diferencia % (1000 * 60)) / 1000);

  // Muestra el resultado en el elemento de clase "timer"
  timer = document.querySelector(".timer");
    timer.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  

  // Cuando la cuenta termina, se reemplaza el texto por lo escrito acá abajo.
  if (diferencia < 0) {
    clearInterval(x);
    timer.innerHTML = "¡Página Web Lista";
    timer.style = "background: -webkit-linear-gradient(0deg, rgba(253,187,45,1) 0%, rgba(34,193,195,1) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; text-shadow: none";
  }  
}, 1000);