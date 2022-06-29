let salario,porcentagem,reajuste;
salario=parseFloat(prompt("Digite seu salário"));
porcentagem=parseInt(prompt("digite quantos porcento para ser reajustado no salário "));
reajuste=(salario*porcentagem/100)
salario=reajuste+salario
alert("O salário com reajuste é : "+salario);