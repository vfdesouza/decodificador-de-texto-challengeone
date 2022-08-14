const output = document.getElementById("output");
const btnCripto = document.getElementById("btn-cripto");
const btnDescripto = document.getElementById("btn-descripto");
const btnCopiar = document.getElementById("btn-copiar");

btnCripto.onclick = cripto;
btnDescripto.onclick = descripto;
btnCopiar.onclick = copiar;

function cripto() {
    var input = document.getElementById("input").value;
    var result = input
                    .replace(/e/gi, "enter")
                    .replace(/i/gi, "imes")
                    .replace(/a/gi, "ai")
                    .replace(/o/gi, "ober")
                    .replace(/u/gi, "ufat");

    output.value = result.toLowerCase();
}

function descripto() {
    var input = document.getElementById("input").value;
    var result = input                    
                    .replace(/enter/gi, "e")
                    .replace(/imes/gi, "i")
                    .replace(/ai/gi, "a")
                    .replace(/ober/gi, "o")
                    .replace(/ufat/gi, "u");

    output.value = result.toLowerCase();
}

function copiar() {
    var output = document.getElementById("output").value;
    navigator.clipboard.writeText(output);
    alert("Texto copiado!");
}