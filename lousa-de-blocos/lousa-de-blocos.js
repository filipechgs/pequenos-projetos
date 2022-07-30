var corAtual = '' //cor selecionada pelo uso das constantes

var whsvg = 300; //Valor máximo variavel i nos laços for

//Geradores de blocos:
function blocos(lado, x, y) {
    let blc = d3.select("svg").append('rect').attr('height', lado).attr('width', lado).on('click', () => {
        blc.attr('fill', corAtual);
    }).attr('x', x).attr('y', y);
}
//blocos(10, 0, 0);

function linhaBlocos(lado, y) {
    for(let i = 0; i <= whsvg; i++) {
        blocos(lado, i * lado, y);
    }
}
//linhaBlocos(10, 0);


function lousaQuadrada(lado) {   
    for(let y = 0; y <= whsvg; y++) {
        linhaBlocos(lado, y * lado);
    }  
}

lousaQuadrada(10);

//Constantes para seleção da cor a ser usada
const selBranco = d3.select("svg").append('rect').attr('height', 20).attr('width', 20).attr('fill', 'white').attr('x', 160).attr('y', 480);
selBranco.on('click', () => {
    corAtual = 'white';
})
const selCinza = d3.select("svg").append('rect').attr('height', 20).attr('width', 20).attr('fill', 'grey').attr('x', 180).attr('y', 480);
selCinza.on('click', () => {
    corAtual = 'grey';
})
const selPreto = d3.select("svg").append('rect').attr('height', 20).attr('width', 20).attr('fill', 'black').attr('x', 200).attr('y', 480);
selPreto.on('click', () => {
    corAtual = 'black';
})
const selVermelho = d3.select("svg").append('rect').attr('height', 20).attr('width', 20).attr('fill', 'red').attr('x', 220).attr('y', 480);
selVermelho.on('click', () => {
    corAtual = 'red';
})
const selLaranja = d3.select("svg").append('rect').attr('height', 20).attr('width', 20).attr('fill', 'orange').attr('x', 240).attr('y', 480);
selLaranja.on('click', () => {
    corAtual = 'orange';
})
const selAmarelo = d3.select("svg").append('rect').attr('height', 20).attr('width', 20).attr('fill', 'yellow').attr('x', 260).attr('y', 480);
selAmarelo.on('click', () => {
    corAtual = 'yellow';
})
const selVerde = d3.select("svg").append('rect').attr('height', 20).attr('width', 20).attr('fill', 'green').attr('x', 280).attr('y', 480);
selVerde.on('click', () => {
    corAtual = 'green';
})
const selAzul = d3.select("svg").append('rect').attr('height', 20).attr('width', 20).attr('fill', 'blue').attr('x', 300).attr('y', 480);
selAzul.on('click', () => {
    corAtual = 'blue';
})
const selVioleta = d3.select("svg").append('rect').attr('height', 20).attr('width', 20).attr('fill', 'violet').attr('x', 320).attr('y', 480);
selVioleta.on('click', () => {
    corAtual = 'violet';
})
