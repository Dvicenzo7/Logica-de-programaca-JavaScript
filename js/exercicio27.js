let quantidadeatual,quantidademedia,quantidademaxima,quantidademinima ;

quantidadeatual=parseFloat(prompt("Digite a quantidade atual : "));
quantidademaxima=parseFloat(prompt("Digite a quantidade máxima de estoque : "));
quantidademinima=parseFloat(prompt("Digite a quantidade minima de estoque : "));

quantidademedia = (quantidademaxima+quantidademinima)/2 ;

if (quantidademedia <= quantidadeatual){
  alert("Quantidade média = " + quantidademedia + " Não efetuar compra!");

}else if (quantidademedia >= quantidadeatual){

 alert("Quantidade média = " + quantidademedia + "  Efetuar compra!");
}