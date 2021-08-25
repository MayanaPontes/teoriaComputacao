function regex(string) {
    return !!string.match(/^(\+|-){0,1}([0-9]+|([0-9]+\.[0-9]+))$/);
 }
  
 var stringsTeste =  ["-25.467", "1", "-1", "1.", ".2", "+64,2"];
 var resultadosStringsTeste = stringsTeste.map(regex);
 console.log(resultadosStringsTeste);
 

 