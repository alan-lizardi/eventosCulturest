setInterval(() => {
    let fecha = new Date();
    let dia = fecha.getDate();
    let mes = fecha.getMonth() + 1;
    let anio = fecha.getFullYear();
    let hora = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();
    document.getElementById("fecha").innerHTML =
      hora +
      ":" +
      minutos +
      ":" +
      segundos +
      "-" +
      dia +
      "/" +
      mes +
      "/" +
      anio;
  }, 1000);