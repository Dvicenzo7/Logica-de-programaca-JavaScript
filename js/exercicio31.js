//Ler 3 valores (considere que não serão informados valores iguais) e escrevê-los em ordem
//crescente. 

let A,B,C;

A=parseInt(prompt("Digite um número : "));
B=parseInt(prompt("Digite um número : "));
C=parseInt(prompt("Digite um número : "));


    if (A < B && (B < C )&&  (C > A )&&  (C > B)) {

       alert(A +" , " + B +  " e " +  C)

    }else if (C < A && (C < B) && (A > C )&& (B > C)) {
        alert (C + " , " + A + " e " + B)
    }else {
        alert (B + " , " + C + " e " + A )
    }
        
    
