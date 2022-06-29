let combustivel,gasolina,alcool,valorpagar1,valorpagar2,precog,precoa;
combustivel=prompt("Digite G para Gasolina e A para álcool :");
valorpagar1=parseFloat
valorpagar2=parseFloat




if(combustivel=="G"){
  gasolina=parseFloat(prompt("Quantos litros você quer colocar : "));
}if (gasolina>20){
    valorpagar1= 3.30* gasolina*6/100
    valorpagar1= (3.30*gasolina)-valorpagar1
    alert("O valor com desconto é :" + valorpagar1);
}else  {
    valorpagar1 = 3.30 * gasolina*4/100
    valorpagar1= (3.30*gasolina)-valorpagar1
    alert("O valor com desconto é :" + valorpagar1);
}

if(combustivel=="A"){
    alcool=parseFloat(prompt("Quantos litros você quer colocar : "));
  } if (alcool < 20){
      valorpagar2 = 2.90 * alcool*3/100
      valorpagar2 = 2.90 * alcool - valorpagar2
      alert("O valor com desconto é :" + valorpagar2);
  }else {
      valorpagar2 = 2.90 * alcool*5/100
      valorpagar2 = 2.90 * alcool - valorpagar2
      alert("O valor com desconto é :" + valorpagar2);
  }