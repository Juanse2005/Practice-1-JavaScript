//Variables
let roberto = prompt(`Cuanto dinero tiene roberto?`);
let pedro = prompt("Cuanto dinero tiene pedro?");
let cofla = prompt("Cuanto dinero tiene cofla?");

//Funcion para volver enteros
roberto = parseInt (roberto)
pedro = parseInt (pedro)
cofla = parseInt (cofla)
//Variables (Precios de los helados)
let heladoAgua = 6
let palitoCrema = 10
let bombonHeladix = 16
let bombonHeladovich = 18
let bombonHelardo = 20
let poteConfites = 28
let poteMedio = 30

//Operacion saldo
saldo = (roberto + pedro + cofla);
alert (`Su saldo es ${saldo}`)

//Condicionales
if (saldo >= heladoAgua && saldo < palitoCrema ){
    alert ("Te alcanza para un helado de agua")
    alert ("Les sobran " + (saldo - heladoAgua));
}
else if (saldo >= palitoCrema && saldo < bombonHeladix ){
    alert ("Te alcanza para un palito de crema")
    alert ("Les sobran " + (saldo - palitoCrema));
}
else if (saldo >= bombonHeladix && saldo < bombonHeladovich ){
    alert ("Te alcanza para un helado de heladix")
    alert ("Les sobran " + (saldo - bombonHeladix));
}
else if (saldo >= bombonHeladovich && saldo < bombonHelardo ){
    alert ("Te alcanza para un helado de heladovich")
    alert ("Les sobran " + (saldo - bombonHeladovich));
}
else if (saldo >= palitoCrema && saldo < bombonHeladix ){
    alert ("Te alcanza para un palito de crema")
    alert ("Les sobran " + (saldo - palitoCrema));
}
else if (saldo >= bombonHelardo && saldo < poteConfites ){
    alert ("Te alcanza para un bombom helardo")
    alert ("Les sobran " + (saldo - bombonHelardo));
}
else if (saldo >= poteConfites && saldo < poteMedio ){
    alert ("Te alcanza para un helado poteconfites")
    alert ("Les sobran " + (saldo - poteConfites));
}
else if (saldo >= poteMedio){
    alert ("Te alcanza para un potemedio")
    alert ("Les sobran " + (saldo - poteMedio));
}
else {
    alert ("No te alcanza pa na")
}

