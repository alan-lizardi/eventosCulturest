    // Función para manejar el evento de teclado
    function manejarEventoTeclado() {
      var expediente = "";
      document.onkeyup = function(e) {
        e = e || window.event;
        
        expediente += String.fromCharCode(e.keyCode);
        if (e.keyCode == 13) {
          // Acciones a realizar cuando se presiona la tecla Enter
          document.getElementById("evento").innerHTML = (expediente + " Se ha inscrito al evento Hackathon 2025 - ");
          agregarLinea(expediente);
          
          expediente = "";
        }
      };
    }
    
    // Llamar a la función al cargar la ventana
    window.onload = function() {
      manejarEventoTeclado();
    };
    
    // Función ficticia para agregar una línea (debes definir tu propia lógica)
    function agregarLinea(expediente) {
  
      var f = new ActiveXObject("Scripting.FileSystemObject");

      var s = f.OpenTextFile("evento.txt",8,true,0);

      s.WriteLine(expediente);

      s.Close();
      // Esta función debería hacer algo con el expediente, como enviarlo a un servidor o almacenarlo localmente.
      // Aquí se deja vacío ya que es una funcionalidad específica de tu aplicación.
    }