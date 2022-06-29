let qtdmorango, qtdmacas, valortotalmorango, valortotalmacas,qtdtotalcompra, valortotalcompra;

qtdmorango=parseInt(prompt("Digite a quantidade em KG de morangos comprados"));
qtdmacas=parseInt(prompt("Digite a quantidade em KG de maças comprados"));

if (qtdmorango <6) {
   valortotalmorango=qtdmorango*2.5
}else{
   valortotalmorango=qtdmorango*2.2
}
if (qtdmacas <6) {
   valortotalmacas=qtdmacas*1.8
}else{
   valortotalmacas=qtdmacas*1.5
}
valortotalcompra=valortotalmorango+valortotalmacas
qtdtotalcompra=qtdmorango+qtdmacas
if  ((valortotalcompra>25) || (qtdtotalcompra>8)) {
   valortotalcompra=valortotalcompra*0.9
   alert("O valor total da compra "+ valortotalcompra +" reais")
} else {
   alert("O valor total da compra "+valortotalcompra+" reais")
}