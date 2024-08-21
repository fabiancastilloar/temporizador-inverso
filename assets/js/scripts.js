

//condiciones iniciales
let contador = 0;
let intervalo; // Variable para almacenar la referencia al intervalo
document.getElementById("salidaContador").innerHTML = "00";

function iniciar() {
    // Adquiere el input de entrada
    const inputInicial = Number(document.getElementById("datoEntrada").value);
    console.log("inputInicial = " + inputInicial);

    // Condición inicial del contador
    contador = inputInicial;

    // Limpia cualquier intervalo existente antes de crear uno nuevo
    if (intervalo) {
        clearInterval(intervalo);
    }

    // Establece un nuevo intervalo para mostrar números
    intervalo = setInterval(mostrarNumeros, 1000);

    
    // Muestra el primer número inmediatamente
    mostrarNumeros();

    console.log("fin");
}

// Función para la cuenta regresiva del contador y mostrar en pantalla
function mostrarNumeros() {
    // Si el contador es > 0 descuenta 1
    if (contador > 0) {
        contador = contador - 1;
    } else {
        // Si llega a cero, limpia el intervalo e inicializa la variable a 0
        contador = 0;
        clearInterval(intervalo);
    }

    // Si el contador es un número de unidad se le concatena un 0 a la izquierda
    if (contador >= 0 && contador < 10) {
        document.getElementById("salidaContador").innerHTML = "0" + contador;
    } else {
        document.getElementById("salidaContador").innerHTML = contador;
    }
}

// Función para cancelar la cuenta en marcha del contador
function cancelar() {
    contador = 0;

    if (intervalo) {
        clearInterval(intervalo);
    }

    document.getElementById("salidaContador").innerHTML = "00";
}
