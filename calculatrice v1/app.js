var a,b,aString,bString,operation,afficher
//function pour clicker sur les numero
function onclickNumbre(number){

  if(aString=undefined){aString=number}
  else
  (bString=number)
  afficher()
}
function afficher()
let afficher=document.getElementById('afficher')
if(a!=undefined && b!=undefined && operation!=undefined)
{afficher.value=''}
else{
  if(aString!=undefined){aString+=afficher.value}
  if(bString!=undefined){bString +=afficher.value}
  if(operation!=undefined){operation+=afficher.value}
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
}
