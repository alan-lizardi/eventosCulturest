function fecha() {
    let fecha = new Date();
    let dia = fecha.getDate().toString().padStart(2, '0');
    let mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
    let anio = fecha.getFullYear();
    let hora = fecha.getHours().toString().padStart(2, '0');
    let minutos = fecha.getMinutes().toString().padStart(2, '0');
    let segundos = fecha.getSeconds().toString().padStart(2, '0');
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
      return hora +
      ":" +
      minutos +
      ":" +
      segundos +
      " - " +
      dia +
      "/" +
      mes +
      "/" +
      anio;
  }
// setInterval(fecha, 1000);
setInterval(function() {
    document.getElementById("fecha").innerHTML = fecha();
}, 1000);

  const alumnos = [
    [ "222217053", "Enriquez Grijalva Manuel","a222217053@unison.mx"],
    [ "220212808", "Herrera Ceceña Angel David","a220212808@unison.mx"],
    [ "221201308", "Lizardi Díaz Alan Gilberto","a221201308@unison.mx"]
  ];

  function buscarAlumno(expediente){
    if (expediente.key === "Enter") {
        expediente = document.getElementById("expediente").value;
        for (let i = 0; i < alumnos.length; i++) {
          if (alumnos[i][0] === expediente) {
            const fechaActual = fecha();
            document.getElementById("salida").innerHTML = (alumnos[i][1]);
            document.getElementById("evento").innerHTML= ("Se ha inscrito al evento Hackathon 2025 - "+ fechaActual);
            document.getElementById("expediente").value = "";
          }
        }
        return null;
    }
  }
