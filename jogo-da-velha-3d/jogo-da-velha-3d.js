//Cor do jogadoratual
var selectedColor = "blue";
var player = "blue"

//Placar
var blueScore = 0;
var redScore = 0;

//Variáveis para verificação do resultado
//T1
var tL = "a";
var tC = "b";
var tR = "c";
var cL = "d";
var cC = "e";
var cR = "f";
var dL = "g";
var dC = "h";
var dR = "i";
//T2
var tLT2 = "h";
var tCT2 = "i";
var tRT2 = "j";
var cLT2 = "k";
var cCT2 = "l";
var cRT2 = "m";
var dLT2 = "n";
var dCT2 = "o";
var dRT2 = "p";

//T3
var tLT3 = "q";
var tCT3 = "r";
var tRT3 = "s";
var cLT3 = "t";
var cCT3 = "u";
var cRT3 = "v";
var dLT3 = "x";
var dCT3 = "y";
var dRT3 = "z";


var player = "blue";

function toPlay(quadrado, teste) {
    if (teste !== "blue" && teste !== "red") {
        quadrado.attr('fill', selectedColor);
        teste = selectedColor;
        verifGanhador();
    }
}

function machinePlay() {
    toPlay(topLeft, tL);
    
    
}

function pickRandom(array) {
    let max = array.length
    let min = 0
    let randomNumber = Math.floor((Math.random() * max) + min);
    return array[randomNumber]
};

function nextRound() {
    topLeft.attr('fill', 'black');
    topCenter.attr('fill', 'black');
    topRight.attr('fill', 'black');
    centerLeft.attr('fill', 'black');
    centerCenter.attr('fill', 'black');
    centerRight.attr('fill', 'black');
    downLeft.attr('fill', 'black');
    downCenter.attr('fill', 'black');
    downRight.attr('fill', 'black');

    topLeftT2.attr('fill', 'black');
    topCenterT2.attr('fill', 'black');
    topRightT2.attr('fill', 'black');
    centerLeftT2.attr('fill', 'black');
    centerCenterT2.attr('fill', 'black');
    centerRightT2.attr('fill', 'black');
    downLeftT2.attr('fill', 'black');
    downCenterT2.attr('fill', 'black');
    downRightT2.attr('fill', 'black');

    topLeftT3.attr('fill', 'black');
    topCenterT3.attr('fill', 'black');
    topRightT3.attr('fill', 'black');
    centerLeftT3.attr('fill', 'black');
    centerCenterT3.attr('fill', 'black');
    centerRightT3.attr('fill', 'black');
    downLeftT3.attr('fill', 'black');
    downCenterT3.attr('fill', 'black');
    downRightT3.attr('fill', 'black');

    tL = "a";
    tC = "b";
    tR = "c";
    cL = "d";
    cC = "e";
    cR = "f";
    dL = "g";
    dC = "h";
    dR = "i";

    tLT2 = "h";
    tCT2 = "i";
    tRT2 = "j";
    cLT2 = "k";
    cCT2 = "l";
    cRT2 = "m";
    dLT2 = "n";
    dCT2 = "o";
    dRT2 = "p";

    tLT3 = "q";
    tCT3 = "r";
    tRT3 = "s";
    cLT3 = "t";
    cCT3 = "u";
    cRT3 = "v";
    dLT3 = "x";
    dCT3 = "y";
    dRT3 = "z";
};

