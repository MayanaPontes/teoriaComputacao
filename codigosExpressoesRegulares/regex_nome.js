function regex(string) {
    return !!string.match(/[A-Z][a-z]* [A-Z][a-z]*/);
 }
  
 var stringsTeste = ["Mayana Pontes", "edivaldo Muniz", "cEciliane Cardoso", "Maria LUiza", "Pietra Pontes"];
 var resultadosStringsTeste = stringsTeste.map(regex);
 console.log(resultadosStringsTeste);
