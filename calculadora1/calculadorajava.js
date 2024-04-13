function calcularIMC() {
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);

    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        alert("Por favor, insira valores válidos para altura e peso.");
        return;
    }

    const imc = peso / (altura * altura);
    const resultado = document.getElementById("resultado");

    if (imc < 18.5) {
        resultado.textContent = "IMC: " + imc.toFixed(2) + " - Abaixo do peso";
    } else if (imc < 25) {
        resultado.textContent = "IMC: " + imc.toFixed(2) + " - Peso normal";
    } else if (imc < 30) {
        resultado.textContent = "IMC: " + imc.toFixed(2) + " - Sobrepeso";
    } else {
        resultado.textContent = "IMC: " + imc.toFixed(2) + " - Obesidade";
    }
}

function verificarSigno() {
    const signoDigitado = document.getElementById("signo").value.toLowerCase();
    const resultado = document.getElementById("resultado");

    if (signoDigitado === "touro") {
        resultado.textContent = "Acesso permitido! Você é do signo de Touro.";
    } else {
        resultado.textContent = "Acesso negado! Você não é do signo de Touro.";
    }
}


