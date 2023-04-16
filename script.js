function clean() {
    document.getElementById("resultado").innerHTML = "";
}

function back() {
    let resultado = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = resultado.substring(0, resultado.length - 1);
}

function insert(num) {
    let resultado = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML += num;
}

function calcular() {
    let resultado = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = eval(resultado);
}

function mudaTema() {
    alert('Em breve...');
}

function mudaFundo() {
    alert('Em breve...');
}