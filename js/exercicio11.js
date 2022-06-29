let salariofixo,comissaofixa,vendatotal,carrovendido,salariofinal;
salariofixo=parseFloat(prompt("Digite seu salário :"));
carrovendido=parseInt(prompt("Digite quantos carros foram vendidos "));
comissaofixa=carrovendido*500
alert("O valor da comissão por carro vendido é : "+comissaofixa)
vendatotal=parseFloat(prompt("Informe o valor da venda total da loja :"))
salariofinal=salariofixo+comissaofixa+(vendatotal*5/100)
alert("O salário final com os reajustes e comissão é : "+salariofinal)