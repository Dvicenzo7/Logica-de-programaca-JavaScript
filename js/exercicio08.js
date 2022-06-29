let eleitores,votobranco,votonulo,votovalido,votovalido2,votonulo2,votobranco2;
eleitores=parseInt(prompt("Informe o número de eleitores"));
votovalidos=parseInt(prompt("Informe o tanto de voto válidos "));
votonulo=parseInt(prompt("Informe o tanto de voto nulo "));
votobranco=parseInt(prompt("Informe o tanto de voto branco "));

votovalido2= ( votovalido*100)/eleitores
votobranco2= (votobranco*100)/eleitores
votonulo2= (votonulo*100)/eleitores

alert("A porcentagem de voto valido é  :" +votovalido2+"%");
alert("A porcentagem de voto branco é :" +votobranco2+"%");
alert("A porcentagem de voto nulo é :" +votonulo2+"%");

