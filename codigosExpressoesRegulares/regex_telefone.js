function regex(string) {
    return !!string.match(/\([1-9]{2}\) 9[1-9]{4}\-[0-9]{4}|[1-9]{2} 9[1-9]{8}|\([1-9]{2}\) 9[1-9]{8}/);
 }
  
 var stringsTeste =  ["(91) 99999-9999", "91 999999999", "(91) 999999999", 
                      "(91) 59999-9999", "99 99999-9999", "(94)95555-5555"];
                      
 var resultadosStringsTeste = stringsTeste.map(regex);
 console.log(resultadosStringsTeste);
 


