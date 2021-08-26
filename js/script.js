// Consegna:
// 1. chiedi all’utente il cognome
// 2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
// 3. stampa la lista ordinata alfabeticamente
// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova

// 1. chiedi all’utente il cognome
var listaCognomi= ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
var cognomeUtente = prompt("Inserisci il tuo cognome: ");
// 2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
listaCognomi.push(cognomeUtente);
// 2.2 si usa la funzione sort per ordinare gli elementi nell'array alfabeticamente
console.log(listaCognomi.sort());
// 3. stampa la lista ordinata alfabeticamente
for(var i=0;i<listaCognomi.length;i++){
    console.log(listaCognomi[i]);
    alert("Il "+(i+1)+"° Cognome è: "+ listaCognomi[i]);
}
// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
for(var i=0;i<listaCognomi.length;i++){
    if(listaCognomi[i]==cognomeUtente){
        alert("Il cognome inserito dall'utente, si trova in posizione: "+(i+1)+"\n ed è : "+cognomeUtente);
    }
}