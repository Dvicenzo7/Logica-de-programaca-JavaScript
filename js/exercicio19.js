let anonascimento ,anoatual,idade;
anonascimento=parseInt(prompt("Digite o ano que você nasceu :"))
anoatual=parseInt
anoatual=2022
idade=anoatual-anonascimento

if(idade < 18){
    alert("Você não pode votar : " + idade);
} else if (idade >= 18){
    alert("Você pode votar : " + idade);
}