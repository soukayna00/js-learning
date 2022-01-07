//declaration des variables a= position1 b= position2 astring=num1 bsting=num2
//afficher=var de imput
var a ,b ,aString ,bString ,operation ;
// fonction pour clicker sur les numeros
function oncklikNumbre(number){

  if (aString==undefined){aString=number}
  else(bString=number)
  afficher()
}


//fonction pour faire afficher les numeros
function afficher(number) {

  var afficher = document.getElementById("afficher")
  afficher.value = ""

  if ( a != undefined && b != undefined && operation != undefined )
  {afficher.value = number }
  else{
      if(aString != undefined){afficher.value += aString}
      if ( operation != undefined){afficher.value += operation}
      if(bString != undefined){afficher.value += bString}

  }
// affectation operation avec son parametre
function operation(operationParam){
  if(operation==undefined){operation=operationParam}
  afficher()
}
// function egale
// pour maintenir les positions des premier num et deuxieme num
function egale() {

  a= parseFloat(aString)
  b= parseFloat(bString)

   resulta = calcul (a,b,operation )
   afficher (resulta)  
}
function calcul (a,b,operation) {
  resulta = undefined 

  switch (operation ) {
      case "+":
          resulta= a+b
          break;
  
      default:
          break;
  }
  return resulta
}