function verifGanhador() {
    //VERIFICA COMBINAÇÕES EM TODAS AS DIAGONAIS E NUMA MESMA SUPERFÍCIE DO CUBO;
    //T-1 linhas
    if (tL === tC && tC === tR ) {
        d3.select("svg").append('circle').attr('r', 30).attr('cx', 901).attr('cy', 35).attr('fill', tL);
        if (tL === "red") {
            redScore += 1;
            document.getElementById("vermelho").textContent = redScore;
        }else{
            blueScore += 1;
            document.getElementById("azul").textContent = blueScore;
        }
    };
    if (cL === cC && cC === cR ) {
        d3.select("svg").append('circle').attr('r', 30).attr('cx', 901).attr('cy', 35).attr('fill', cL);
        if (cL === "red") {
            redScore += 1;
            document.getElementById("vermelho").textContent = redScore;
        }else{
            blueScore += 1;
            document.getElementById("azul").textContent = blueScore;
        }
    };
    if (dL === dC && dC === dR ) {
        d3.select("svg").append('circle').attr('r', 30).attr('cx', 901).attr('cy', 35).attr('fill', dL);
        if (dL === "red") {
            redScore += 1;
            document.getElementById("vermelho").textContent = redScore;
        }else{
            blueScore += 1;
            document.getElementById("azul").textContent = blueScore;
        }
    };
    //T-1 colunas
    if (tL === cL && cL === dL ) {
        d3.select("svg").append('circle').attr('r', 30).attr('cx', 901).attr('cy', 35).attr('fill', tL);
        if (tL === "red") {
            redScore += 1;
            document.getElementById("vermelho").textContent = redScore;
        }else{
            blueScore += 1;
            document.getElementById("azul").textContent = blueScore;
        }
    };
    if (tC === cC && cC === dC ) {
        d3.select("svg").append('circle').attr('r', 30).attr('cx', 901).attr('cy', 35).attr('fill', tC);
        if (tC === "red") {
            redScore += 1;
            document.getElementById("vermelho").textContent = redScore;
        }else{
            blueScore += 1;
            document.getElementById("azul").textContent = blueScore;
        }
    };
    if (tR === cR && cR === dR ) {
        d3.select("svg").append('circle').attr('r', 30).attr('cx', 901).attr('cy', 35).attr('fill', tR);
        if (tR === "red") {
            redScore += 1;
            document.getElementById("vermelho").textContent = redScore;
        }else{
            blueScore += 1;
            document.getElementById("azul").textContent = blueScore;
        }
    };
    //T-1 em X
    if (tL === cC && cC === dR ) {
        d3.select("svg").append('circle').attr('r', 30).attr('cx', 901).attr('cy', 35).attr('fill', tL);
        if (tL === "red") {
            redScore += 1;
            document.getElementById("vermelho").textContent = redScore;
        }else{
            blueScore += 1;
            document.getElementById("azul").textContent = blueScore;
        }
    };
    if (tR === cC && cC === dL ) {
        d3.select("svg").append('circle').attr('r', 30).attr('cx', 901).attr('cy', 35).attr('fill', tR);
        if (tR === "red") {
            redScore += 1;
            document.getElementById("vermelho").textContent = redScore;
        }else{
            blueScore += 1;
            document.getElementById("azul").textContent = blueScore;
        }
    };

    //T-2 linhas
    if (tLT2 === tCT2 && tC === tRT2 ) {
        d3.select("svg").append('circle').attr('r', 30).attr('cx', 901).attr('cy', 35).attr('fill', tL);
        if (tLT2 === "red") {
            redScore += 1;
            document.getElementById("vermelho").textContent = redScore;
        }else{
            blueScore += 1;
            document.getElementById("azul").textContent = blueScore;
        }
    };
    if (cLT2 === cCT2 && cCT2 === cRT2 ) {
        d3.select("svg").append('circle').attr('r', 30).attr('cx', 901).attr('cy', 35).attr('fill', cL);
        if (cLT2 === "red") {
            redScore += 1;
            document.getElementById("vermelho").textContent = redScore;
        }else{
            blueScore += 1;
            document.getElementById("azul").textContent = blueScore;
        }
    };
    if (dLT2 === dCT2 && dCT2 === dRT2 ) {
        d3.select("svg").append('circle').attr('r', 30).attr('cx', 901).attr('cy', 35).attr('fill', dL);
        if (dLT2 === "red") {
            redScore += 1;
            document.getElementById("vermelho").textContent = redScore;
        }else{
            blueScore += 1;
            document.getElementById("azul").textContent = blueScore;
        }
    };
    //T-2 colunas
    if (tLT2 === cLT2 && cLT2 === dLT2 ) {
        d3.select("svg").append('circle').attr('r', 30).attr('cx', 901).attr('cy', 35).attr('fill', tL);
        if (tLT2 === "red") {
            redScore += 1;
            document.getElementById("vermelho").textContent = redScore;
        }else{
            blueScore += 1;
            document.getElementById("azul").textContent = blueScore;
        }
    };
    if (tCT2 === cCT2 && cCT2 === dCT2 ) {
        d3.select("svg").append('circle').attr('r', 30).attr('cx', 901).attr('cy', 35).attr('fill', tC);
        if (tCT2 === "red") {
            redScore += 1;
            document.getElementById("vermelho").textContent = redScore;
        }else{
            blueScore += 1;
            document.getElementById("azul").textContent = blueScore;
        }
    };
    if (tRT2 === cRT2 && cRT2 === dRT2 ) {
        d3.select("svg").append('circle').attr('r', 30).attr('cx', 901).attr('cy', 35).attr('fill', tR);
        if (tRT2 === "red") {
            redScore += 1;
            document.getElementById("vermelho").textContent = redScore;
        }else{
            blueScore += 1;
            document.getElementById("azul").textContent = blueScore;
        }
    };
    //T-2 em X
    if (tLT2 === cCT2 && cCT2 === dRT2 ) {
        d3.select("svg").append('circle').attr('r', 30).attr('cx', 901).attr('cy', 35).attr('fill', tL);
        if (tLT2 === "red") {
            redScore += 1;
            document.getElementById("vermelho").textContent = redScore;
        }else{
            blueScore += 1;
            document.getElementById("azul").textContent = blueScore;
        }
    };
    if (tRT2 === cCT2 && cCT2 === dLT2 ) {
        d3.select("svg").append('circle').attr('r', 30).attr('cx', 901).attr('cy', 35).attr('fill', tR);
        if (tRT2 === "red") {
            redScore += 1;
            document.getElementById("vermelho").textContent = redScore;
        }else{
            blueScore += 1;
            document.getElementById("azul").textContent = blueScore;
        }
    };

    //T-3 linhas
    if (tLT3 === tCT3 && tCT3 === tRT3 ) {
        d3.select("svg").append('circle').attr('r', 30).attr('cx', 901).attr('cy', 35).attr('fill', tL);
        if (tLT3 === "red") {
            redScore += 1;
            document.getElementById("vermelho").textContent = redScore;
        }else{
            blueScore += 1;
            document.getElementById("azul").textContent = blueScore;
        }
    };
    if (cLT3 === cCT3 && cCT3 === cRT3 ) {
        d3.select("svg").append('circle').attr('r', 30).attr('cx', 901).attr('cy', 35).attr('fill', cL);
        if (cLT3 === "red") {
            redScore += 1;
            document.getElementById("vermelho").textContent = redScore;
        }else{
            blueScore += 1;
            document.getElementById("azul").textContent = blueScore;
        }
    };
    if (dLT3 === dCT3 && dCT3 === dRT3 ) {
        d3.select("svg").append('circle').attr('r', 30).attr('cx', 901).attr('cy', 35).attr('fill', dL);
        if (dLT3 === "red") {
            redScore += 1;
            document.getElementById("vermelho").textContent = redScore;
        }else{
            blueScore += 1;
            document.getElementById("azul").textContent = blueScore;
        }
    };
    //T-3 colunas
    if (tLT3 === cLT3 && cLT3 === dLT3 ) {
        d3.select("svg").append('circle').attr('r', 30).attr('cx', 901).attr('cy', 35).attr('fill', tL);
        if (tLT3 === "red") {
            redScore += 1;
            document.getElementById("vermelho").textContent = redScore;
        }else{
            blueScore += 1;
            document.getElementById("azul").textContent = blueScore;
        }
    };
    if (tCT3 === cCT3 && cCT3 === dCT3 ) {
        d3.select("svg").append('circle').attr('r', 30).attr('cx', 901).attr('cy', 35).attr('fill', tC);
        if (tCT3 === "red") {
            redScore += 1;
            document.getElementById("vermelho").textContent = redScore;
        }else{
            blueScore += 1;
            document.getElementById("azul").textContent = blueScore;
        }
    };
    if (tRT3 === cRT3 && cRT3 === dRT3 ) {
        d3.select("svg").append('circle').attr('r', 30).attr('cx', 901).attr('cy', 35).attr('fill', tR);
        if (tRT3 === "red") {
            redScore += 1;
            document.getElementById("vermelho").textContent = redScore;
        }else{
            blueScore += 1;
            document.getElementById("azul").textContent = blueScore;
        }
    };
    //T-3 em X
    if (tLT3 === cCT3 && cCT3 === dRT3 ) {
        d3.select("svg").append('circle').attr('r', 30).attr('cx', 901).attr('cy', 35).attr('fill', tL);
        if (tLT3 === "red") {
            redScore += 1;
            document.getElementById("vermelho").textContent = redScore;
        }else{
            blueScore += 1;
            document.getElementById("azul").textContent = blueScore;
        }
    };
    if (tRT3 === cCT3 && cCT3 === dLT3 ) {
        d3.select("svg").append('circle').attr('r', 30).attr('cx', 901).attr('cy', 35).attr('fill', tR);
        if (tRT3 === "red") {
            redScore += 1;
            document.getElementById("vermelho").textContent = redScore;
        }else{
            blueScore += 1;
            document.getElementById("azul").textContent = blueScore;
        }
    };  
    //VERIFICA COMBINAÇÕES EM TODAS AS COLUNAS E ARESTAS DO CUBO;
    if (tL === tLT2 && tLT2 === tLT3) {
        d3.select("svg").append('circle').attr('r', 30).attr('cx', 901).attr('cy', 35).attr('fill', tR);
        if (tL === "red") {
            redScore += 1;
            document.getElementById("vermelho").textContent = redScore;
        }else{
            blueScore += 1;
            document.getElementById("azul").textContent = blueScore;
        }
    }
    if (tC === tCT2 && tLT2 === tCT3) {
        d3.select("svg").append('circle').attr('r', 30).attr('cx', 901).attr('cy', 35).attr('fill', tR);
        if (tL === "red") {
            redScore += 1;
            document.getElementById("vermelho").textContent = redScore;
        }else{
            blueScore += 1;
            document.getElementById("azul").textContent = blueScore;
        }
    }
    if (tR === tRT2 && tRT2 === tRT3) {
        d3.select("svg").append('circle').attr('r', 30).attr('cx', 901).attr('cy', 35).attr('fill', tR);
        if (tR === "red") {
            redScore += 1;
            document.getElementById("vermelho").textContent = redScore;
        }else{
            blueScore += 1;
            document.getElementById("azul").textContent = blueScore;
        }
    }
    if (cL === cLT2 && cLT2 === cLT3) {
        d3.select("svg").append('circle').attr('r', 30).attr('cx', 901).attr('cy', 35).attr('fill', tR);
        if (cL === "red") {
            redScore += 1;
            document.getElementById("vermelho").textContent = redScore;
        }else{
            blueScore += 1;
            document.getElementById("azul").textContent = blueScore;
        }
    }
    if (cC === cCT2 && cCT2 === cCT3) {
        d3.select("svg").append('circle').attr('r', 30).attr('cx', 901).attr('cy', 35).attr('fill', tR);
        if (cL === "red") {
            redScore += 1;
            document.getElementById("vermelho").textContent = redScore;
        }else{
            blueScore += 1;
            document.getElementById("azul").textContent = blueScore;
        }
    }
    if (cR === cRT2 && cRT2 === cRT3) {
        d3.select("svg").append('circle').attr('r', 30).attr('cx', 901).attr('cy', 35).attr('fill', tR);
        if (cR === "red") {
            redScore += 1;
            document.getElementById("vermelho").textContent = redScore;
        }else{
            blueScore += 1;
            document.getElementById("azul").textContent = blueScore;
        }
    }
    if (dL === dLT2 && cLT2 === cLT3) {
        d3.select("svg").append('circle').attr('r', 30).attr('cx', 901).attr('cy', 35).attr('fill', tR);
        if (dL === "red") {
            redScore += 1;
            document.getElementById("vermelho").textContent = redScore;
        }else{
            blueScore += 1;
            document.getElementById("azul").textContent = blueScore;
        }
    }
    if (dC === dCT2 && cCT2 === cCT3) {
        d3.select("svg").append('circle').attr('r', 30).attr('cx', 901).attr('cy', 35).attr('fill', tR);
        if (dC === "red") {
            redScore += 1;
            document.getElementById("vermelho").textContent = redScore;
        }else{
            blueScore += 1;
            document.getElementById("azul").textContent = blueScore;
        }
    }
    if (dR === dRT2 && dRT2 === dRT3) {
        d3.select("svg").append('circle').attr('r', 30).attr('cx', 901).attr('cy', 35).attr('fill', tR);
        if (dR === "red") {
            redScore += 1;
            document.getElementById("vermelho").textContent = redScore;
        }else{
            blueScore += 1;
            document.getElementById("azul").textContent = blueScore;
        }
    }
    //VERIFICA COMBINAÇÕES NAS DIAGONAIS DO CUBO
    //diagonais laterais
    if (tL === tCT2 && tCT2 === tRT3 ) {
        d3.select("svg").append('circle').attr('r', 30).attr('cx', 901).attr('cy', 35).attr('fill', tL);
        if (tL === "red") {
            redScore += 1;
            document.getElementById("vermelho").textContent = redScore;
        }else{
            blueScore += 1;
            document.getElementById("azul").textContent = blueScore;
        }
    };
    if (cL === cCT2 && cCT2 === cRT3 ) {
        d3.select("svg").append('circle').attr('r', 30).attr('cx', 901).attr('cy', 35).attr('fill', tR);
        if (cL === "red") {
            redScore += 1;
            document.getElementById("vermelho").textContent = redScore;
        }else{
            blueScore += 1;
            document.getElementById("azul").textContent = blueScore;
        }
    };
    if (dL === dCT2 && dCT2 === dRT3 ) {
        d3.select("svg").append('circle').attr('r', 30).attr('cx', 901).attr('cy', 35).attr('fill', tR);
        if (dL === "red") {
            redScore += 1;
            document.getElementById("vermelho").textContent = redScore;
        }else{
            blueScore += 1;
            document.getElementById("azul").textContent = blueScore;
        }
    };
    //diagonais Verticais
    if (tL === cLT2 && cLT2 === dLT3 ) {
        d3.select("svg").append('circle').attr('r', 30).attr('cx', 901).attr('cy', 35).attr('fill', tL);
        if (tL === "red") {
            redScore += 1;
            document.getElementById("vermelho").textContent = redScore;
        }else{
            blueScore += 1;
            document.getElementById("azul").textContent = blueScore;
        }
    };
    if (tC === cCT2 && cCT2 === dCT3 ) {
        d3.select("svg").append('circle').attr('r', 30).attr('cx', 901).attr('cy', 35).attr('fill', tR);
        if (tC === "red") {
            redScore += 1;
            document.getElementById("vermelho").textContent = redScore;
        }else{
            blueScore += 1;
            document.getElementById("azul").textContent = blueScore;
        }
    };
    if (tR === cRT2 && cRT2 === dRT3 ) {
        d3.select("svg").append('circle').attr('r', 30).attr('cx', 901).attr('cy', 35).attr('fill', tR);
        if (tR === "red") {
            redScore += 1;
            document.getElementById("vermelho").textContent = redScore;
        }else{
            blueScore += 1;
            document.getElementById("azul").textContent = blueScore;
        }
    };
    //diagonais Cruzadas
    if (tL === cCT2 && cCT2 === dRT3 ) {
        d3.select("svg").append('circle').attr('r', 30).attr('cx', 901).attr('cy', 35).attr('fill', tR);
        if (tL === "red") {
            redScore += 1;
            document.getElementById("vermelho").textContent = redScore;
        }else{
            blueScore += 1;
            document.getElementById("azul").textContent = blueScore;
        }
    };
    if (dL === cCT2 && cCT2 === tRT3 ) {
        d3.select("svg").append('circle').attr('r', 30).attr('cx', 901).attr('cy', 35).attr('fill', tR);
        if (tR === "red") {
            redScore += 1;
            document.getElementById("vermelho").textContent = redScore;
        }else{
            blueScore += 1;
            document.getElementById("azul").textContent = blueScore;
        }
    };

    //Alternar jogadores
    if (player === "blue") {
        player = "red";
        selectedColor = "red";
    }else{
        player = "blue";
        selectedColor = "blue"
    };
    seletionSquare.attr("fill", player);
};


