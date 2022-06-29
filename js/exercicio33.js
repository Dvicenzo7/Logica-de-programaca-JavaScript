//Ler o nome de 2 times e o número de gols marcados na partida (para cada time). Escrever o nome
//do vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE

let timeA, timeB ,nometime,nometime2;

nometime=prompt("Escolha um nome de time : ")
nometime2=prompt("Escolha um nome de time : ")

timeA=parseFloat(prompt("Quantos gols o " +nometime + "fez : "))
timeB=parseFloat(prompt("Quantos gols o " + nometime2 + "fez : "))

if (timeA>timeB){
    alert("Time vencedor foi : " + nometime)
}else if (timeA == timeB ){
    alert(" A partida terminou empatada ")
}else {
    alert ("Time vencedor foi : " + nometime2)
}