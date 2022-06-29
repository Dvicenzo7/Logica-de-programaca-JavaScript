let anonasceu,anoatual,anotrabalho,registo,idade,tempotrabalhado;
anoatual=2022
registo=parseInt(prompt("Digite seu número de registro da empresa"))

if(registo==1234){
    alert("Daniel Vicenzo da Paixão Vale")
}
anonasceu=parseInt(prompt("Usuário Informe o ano do seu nascimento : "))
anotrabalho=parseInt(prompt("Informe o ano que você começou a trabalhar : "))

idade=anoatual - anonasceu
tempotrabalhado = anoatual - anotrabalho
alert("Você possui "+tempotrabalhado+ " anos trabalhado ")

if ((idade>= 60)||(tempotrabalhado>=25)){
    alert("Requer aposentadoria")
}else{
    alert("Não Requer")
}