//"Tabuleiro-1" (disntâncias dos proximos tabuleiros no eixo X * 3)
//1º linha
var topLeft = d3.select("svg").append('rect').attr('height', 70).attr('width', 70).attr('fill', 'black').attr('x', 0).attr('y', 0);
topLeft.on('click', () => {
    if (tL !== "blue" && tL !== "red") {
        topLeft.attr('fill', selectedColor);
        tL= selectedColor;
        verifGanhador();
    }
});
var topCenter = d3.select("svg").append('rect').attr('height', 70).attr('width', 70).attr('fill', 'black').attr('x', 72).attr('y', 0);
topCenter.on('click', () => {
    if(tC !== "blue" && tC !== "red") {
        topCenter.attr('fill', selectedColor);
        tC = selectedColor;
        verifGanhador(); 
    }
});
var topRight = d3.select("svg").append('rect').attr('height', 70).attr('width', 70).attr('fill', 'black').attr('x', 144).attr('y', 0);
topRight.on('click', () => {
    if(tR !== "blue" && tR !== "red") {
        topRight.attr('fill', selectedColor);
        tR = selectedColor;
        verifGanhador();    
    }
});
//2º linha
var centerLeft = d3.select("svg").append('rect').attr('height', 70).attr('width', 70).attr('fill', 'black').attr('x', 0).attr('y', 72);
centerLeft.on('click', () => {
    if(cL !== "blue" && cL !== "red") {
        centerLeft.attr('fill', selectedColor);
        cL = selectedColor;
        verifGanhador();    
    }
});
var centerCenter = d3.select("svg").append('rect').attr('height', 70).attr('width', 70).attr('fill', 'black').attr('x', 72).attr('y', 72);
centerCenter.on('click', () => {
    if(cC !== "blue" && cC !== "red") {
        centerCenter.attr('fill', selectedColor);
        cC = selectedColor;
        verifGanhador();       
    }
});
var centerRight = d3.select("svg").append('rect').attr('height', 70).attr('width', 70).attr('fill', 'black').attr('x', 144).attr('y', 72);
centerRight.on('click', () => {
    if(cR !== "blue" && cR !== "red") {
        centerRight.attr('fill', selectedColor);
        cR = selectedColor;
        verifGanhador();    
    }
});
//3º linha
var downLeft = d3.select("svg").append('rect').attr('height', 70).attr('width', 70).attr('fill', 'black').attr('x', 0).attr('y', 144);
downLeft.on('click', () => {
    if(dL !== "blue" && dL !== "red") {
        downLeft.attr('fill', selectedColor);
        dL = selectedColor;
        verifGanhador();    
    }
});
var downCenter = d3.select("svg").append('rect').attr('height', 70).attr('width', 70).attr('fill', 'black').attr('x', 72).attr('y', 144);
downCenter.on('click', () => {
    if(dC !== "blue" && dC !== "red") {
        downCenter.attr('fill', selectedColor);
        dC = selectedColor;
        verifGanhador();    
    }
});
var downRight = d3.select("svg").append('rect').attr('height', 70).attr('width', 70).attr('fill', 'black').attr('x', 144).attr('y', 144);
downRight.on('click', () => {
    if(dR !== "blue" && dR !== "red") {
        downRight.attr('fill', selectedColor);
        dR = selectedColor;
        verifGanhador(); 
    }
});


