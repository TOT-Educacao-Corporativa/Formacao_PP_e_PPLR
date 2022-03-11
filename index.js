let botaoVideo01 = window.document.querySelector('.videos__amostra--scriptUm');
let botaoVideo02 = window.document.querySelector('.videos__amostra--scriptDois');
let botaoVideo03 = window.document.querySelector('.videos__amostra--scriptTres');

let contentVideoUm = window.document.querySelector('.video__principal--primeiro');
let contentVideoDois = window.document.querySelector('.video__principal--segundo');
let contentVideoTres = window.document.querySelector('.video__principal--terceiro');

const displayNone = "none";
const displayGrid = "grid";
const displayFlex = "flex";

function mostrarVideo() {
    contentVideoUm.style.display = displayGrid;
    contentVideoDois.style.display = displayNone;
    contentVideoTres.style.display = displayNone;
}

function mostrarVideoDois() {
    contentVideoUm.style.display = displayNone;
    contentVideoDois.style.display = displayGrid;
    contentVideoTres.style.display = displayNone;
}

function mostrarVideoTres() {
    contentVideoUm.style.display = displayNone;
    contentVideoDois.style.display = displayNone;
    contentVideoTres.style.display = displayGrid;
}