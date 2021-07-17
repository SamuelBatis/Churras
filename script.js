let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    console.log("calculando...");

    let adultos = inputAdultos.value
    let criancas = inputCriancas.value
    let duracao = inputDuracao.value
    
    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao)/2 * criancas);
    let qtdTotalCerveja = cervejaPP(duracao) * adultos;
    let qtdTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao)/2 * criancas);

    resultado.innerHTML = `<img src="https://img.icons8.com/ios-glyphs/30/000000/steak.png"/>`
    resultado.innerHTML += `<p id="carne">${qtdTotalCarne / 1000} Kg de Carne</p><br>`
    resultado.innerHTML += `<img src="https://img.icons8.com/material-rounded/24/000000/beer.png"/>`
    resultado.innerHTML += `<p id="cerveja">${Math.ceil(qtdTotalCerveja / 355)} Latas de Cerveja</p><br>`
    resultado.innerHTML += `<img src="https://img.icons8.com/ios-filled/50/000000/bottle-of-water.png"/>`
    resultado.innerHTML += `<p id="bebidas">${Math.ceil(qtdTotalBebidas/2000)} Pet's 2l de Bebida</p>`

}


function carnePP(duracao){
    if(duracao >= 6){
        return 650;
    }else{
        return 450;
    }
}

function cervejaPP(duracao){
    if(duracao >= 6){
        return 2000;
    }else{
        return 1200;
    }
}

function bebidasPP(duracao){
    if(duracao >= 6){
        return 1500;
    }else{
        return 1200;
    }
}