//"TABULEIRO-2" (disntâncias dos proximos tabuleiros no eixo X * 3)
//1º linha T-2
var topLeftT2 = d3.select("svg").append('rect').attr('height', 70).attr('width', 70).attr('fill', 'black').attr('x', 284).attr('y', 0);
topLeftT2.on('click', () => {
    if(tLT2 !== "blue" && tLT2 !== "red") {
        topLeftT2.attr('fill', selectedColor);
        tLT2 = selectedColor;
        verifGanhador();        
    }
});
var topCenterT2 = d3.select("svg").append('rect').attr('height', 70).attr('width', 70).attr('fill', 'black').attr('x', 356).attr('y', 0);
topCenterT2.on('click', () => {
    if(tCT2 !== "blue" && tCT2 !== "red") {
        topCenterT2.attr('fill', selectedColor);
        tCT2 = selectedColor;
        verifGanhador();    
    }
});
var topRightT2 = d3.select("svg").append('rect').attr('height', 70).attr('width', 70).attr('fill', 'black').attr('x', 428).attr('y', 0);
topRightT2.on('click', () => {
    if(tRT2 !== "blue" && tRT2 !== "red") {
        topRightT2.attr('fill', selectedColor);
        tRT2 = selectedColor;
        verifGanhador();        
    }
});
//2º linha T-2
var centerLeftT2 = d3.select("svg").append('rect').attr('height', 70).attr('width', 70).attr('fill', 'black').attr('x', 284).attr('y', 72);
centerLeftT2.on('click', () => {
    if(cLT2 !== "blue" && cLT2 !== "red") {
        centerLeftT2.attr('fill', selectedColor);
        cLT2 = selectedColor;
        verifGanhador();        
    }
});
var centerCenterT2 = d3.select("svg").append('rect').attr('height', 70).attr('width', 70).attr('fill', 'black').attr('x', 356).attr('y', 72);
centerCenterT2.on('click', () => {
    if(cCT2 !== "blue" && cCT2 !== "red") {
        centerCenterT2.attr('fill', selectedColor);
        cCT2 = selectedColor;
        verifGanhador();    
    }  
});
var centerRightT2 = d3.select("svg").append('rect').attr('height', 70).attr('width', 70).attr('fill', 'black').attr('x', 428).attr('y', 72);
centerRightT2.on('click', () => {
    if(cRT2 !== "blue" && cRT2 !== "red") {
        centerRightT2.attr('fill', selectedColor);
        cRT2 = selectedColor;
        verifGanhador();        
    }
});
//3º linha T-2
var downLeftT2 = d3.select("svg").append('rect').attr('height', 70).attr('width', 70).attr('fill', 'black').attr('x', 284).attr('y', 144);
downLeftT2.on('click', () => {
    if(dLT2 !== "blue" && dLT2 !== "red") {
        downLeftT2.attr('fill', selectedColor);
        dLT2 = selectedColor;
        verifGanhador();        
    }
});
var downCenterT2 = d3.select("svg").append('rect').attr('height', 70).attr('width', 70).attr('fill', 'black').attr('x', 356).attr('y', 144);
downCenterT2.on('click', () => {
    if(dCT2 !== "blue" && dCT2 !== "red") {
        downCenterT2.attr('fill', selectedColor);
        dCT2 = selectedColor;
        verifGanhador();        
    }
});
var downRightT2 = d3.select("svg").append('rect').attr('height', 70).attr('width', 70).attr('fill', 'black').attr('x', 428).attr('y', 144);
downRightT2.on('click', () => {
    if(dRT2 !== "blue" && dRT2 !== "red") {
    downRightT2.attr('fill', selectedColor);
    dRT2 = selectedColor;
    verifGanhador();    
    }
});

