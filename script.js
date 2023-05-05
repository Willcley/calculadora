// Funções da calculadora

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

// Background

let colorBackground = '#404080';
let themeBackground = '#000';
let colorOrder = `${themeBackground}, ${colorBackground}`;

function fundoModo() {
    if (themeBackground == '#000') {
        themeBackground = '#fff';
        colorOrder = `${colorBackground}, ${themeBackground}`
        document.getElementById('mode').innerText = 'Dark Mode';
    } else {
        themeBackground = '#000';
        colorOrder = `${themeBackground}, ${colorBackground}`;
        document.getElementById('mode').innerText = 'Light Mode';
    }
    document.body.style = `background: linear-gradient(0deg, ${colorOrder})`;
    return document.body.style;
}

function mudaFundo() {
    if (colorBackground == '#404080') {
        colorBackground = '#804040';
    } else if (colorBackground == '#804040') {
        colorBackground = '#408040';
    } else {
        colorBackground = '#404080';
    }
    if (themeBackground == '#000') {
        colorOrder = `${themeBackground}, ${colorBackground}`;
    } else {
        colorOrder = `${colorBackground}, ${themeBackground}`;
    }
    document.body.style = `background: linear-gradient(0deg, ${colorOrder})`;
    return document.body.style;
}

// Tema da calculadora

function mudaTema() {
    alert('Em breve...');
}