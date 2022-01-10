var a,b,aString,bString,operation,afficher
function onclickNumbre(number) {

  if(aString==undefined){aString=number}
  else
  (bString=number)
  afficher()
  }
  
  function afficher(number) {
   var afficher=document.getElementById('afficher')
   afficher.value=''
   if(a!=undefined & operation!=undefined & b!=undefined)
   {afficher.value=number}
   else{
     if(aString!=undefined){afficher.value+=aString}
     if(operation!=undefined){afficher.value+=operation}
     if(bString!=undefined){afficher.value+=bString}
    
   }
  }

  function Operation(operationparam){
if(operation==undefined)
  {operation=operationparam}
  afficher()

  } 
  function egaLe() {
    a=parseFloat(aString)
    b=parseFloat(bString)

    resultat=calcul(a,b,operation)
    afficher(resultat)
      
  }
  function calcul(a,b,operation){
    resultat=undefined
  switch(operation){
    case"+":
    resultat=a+b
    break;

    default:
      break;
  }
  return resultat
  }