let bombe = [];

for (let i = 1; i <= 16; i++) {
    
    //creo un numero casuale tra 0 e 100
    let cellaBomba = Math.floor(Math.random() * 100 + 1)
    // console.log(cellaBomba);
    //controllo che il numero non si ripeta più volte, se lo fa rinizia il ciclo da capo, altrimenti pusha
    if (bombe.includes(cellaBomba)) {
        bombe = [];
        i = 0;
    } else {
        bombe.push(cellaBomba)
    }
    
}

console.log(bombe);