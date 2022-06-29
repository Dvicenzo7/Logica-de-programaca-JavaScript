let numero,soma,total;
let media ;
media=parseFloat;
numero=1;
soma=0;
total=0;
media=0;

alert("Informe um número");

 while (numero>=0) {
     numero=prompt("Informe um número");
     if(numero>0){
         soma=soma+numero;
         total++;
     }
 }
 media=soma/total;
 alert ("resultado soma : " + soma);
 alert ("Resultado média :" + media);

