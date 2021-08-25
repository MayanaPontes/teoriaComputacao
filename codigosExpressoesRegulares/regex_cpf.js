function regex(string) {
    return !!string.match(/[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}/);
 }
  
 var stringsTeste =  ["ab1.456.368-09", "0000.00.000-00", "897.347.368-09", "985.135.678-00"];
 var resultadosStringsTeste = stringsTeste.map(regex);
 console.log(resultadosStringsTeste);
