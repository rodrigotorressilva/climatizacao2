// JavaScript Document

function historico(){
	
    //document.getElementById("temperatura").innerHTML="<div class='imgtemperatura'></div>";
	//document.getElementById("umidade").innerHTML="<div class='imgumidade'></div>";
    	
	document.getElementById("botao").innerHTML="<a href=\"http://localhost:80/arduino2/\" target=\"_blank\" class='imgbotao'>Historico</a>";
}

/*function AlteraRele1(){
    var estado = document.getElementById("estado").innerHTML;
    if(estado === "0"){
        document.getElementById("estado").innerHTML="1";
        document.getElementById("rele").innerHTML="<div class='rele1_ligado'></div>";
		document.getElementById("botao").innerHTML="<a href='/?desligar' class='botao'>Desliga</a>";
    } else {
        document.getElementById("estado").innerHTML="0";
        document.getElementById("rele").innerHTML="<div class='rele1_desligado'></div>";
        document.getElementById("botao").innerHTML="<a href='/?ligar' class='botao'>Histórico</a>";
    }
}

function AlteraRele2(){
    var estado_2 = document.getElementById("estado_2").innerHTML;
    if(estado_2 === "0"){
        document.getElementById("estado_2").innerHTML="1";
        document.getElementById("rele_2").innerHTML="<div class='rele2_ligado'></div>";
		document.getElementById("botao_2").innerHTML="<a href='/?2_desligar' class='botao_2'>Desliga</a>";
    } else {
        document.getElementById("estado_2").innerHTML="0";
        document.getElementById("rele_2").innerHTML="<div class='rele2_desligado'></div>";
        document.getElementById("botao_2").innerHTML="<a href='/?2_ligar' class='botao_2'>Liga</a>";
    }
}*/