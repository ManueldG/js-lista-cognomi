/*Esercizio di oggi: Lista Cognomi

nome repo: js-lista-cognomi
Consegna
1. chiedi all’utente il cognome
2. inseriscilo in un array con altri cognomi: ‘bianchi’, ‘neri’, ‘rossi’, ‘verdi’, ‘gialli’
3. stampa la lista ordinata alfabeticamente
4. scrivi anche la posizione "umana", 1 oppure 2 oppure 3 oppure ecc... (non 0 oppure 1 oppure 2 oppure ecc.. tipici degli array), del nuovo utente inserito sopra all'interno dell'array, dopo l'ordinamento alfabetico
Consigli del giorno:
Consultiamo la documentazione W3Schools o MDN per trovare i metodi javascript che possono esserci utili.*/
var nome = '';
var lista = ["rossi", "bianchi","grigi","capone"];

do {
    nome = prompt("cognome").toLowerCase();
}while((nome.lenght < 0) );

lista.push(nome);
console.log(lista);
lista.sort();
console.log(lista);

for (var i=0; i<lista.length; i++)
    document.getElementById("lista").innerHTML += "<li>"+lista[i]+"</li>";
