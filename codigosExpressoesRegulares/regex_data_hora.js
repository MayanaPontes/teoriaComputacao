function regex(string) {
    return !!string.match(/[0-9]{2}\/[0-9]{2}\/[0-9]{4} [0-9]{2}\:[0-9]{2}\:[0-9]{2}/);
 }
  
 var stringsTeste =  ["99/99/9999 3:9:9", "9/9/99 99:99:99"];
 var resultadosStringsTeste = stringsTeste.map(regex);
 console.log(resultadosStringsTeste);
