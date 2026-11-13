
// ========================================
// NOVA DIGITAL - FORMULARIO DE CONTACTO
// ========================================

// Obtener el formulario y el espacio para los mensajes
const formulario = document.querySelector(".formulario-contacto");
const respuesta = document.getElementById("respuesta-formulario");

// Comprobar que los elementos existen
if (formulario && respuesta) {

    // ========================================
    // 1. DETECTAR EL ENVÍO DEL FORMULARIO
    // ========================================

    formulario.addEventListener("submit", function(evento) {

        // Evitar que la página se recargue
        evento.preventDefault();

        // Obtener los valores de los campos
        const nombre = document.getElementById("nombre").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        // ========================================
        // 2. VALIDAR LOS CAMPOS
        // ========================================

        if (!nombre || !correo || !mensaje) {

            respuesta.textContent = "Por favor, completa todos los campos.";
            respuesta.className = "mensaje-formulario visible error";

            return;
        }

        // ========================================
        // 3. MOSTRAR CONFIRMACIÓN
        // ========================================

        respuesta.textContent =
            "¡Gracias, " + nombre +
            "! Este formulario es una demostración. Tu mensaje todavía no ha sido enviado.";

        respuesta.className = "mensaje-formulario visible";

        // Limpiar los campos después del envío
        formulario.reset();

    });


    // ========================================
    // 4. OCULTAR EL MENSAJE AL VOLVER A ESCRIBIR
    // ========================================

    formulario.querySelectorAll("input, textarea").forEach(function(campo) {

        campo.addEventListener("input", function() {

            respuesta.textContent = "";
            respuesta.className = "mensaje-formulario";

        });

    });

}


// ========================================
// 5. COMPROBAR QUE JAVASCRIPT FUNCIONA
// ========================================

console.log("Nova Digital: JavaScript está funcionando correctamente.");
