let fatorial = 1;

let contadora = 0;

let acumuladora = 0;

do {

    let numero = parseInt(prompt("Digite um número"));

     do {

        fatorial = fatorial * numero;

        numero--;

    } while (numero > 0);


     alert(fatorial);

    acumuladora = fatorial + acumuladora;

    alert(acumuladora);

    contadora++;

} while (contadora<5);