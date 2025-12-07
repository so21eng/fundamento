document.addEventListener("DOMContentLoaded", function () {

    const formulario = document.querySelector(".form-container");

    formulario.addEventListener("submit", function (e) {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const email = document.getElementById("email").value;
        const telefono = document.getElementById("telefono").value;
        const direccion = document.getElementById("direccion").value;

        let tipo = [];
        document.querySelectorAll('input[name="tipo"]:checked').forEach(el => {
            tipo.push(el.value);
        });

        const resultado = `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <title>Registro Exitoso</title>
            <link rel="stylesheet" href="registro.css">
        </head>
        <body>

            <div class="alerta">
                ✅ REGISTRO EXITOSO ✅
            </div>

            <div class="contenedor">
                <h2>Datos Registrados</h2>

                <p><b>Nombre:</b> ${nombre}</p>
                <p><b>Apellido:</b> ${apellido}</p>
                <p><b>Email:</b> ${email}</p>
                <p><b>Teléfono:</b> ${telefono}</p>
                <p><b>Dirección:</b> ${direccion}</p>
            </div>

        </body>
        </html>
        `;

        const nuevaVentana = window.open();
        nuevaVentana.document.write(resultado);
        nuevaVentana.document.close();

        alert("✅ REGISTRO EXITOSO ✅");

        formulario.reset();
    });

});
