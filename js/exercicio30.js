//Ler 3 valores (considere que não serão informados valores iguais) e escrever a soma dos 2
//maiores. 

let valor1,valor2,valor3;

valor1=parseInt(prompt("digite um número "));
valor2=parseInt(prompt("digite um número "));
valor3=parseInt(prompt("digite um número "));

if (valor1 > valor3 && (valor2 > valor3)) {
    alert(valor1 + valor2);
}else if (valor2 > valor1 && (valor3 > valor1)) {
    alert(valor2 + valor3);
} else {   
    alert(valor1 + valor3);
}
