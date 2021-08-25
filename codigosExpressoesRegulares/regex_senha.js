function regex(string) {
    return !!string.match(/(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z[0-9]]{8}/);
 }
  
 var stringsTeste =  ["12345678", "1abcDfgh", "abcdEFgh", "abcdE1Fg"];
 var resultadosStringsTeste = stringsTeste.map(regex);
 console.log(resultadosStringsTeste);
