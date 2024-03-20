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

setInterval(function() {
    document.getElementById("fecha").innerHTML = fecha();
}, 1000);

  const alumnos = [
    [ "222217053", "Enriquez Grijalva Manuel","a222217053@unison.mx","0"],
    [ "220212808", "Herrera Ceceña Angel David","a220212808@unison.mx","0"],
    [ "221201308", "Lizardi Díaz Alan Gilberto","a221201308@unison.mx","0"],
    [ "218206601", "Amaro Ruiz Bryant Alejandro", "a218206601@unison.mx","0"],
    [ "221216239", "Murillo Monge Joshua David", "a221216239@unison.mx","0"],
    [ "221204964", "Ortega Gomez Adan Paul", "a221204964@unison.mx", "0"]
  ];

  function buscarAlumno(expediente){
        for (let i = 0; i < alumnos.length; i++) {
          if (alumnos[i][0] === expediente) {
            if (alumnos[i][3] == "0") {
              const fechaActual = fecha();
              document.getElementById("salida").innerHTML = (alumnos[i][1]);
              document.getElementById("evento").innerHTML= ("Se ha inscrito al evento Hackathon 2025 - "+ fechaActual);
              alumnos[i][3] = "1";
            } else {
              document.getElementById("salida").innerHTML = ("El alumno " + alumnos[i][1] + " ya esta inscribido.");
              document.getElementById("evento").innerHTML= ("");
            }
            
          }
        }
        return null;
  }

  if (window.addEventListener) {
    var expediente="";
    window.addEventListener("keyup",function(e)
    {
      console.log(expediente);
      expediente+=String.fromCharCode(e.keyCode);
      if (e.keyCode == 13) {

        buscarAlumno(expediente.trim());
        
        console.log(expediente);
        expediente = "";
        
      }
    }, true);
  }