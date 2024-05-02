const container = document.getElementById('container-game');
const btnStart = document.querySelector('#startGame');
const widthContainer = document.querySelector('#container-game');
let bombe = [];
let cellaBomba;

btnStart.addEventListener('click', function () {

    let modeEasy = document.querySelector('#easy').checked;
    let modeMedium = document.querySelector('#medium').checked;
    let modeHard = document.querySelector('#hard').checked;
    console.log(modeEasy, modeMedium, modeHard);

    widthContainer.innerHTML = '';
    
    if (modeEasy == true) {
        widthContainer.classList.remove('my-width-medium');
        widthContainer.classList.remove('my-width-hard');
        widthContainer.classList.add('my-width-easy');
        for (let i = 1; i <= 16; i++) {
            //creo un numero casuale tra 0 e 100
            cellaBomba = Math.floor(Math.random() * 100 + 1)
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
        creazioneGriglia(100);
        

    } else if (modeMedium == true) {
        widthContainer.classList.remove('my-width-hard');
        widthContainer.classList.remove('my-width-easy');
        widthContainer.classList.add('my-width-medium');
        for (let i = 1; i <= 16; i++) {
            //creo un numero casuale tra 0 e 100
            cellaBomba = Math.floor(Math.random() * 81 + 1)
            // console.log(cellaBomba);
            //controllo che il numero non si ripeta più volte, se lo fa rinizia il ciclo da capo, altrimenti pusha
            if (bombe.includes(cellaBomba)) {
                bombe = [];
                i = 0;
            } else {
                bombe.push(cellaBomba)
            }
            
        }
        creazioneGriglia(81);
        console.log(bombe);

    } else if (modeHard == true) {
        widthContainer.classList.remove('my-width-easy');
        widthContainer.classList.remove('my-width-medium');
        widthContainer.classList.add('my-width-hard');
        for (let i = 1; i <= 16; i++) {
            //creo un numero casuale tra 0 e 100
            cellaBomba = Math.floor(Math.random() * 49 + 1)
            // console.log(cellaBomba);
            //controllo che il numero non si ripeta più volte, se lo fa rinizia il ciclo da capo, altrimenti pusha
            if (bombe.includes(cellaBomba)) {
                bombe = [];
                i = 0;
            } else {
                bombe.push(cellaBomba)
            }
            
        }
        creazioneGriglia(49);
        console.log(bombe);

    } else {
        alert('seleziona una difficoltà!');
    }
})






/****************************************************************
                    FUNZIONI
****************************************************************/

//funzione creazione quadrato
function createSquare(classCss) {
    let quadrato = document.createElement('div');
    quadrato.classList.add(classCss);
    return quadrato
}


//funzione per la creazione della tabella in griglia variabile
 function creazioneGriglia(nSquare) {
     for (let i = 1; i <= nSquare; i++) {
         let square = createSquare('my-square');
         square.addEventListener('click', function () {
             clickSquare(square, 'bg-primary', 'bg-warning', i, bombe)
         })
         container.append(square)
     }
 }
 
 //funzione per l'interazione con il click su un ogg per cambiare la classe e la comparsa del textSquare
 function clickSquare(ogg, classe, classe2, textSquare, arrayBombe) {
    if (ogg.classList.contains(classe) == false && arrayBombe.includes(textSquare) == false) {
        ogg.classList.add(classe);
        return ogg.innerHTML = textSquare;
    } else if (ogg.classList.contains(classe) == false && arrayBombe.includes(textSquare) == true) {
        ogg.classList.add(classe2);
        return ogg.innerHTML = 'bomba';
    } else {
        ogg.classList.remove(classe);
        return ogg.innerHTML = '';
    }
}
/*
//funzione per creazione numeri da 1 a 16 senza ripetizioni     NON FUNZIONA
  function randomNumber(arrayBombe, caselle) {
      for (let i = 1; i <= 16; i++) {
          //creo un numero casuale tra 0 e 100
          cellaBomba = Math.floor(Math.random() * caselle + 1)
          // console.log(cellaBomba);
          //controllo che il numero non si ripeta più volte, se lo fa rinizia il ciclo da capo, altrimenti pusha
          if (arrayBombe.includes(cellaBomba)) {
              arrayBombe = [];
              i = 0;
          } else {
              arrayBombe.push(cellaBomba)
          }
      }
  }
*/

