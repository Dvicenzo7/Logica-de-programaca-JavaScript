let vendas,reajuste,salario,salarionovo;

salario=parseFloat(prompt("Digite O sálario :"))
vendas=parseFloat(prompt("Digite o valor da venda da loja : "))

if(vendas<1600){
    reajuste = (vendas * 3/100) ;
    salarionovo = salario+reajuste;
    alert("O salário com reajuste é : " +salarionovo)
} else if(vendas>1500) {
    reajuste = (vendas * 5/100) ;
    salarionovo = salario+reajuste;
    alert("O salário com reajuste é : " +salarionovo)
}
