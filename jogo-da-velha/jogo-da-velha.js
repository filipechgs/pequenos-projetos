//Cor do jogadoratual
var selectedColor = "blue";
var player = "blue";

//Placar
var blueScore = 0;
var redScore = 0;

//Variáveis para verificação do resultado; tL (top left);
var tL = "a";
var tC = "b";
var tR = "c";
var cL = "d";
var cC = "e";
var cR = "f";
var dL = "g";
var dC = "h";
var dR = "i";

var player = "blue";

// Inicia a próxima rodada do jogo
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

    tL = "a";
    tC = "b";
    tR = "c";
    cL = "d";
    cC = "e";
    cR = "f";
    dL = "g";
    dC = "h";
    dR = "i";
};

function verifGanhador() {
    //linhas
    if (tL === tC && tC === tR ) {
        d3.select("svg").append('circle').attr('r', 30).attr('cx', 271).attr('cy', 35).attr('fill', tL);
        if (tL === "red") {
            redScore += 1;
            document.getElementById("vermelho").textContent = redScore;
        }else{
            blueScore += 1;
            document.getElementById("azul").textContent = blueScore;
        }
    };
    if (cL === cC && cC === cR ) {
        d3.select("svg").append('circle').attr('r', 30).attr('cx', 271).attr('cy', 35).attr('fill', cL);
        if (cL === "red") {
            redScore += 1;
            document.getElementById("vermelho").textContent = redScore;
        }else{
            blueScore += 1;
            document.getElementById("azul").textContent = blueScore;
        }
    };
    if (dL === dC && dC === dR ) {
        d3.select("svg").append('circle').attr('r', 30).attr('cx', 271).attr('cy', 35).attr('fill', dL);
        if (dL === "red") {
            redScore += 1;
            document.getElementById("vermelho").textContent = redScore;
        }else{
            blueScore += 1;
            document.getElementById("azul").textContent = blueScore;
        }
    };
    //colunas
    if (tL === cL && cL === dL ) {
        d3.select("svg").append('circle').attr('r', 30).attr('cx', 271).attr('cy', 35).attr('fill', tL);
        if (tL === "red") {
            redScore += 1;
            document.getElementById("vermelho").textContent = redScore;
        }else{
            blueScore += 1;
            document.getElementById("azul").textContent = blueScore;
        }
    };
    if (tC === cC && cC === dC ) {
        d3.select("svg").append('circle').attr('r', 30).attr('cx', 271).attr('cy', 35).attr('fill', tC);
        if (tC === "red") {
            redScore += 1;
            document.getElementById("vermelho").textContent = redScore;
        }else{
            blueScore += 1;
            document.getElementById("azul").textContent = blueScore;
        }
    };
    if (tR === cR && cR === dR ) {
        d3.select("svg").append('circle').attr('r', 30).attr('cx', 271).attr('cy', 35).attr('fill', tR);
        if (tR === "red") {
            redScore += 1;
            document.getElementById("vermelho").textContent = redScore;
        }else{
            blueScore += 1;
            document.getElementById("azul").textContent = blueScore;
        }
    };
    //em X
    if (tL === cC && cC === dR ) {
        d3.select("svg").append('circle').attr('r', 30).attr('cx', 271).attr('cy', 35).attr('fill', tL);
        if (tL === "red") {
            redScore += 1;
            document.getElementById("vermelho").textContent = redScore;
        }else{
            blueScore += 1;
            document.getElementById("azul").textContent = blueScore;
        }
    };
    if (tR === cC && cC === dL ) {
        d3.select("svg").append('circle').attr('r', 30).attr('cx', 271).attr('cy', 35).attr('fill', tR);
        if (tR === "red") {
            redScore += 1;
            document.getElementById("vermelho").textContent = redScore;
        }else{
            blueScore += 1;
            document.getElementById("azul").textContent = blueScore;
        }
    };
    //alternar jogadores
    if (player === "blue") {
        player = "red";
        selectedColor = "red";
    }else{
        player = "blue";
        selectedColor = "blue"
    };
    seletionSquare.attr("fill", player);
};

//"Tabuleiro"
//1ª linha
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


//Display selected color
var seletionSquare = d3.select("svg").append('rect').attr('height', 70).attr('width', 70).attr('fill', 'blue').attr('x', 236).attr('y', 144);
