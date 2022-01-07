var a,b,aString,bString,operation

//function pour clicker sur les numero
function onclickNumbre(number){

  if(aString=undefined){aString=number}
  else
  (bString=number)
  afficher()
}
function afficher()
  var afficher=document.getElementById('afficher')
  afficher.value=''

if(a!=undefined && b!=undefined && operation!=undefined)
{afficher.value=number}

else{
  if(aString!=undefined){afficher.value+=aString}
  if(bString!=undefined){afficher.value+=bString}
  if(operation!=undefined){afficher.value+=operation}
}

//function operation pour affecter les operations
function Operation(operationparam){

  if(operation==undefined){operation=operationparam}

  afficher()
}
//function egale pour que chaque num prend sa place
function egale(){
a=parseFloat(aString)
b=parseFloat(bString)
resultat=calcul(operation,a,b)
afficher(resultat)
}
//function calcul 
function calcul(a,b,operation){
  resultat=undefined
  switch(operation){
    case "+":
     resultat=a+b
     break;

     default:
     break;

  }
  return resultat
}
