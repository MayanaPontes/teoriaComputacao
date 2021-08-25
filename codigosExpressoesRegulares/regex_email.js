function regex(string) {
    return !!string.match(/[a-z][a-z]*@[a-z][a-z]*.br/);
 }
  
 var stringsTeste = ["@@gmail.br", "mayanacpontes@gmail.br", "may@teste.br", "MAY@teste.br"];
 var resultadosStringsTeste = stringsTeste.map(regex);
 console.log(resultadosStringsTeste);
