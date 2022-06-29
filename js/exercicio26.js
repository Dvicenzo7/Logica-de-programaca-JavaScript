//Faça um algoritmo para ler: número da conta do cliente, saldo, débito e crédito. Após, calcular e
//escrever o saldo atual (saldo atual = saldo - débito + crédito). Também testar se saldo atual for maior
//ou igual a zero escrever a mensagem 'Saldo Positivo', senão escrever a mensagem 'Saldo Negativo'.

let debito , saldo , credito ,conta ; 

conta=parseInt(prompt("Informe o número da conta: ")); 

alert("Bem vindo Daniel vicenzo ")
  
saldo=parseFloat(prompt("Informe o saldo: "));   
   
debito=parseFloat(prompt("Informe o seu débito : "));   
credito=parseFloat(prompt("Digite seu crédito : "))
   
   saldo = (saldo - debito) + credito
   
   if (saldo >= 0) {     
        alert ("Saldo positivo :" + saldo)   
   }else {  
        alert ("Saldo negativo : " + saldo)   
   }