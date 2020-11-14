let barraPX1 = "0px";
let barraPorcent1 = 0;
window.addEventListener('load', carregar1);
window.addEventListener('load', carregar2);
function carregar1(){
    document.getElementById('carregamento1').style.width = barraPX1;
    document.getElementById('carregamento2').style.width = barraPX1;
    document.getElementById('carregamento3').style.width = barraPX1;
    document.getElementById('carregamento4').style.width = barraPX1;
    document.getElementById('carregamento5').style.width = barraPX1;
    document.getElementById('carregamento6').style.width = barraPX1;
    document.getElementById('carregamento7').style.width = barraPX1;
    document.getElementById('carregamento8').style.width = barraPX1;
    document.getElementById('carregamento9').style.width = barraPX1;
    document.getElementById('carregamento1').innerHTML = `${barraPorcent1}%`;
    document.getElementById('carregamento2').innerHTML = `${barraPorcent1}%`;
    document.getElementById('carregamento3').innerHTML = `${barraPorcent1}%`;
    document.getElementById('carregamento4').innerHTML = `${barraPorcent1}%`;
    document.getElementById('carregamento5').innerHTML = `${barraPorcent1}%`;
    document.getElementById('carregamento6').innerHTML = `${barraPorcent1}%`;
    document.getElementById('carregamento7').innerHTML = `${barraPorcent1}%`;
    document.getElementById('carregamento8').innerHTML = `${barraPorcent1}%`;
    document.getElementById('carregamento9').innerHTML = `${barraPorcent1}%`;
    setTimeout(carregar1, 1500);
    if(barraPorcent1 == 0){
        barraPX1 = "10%";
        barraPorcent1 = 10;
    }
    else if(barraPorcent1 == 10){
        barraPX1 = "20%";
        barraPorcent1 = 20;
    }
    else if(barraPorcent1 == 20){
        barraPX1 = "30%";
        barraPorcent1 = 30;
    }
    else if(barraPorcent1 == 30){
        barraPX1 = "40%";
        barraPorcent1 = 40;
    }
    else if(barraPorcent1 == 40){
        barraPX1 = "50%";
        barraPorcent1 = 50;
    }
    else if(barraPorcent1 == 50){
        barraPX1 = "60%";
        barraPorcent1 = 60;
    }
    else if(barraPorcent1 == 60){
        barraPX1 = "70%";
        barraPorcent1 = 70;
    }
    else if(barraPorcent1 == 70){
        barraPX1 = "80%";
        barraPorcent1 = 80;
    }
    else if(barraPorcent1 == 80){
        barraPX1 = "90%";
        barraPorcent1 = 90;
    }
    else if(barraPorcent1 == 90){
        barraPX1 = "100%";
        barraPorcent1 = 100;
    }
    else{
        barraPX1 = "0%";
        barraPorcent1 = 0;
    }
}
let barraPX2 = "0px";
let barraPorcent2 = 0;
function carregar2(){
    document.getElementById('carregamentoMultiplo1').style.width = barraPX2;
    document.getElementById('carregamentoMultiplo2').style.width = barraPX2;
    document.getElementById('carregamentoMultiplo3').style.width = barraPX2;
    document.getElementById('carregamentoMultiplo4').style.width = barraPX2;
    document.getElementById('carregamentoMultiplo5').style.width = barraPX2;
    document.getElementById('carregamentoMultiplo6').style.width = barraPX2;
    document.getElementById('carregamentoMultiplo7').style.width = barraPX2;
    document.getElementById('carregamentoMultiplo8').style.width = barraPX2;
    document.getElementById('carregamentoMultiplo1').innerHTML = `${barraPorcent2}%`;
    document.getElementById('carregamentoMultiplo2').innerHTML = `${barraPorcent2}%`;
    document.getElementById('carregamentoMultiplo3').innerHTML = `${barraPorcent2}%`;
    document.getElementById('carregamentoMultiplo4').innerHTML = `${barraPorcent2}%`;
    document.getElementById('carregamentoMultiplo5').innerHTML = `${barraPorcent2}%`;
    document.getElementById('carregamentoMultiplo6').innerHTML = `${barraPorcent2}%`;
    document.getElementById('carregamentoMultiplo7').innerHTML = `${barraPorcent2}%`;
    document.getElementById('carregamentoMultiplo8').innerHTML = `${barraPorcent2}%`;
    setTimeout(carregar2, 2750);
    if(barraPorcent2 == 0){
        barraPX2 = "10%";
        barraPorcent2 = 10;
    }
    else if(barraPorcent2 == 10){
        barraPX2 = "20%";
        barraPorcent2 = 20;
    }
    else if(barraPorcent2 == 20){
        barraPX2 = "30%";
        barraPorcent2 = 30;
    }
    else if(barraPorcent2 == 30){
        barraPX2 = "40%";
        barraPorcent2 = 40;
    }
    else if(barraPorcent2 == 40){
        barraPX2 = "50%";
        barraPorcent2 = 50;
    }
    else{
        barraPX2 = "0%";
        barraPorcent2 = 0;
    }
}