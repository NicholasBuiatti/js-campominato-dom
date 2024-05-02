// let bombe = [];

// for (let k = 1; k <= 16; k++) {

//     //creo un numero casuale tra 0 e 100
//     let cellaBomba = Math.floor(Math.random() * 100 + 1)
//     // console.log(cellaBomba);
//     //controllo che il numero non si ripeta più volte, se lo fa rinizia il ciclo da capo, altrimenti pusha
//     if (bombe.includes(cellaBomba)) {
//         bombe = [];
//         k = 0;
//     } else {
//         bombe.push(cellaBomba)
//     }

// }

// console.log(bombe);

// i = 1
// let cellaBomba = Math.floor(Math.random() * 100 + 1)
// while (!bombe.includes(cellaBomba) && i <=16) {
//     bombe.push(cellaBomba)
//     i++;
// }