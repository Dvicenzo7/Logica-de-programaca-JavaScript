let nota1,nota2,mediafinal;
nota1=parseFloat(prompt("Digite a primeira nota :"))
nota2=parseFloat(prompt("Digite a primeira nota :"))
mediafinal= (nota1+nota2)/2
if (mediafinal >6){
    alert("APROVADO :" + mediafinal)
} else if (mediafinal < 6){
    alert("REPROVADO :" + mediafinal)
}