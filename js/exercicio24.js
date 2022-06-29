let sexo, altura, peso, pesoideal ;
sexo=prompt("m para masculino e f para feminino :");
altura=parseFloat(prompt("Informe sua Altura : "));
peso=parseFloat(prompt("Informe seu peso atual : "));

if (sexo=="m"){
    pesoideal= ( 72.7 * altura) - 58 ;
    alert("Seu peso ideal :" + pesoideal);
}else if (sexo=="f"){
    pesoideal=  (62.1 * altura) - 44.7 ; 
      alert ("O peso ideal para sua estrutura é " + pesoideal) ;
}


