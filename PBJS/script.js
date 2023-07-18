//Variable//
canasta = "papel";
//Alerta//
alert (canasta);
//Let (Scope = Bloque), Var (Variable global o local), Const (Constante = Valor unico) //
let numero = 1;
let numero2 = 4;
let numero3 = 7;
alert (numero);
alert (numero2);
alert (numero3);
//Prompt = Funcion que almacena valor//
let nombre = prompt ("Write your name");
alert ("Hola "+ nombre)
alert (`Eres de verdad tu? ${nombre}`)
//Condicionales//
//If, Else If. Else//
if (nombre == 'juanse'){
    alert ("Eso es cierto")
}
else {
    alert (`Tu nombre no es juanse, es "${nombre}"`)
}