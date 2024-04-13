function verificarSigno() {
    var signoDigitado = document.getElementById("signo").value.toLowerCase();
  
    if (signoDigitado === "touro") {
      window.location.href = " ./calculadora1/calculadorahtml.html"; // Redireciona para página permitida
    } else {
      document.getElementById("mensagem").innerText = "Acesso negado. Signo incorreto.";
    }
  }
  