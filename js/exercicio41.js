let produto , quantidade , pagar,pagar1,precoproduto ;
pagar=parseFloat
pagar1=parseFloat
produto = ("chocolate")
precoproduto=8
quantidade=parseInt(prompt("Quantos "+ produto + " você comprou ?"))

if (quantidade <= 5){
   pagar = (quantidade*precoproduto)*0.02
   pagar1 = (quantidade*precoproduto)-pagar
   alert("o valor a ser pago é : " + pagar1)
}else if ((quantidade>5)||  (quantidade<=10)  ){
    pagar = (quantidade*precoproduto)*0.03
   pagar1 = (quantidade*precoproduto)-pagar
   alert("o valor a ser pago é : " + pagar1)
}else if  (quantidade>10){
    pagar = (quantidade*precoproduto)*0.05
   pagar1 = (quantidade*precoproduto)-pagar
   alert("o valor a ser pago é : " + pagar1)
}
