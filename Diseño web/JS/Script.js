// Funcion de Registro
function showRegisterForm() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("register-form").style.display = "block";
}
// Funcion Inicio Sesion
function showLoginForm() {
    document.getElementById("login-form").style.display = "block";
    document.getElementById("register-form").style.display = "none";
}

// Funcion cambia imagen dia y noche
document.addEventListener("DOMContentLoaded", function () {
    const body = document.getElementById("body-image");
    const now = new Date();
    const hour = now.getHours();

    if (hour >= 6 && hour < 18) { // Horas del día (6 AM a 5:59 PM)
        body.classList.remove("n-mode");
        body.classList.add("d-mode");
    } else { // Horas de la noche
        body.classList.remove("d-mode");
        body.classList.add("n-mode");
    }
});

// Validaciones registro  
function validarFormulario() {
        var mensajeError = "Falta algo";

        if (document.getElementById("first_name").value == "") {
          mensajeError += "Le falta escribir el nombre.\n";
        }

        if (document.getElementById("last_name").value == "") {
          mensajeError += "Le falta escribir los apellidos.\n";
        }

        var documentType = document.getElementById("document_type");
        if (documentType.options[documentType.selectedIndex].value == "") {
          mensajeError += "Le falta seleccionar el tipo de documento.\n";
        }

        if (document.getElementById("document_number").value == "") {
          mensajeError += "Le falta escribir el número de documento.\n";
        }

        if (document.getElementById("age").value == "") {
          mensajeError += "Le falta escribir la edad.\n";
        }

        if (document.getElementById("phone").value == "") {
          mensajeError += "Le falta escribir el teléfono.\n";
        }

        if (document.getElementById("address").value == "") {
          mensajeError += "Le falta escribir la dirección.\n";
        }

        var gender = document.getElementById("gender");
        if (gender.options[gender.selectedIndex].value == "") {
          mensajeError += "Le falta seleccionar el género.\n";
        }

        if (document.getElementById("email").value == "") {
          mensajeError += "Le falta escribir el correo electrónico.\n";
        }

        var city = document.getElementById("city");
        if (city.options[city.selectedIndex].value == "") {
          mensajeError += "Le falta seleccionar la ciudad de residencia.\n";
        }

        var country = document.getElementById("country");
        if (country.options[country.selectedIndex].value == "") {
          mensajeError += "Le falta seleccionar el país de origen.\n";
        }

        var eps = document.getElementById("eps");
        if (eps.options[eps.selectedIndex].value == "") {
          mensajeError += "Le falta seleccionar la EPS.\n";
        }

        // Agrega más validaciones para los demás campos

        for (var i = 0; i < campos.length; i++) {
          var campo = document.getElementById(campos[i]);
          var valorCampo = campo.value.trim();

          if (valorCampo === "") {
            mensajeError += campo.labels[0].textContent.toLowerCase() + ', ';
            document.getElementById("error_" + campos[i]).textContent = "Campo obligatorio";
            document.getElementById("error_" + campos[i]).style.display = "block";
            campo.style.borderColor = "red"; // Cambia el color del borde a rojo
          } else {
            document.getElementById("error_" + campos[i]).style.display = "none";
            campo.style.borderColor = ""; // Restaura el color del borde a su valor predeterminado
          }
        }
  
        if (mensajeError !== "Le falta escribir el/la ") {
          mensajeError = mensajeError.substring(0, mensajeError.length - 2);
          document.getElementById("mensaje_error").textContent = mensajeError;
          return false;
        }

        return true;
      }


// Mensaje del tipo file

    function updateFileName(input) {
  const fileNameDisplay = document.getElementById('file-name');
  const fileError = document.getElementById('file-error');

  if (input.files.length > 0) {
    const fileName = input.files[0].name;
    fileNameDisplay.textContent = `Archivo seleccionado: ${fileName}`;
    fileError.textContent = ''; // Limpia el mensaje de error
  } else {
    fileNameDisplay.textContent = 'Selecciona un archivo';
    fileError.textContent = 'No has seleccionado ningún archivo'; // Muestra el mensaje de error
  }
}

