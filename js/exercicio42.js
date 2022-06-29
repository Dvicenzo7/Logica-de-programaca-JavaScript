//N1 + N2 * 2 + N3 * 3 + Média_dos_Exercícios

let nota1,nota2,nota3,mediaexercicio,mediaaproveitamento;

nota1=parseFloat(prompt("Digite sua nota : "))
nota2=parseFloat(prompt("Digite sua nota : "))
nota3=parseFloat(prompt("Digite sua nota : "))
mediaexercicio=parseFloat(prompt("Digite sua média nos exercicio : "))

mediaaproveitamento=(nota1+(nota2*2)+(nota3*3)+mediaexercicio)/7

if(mediaaproveitamento>9.0){
    alert("Sua média foi " +mediaaproveitamento+" = A") 
}else if ((mediaaproveitamento>=7.5)||(mediaaproveitamento<=9.0)){
    alert("Sua média foi " +mediaaproveitamento+" = B")
} else if ((mediaaproveitamento >=6.0) || (mediaaproveitamento < 7.5)) {
    alert("Sua média foi " +mediaaproveitamento+" = C")
}else if (mediaaproveitamento<6.0){
    alert("Sua média foi " +mediaaproveitamento+" = D")
}