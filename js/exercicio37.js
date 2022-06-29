/*Escreva um algoritmo que leia as idades de 2 homens e de 2 mulheres (considere que as idades
    dos homens serão sempre diferentes entre si, bem como as das mulheres). Calcule e escreva a soma
    das idades do homem mais velho com a mulher mais nova, e o produto das idades do homem mais
    novo com a mulher mais velha.*/
let  homem1,homem2,mulher1,mulher2,soma,soma2;
homem1=parseInt(prompt("informe a idade do primeiro homem : "));
homem2=parseInt(prompt("informe a idade do segundo homem : "));
mulher1=parseInt(prompt("informe a idade  da primeira mulher : "));
mulher2=parseInt(prompt("informe a idade da segunda mulher  : "));
soma=0
if (homem1>homem2 &&(mulher1>mulher2)){
 soma = homem1+mulher2
 soma2 = homem2+mulher1
alert  ("A soma da idade do homem mais velho com a mulher mais nova é :" + soma);
alert  ("A soma da idade do homem mais novo com a mulher mais velha é :" + soma2);

}else if (homem2 > homem1 && (mulher1>mulher2)){
    soma=homem2+mulher2
    soma2=homem1+mulher1
        alert ("A soma da idade do homem mais velho com a mulher mais nova é :" + soma);
        alert  ("A soma da idade do homem mais novo com a mulher mais velha é :" + soma2);
    }
    else if (homem1 > homem2 && (mulher2>mulher1)){
        soma=homem1+mulher1
        soma=homem2+mulher2
            alert ("A soma da idade do homem mais velho com a mulher mais nova é :" + soma);
            alert  ("A soma da idade do homem mais novo com a mulher mais velha é :" + soma2);
        }else{ 
soma=homem2+mulher1
soma2=homem1+mulher2
    alert ("A soma da idade do homem mais velho  com a mulher mais nova é :" + soma);
    alert  ("A soma da idade do homem mais novo com a mulher mais velha é :" + soma2);
        }