//"TABULEIRO-3" (disntâncias dos proximos tabuleiros no eixo X * 3)
//1º linha T-3
var topLeftT3 = d3.select("svg").append('rect').attr('height', 70).attr('width', 70).attr('fill', 'black').attr('x', 568).attr('y', 0);
topLeftT3.on('click', () => {
    if(tLT3 !== "blue" && tLT3 !== "red") {
        topLeftT3.attr('fill', selectedColor);
        tLT3 = selectedColor;
        verifGanhador();        
    }
});
var topCenterT3 = d3.select("svg").append('rect').attr('height', 70).attr('width', 70).attr('fill', 'black').attr('x', 640).attr('y', 0);
topCenterT3.on('click', () => {
    if(tCT3 !== "blue" && tCT3 !== "red") {
        topCenterT3.attr('fill', selectedColor);
        tCT3 = selectedColor;
        verifGanhador();        
    }
});
var topRightT3 = d3.select("svg").append('rect').attr('height', 70).attr('width', 70).attr('fill', 'black').attr('x', 712).attr('y', 0);
topRightT3.on('click', () => {
    if(tRT3 !== "blue" && tC !== "red") {
        topRightT3.attr('fill', selectedColor);
        tRT3 = selectedColor;
        verifGanhador();        
    }
});
//2º linha T-3
var centerLeftT3 = d3.select("svg").append('rect').attr('height', 70).attr('width', 70).attr('fill', 'black').attr('x', 568).attr('y', 72);
centerLeftT3.on('click', () => {
    if(cLT3 !== "blue" && cLT3 !== "red") {
        centerLeftT3.attr('fill', selectedColor);
        cLT3 = selectedColor;
        verifGanhador();
    }
});
var centerCenterT3 = d3.select("svg").append('rect').attr('height', 70).attr('width', 70).attr('fill', 'black').attr('x', 640).attr('y', 72);
centerCenterT3.on('click', () => {
    if(cCT3 !== "blue" && cCT3 !== "red") {
        centerCenterT3.attr('fill', selectedColor);
        cCT3 = selectedColor;
        verifGanhador();    
    }    
});
var centerRightT3 = d3.select("svg").append('rect').attr('height', 70).attr('width', 70).attr('fill', 'black').attr('x', 712).attr('y', 72);
centerRightT3.on('click', () => {
    if(cRT3 !== "blue" && cRT3 !== "red") {
        centerRightT3.attr('fill', selectedColor);
        cRT3 = selectedColor;
        verifGanhador();        
    }
});
//3º linha T-3
var downLeftT3 = d3.select("svg").append('rect').attr('height', 70).attr('width', 70).attr('fill', 'black').attr('x', 568).attr('y', 144);
downLeftT3.on('click', () => {
    if(dLT3 !== "blue" && dLT3 !== "red") {
        downLeftT3.attr('fill', selectedColor);
        dLT3 = selectedColor;
        verifGanhador();        
    }
});
var downCenterT3 = d3.select("svg").append('rect').attr('height', 70).attr('width', 70).attr('fill', 'black').attr('x', 640).attr('y', 144);
downCenterT3.on('click', () => {
    if(dCT3 !== "blue" && dCT3 !== "red") { 
        downCenterT3.attr('fill', selectedColor);
        dCT3 = selectedColor;
        verifGanhador();    
    }
});
var downRightT3 = d3.select("svg").append('rect').attr('height', 70).attr('width', 70).attr('fill', 'black').attr('x', 712).attr('y', 144);
downRightT3.on('click', () => {
    if(dRT3 !== "blue" && tRT3 !== "red") {
        downRightT3.attr('fill', selectedColor);
        dRT3 = selectedColor;
        verifGanhador();    
    }   
});

//Display selected color; valor atualizado no final da function verifGanhador();
var seletionSquare = d3.select("svg").append('rect').attr('height', 70).attr('width', 70).attr('fill', 'blue').attr('x', 866).attr('y', 144);

