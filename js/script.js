// Consegna:
// 1. chiedi all’utente il cognome
// 2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
// 3. stampa la lista ordinata alfabeticamente
// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova

// 1. chiedi all’utente il cognome
var listaCognomi= ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
var cognomeUtente = prompt("Inserisci il tuo cognome: ").toLowerCase();
cognomeUtente = cognomeUtente.charAt(0).toUpperCase()+cognomeUtente.slice(1);
console.log(cognomeUtente);
// 2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
listaCognomi.push(cognomeUtente);
document.getElementById("unordered_Array").innerHTML = listaCognomi.join(",  ");
console.log(listaCognomi);
// 2.2 si usa la funzione sort per ordinare gli elementi nell'array alfabeticamente
listaCognomi.sort();
console.log(listaCognomi.sort());
document.getElementById("ordered_Array").innerHTML = listaCognomi.join(",  ");
// 3. stampa la lista ordinata alfabeticamente
for(var i=0;i<listaCognomi.length;i++){
    console.log(listaCognomi[i]);
    alert("Il "+(i+1)+"° Cognome è: "+ listaCognomi[i]);
}
// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
// for(var i=0;i<listaCognomi.length;i++){
//     if(listaCognomi[i]==cognomeUtente){
//         alert("Il cognome inserito dall'utente, si trova in posizione: "+(i+1)+"\n ed è : "+cognomeUtente);
//     }
// }

// 5. Soluzione al punto 4 senza ciclo
alert("Il cognome inserito dall'utente, si trova in posizione: "+(listaCognomi.indexOf(cognomeUtente)+1)+"\n ed è : "+cognomeUtente);
console.log("Posizione: "+(listaCognomi.indexOf(cognomeUtente)+1)+" \nCognome: "+cognomeUtente);
document.getElementById("user_surname").innerHTML = ("Posizione del cognome utente: "+(listaCognomi.indexOf(cognomeUtente)+1)+" cognome: "+cognomeUtente);

