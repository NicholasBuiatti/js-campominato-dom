const container = document.getElementById('container-game');
const btnStart = document.querySelector('#startGame');
const widthContainer = document.querySelector('#container-game');

btnStart.addEventListener('click', function () {

    let modeEasy = document.querySelector('#easy').checked;
    let modeMedium = document.querySelector('#medium').checked;
    let modeHard = document.querySelector('#hard').checked;
    console.log(modeEasy, modeMedium, modeHard);

    widthContainer.innerHTML = '';
    
    if (modeEasy == true) {
        widthContainer.classList.add('my-width-easy');

        creazioneGriglia(100);
        
    } else if (modeMedium == true) {
        widthContainer.classList.remove('my-width-easy');
        widthContainer.classList.add('my-width-medium');

        creazioneGriglia(81);
        
    } else if (modeHard == true) {
        widthContainer.classList.remove('my-width-medium');
        widthContainer.classList.add('my-width-hard');

        creazioneGriglia(49);
        
    } else {
        alert('seleziona una difficoltà!');
    }
})







/****************************************************************
                    FUNZIONI
****************************************************************/

//funzione creazione quadrato
function createSquare(tag, classCss) {
    let quadrato = document.createElement(tag);
    quadrato.classList.add(classCss);
    return quadrato
}

//funzione per l'interazione con il click su un ogg per cambiare la classe e la comparsa del textSquare
function clickSquare(ogg, classe, textSquare) {
    if (ogg.classList.contains(classe) == false) {
        ogg.classList.add(classe);
        return ogg.innerHTML = textSquare;
    } else {
        ogg.classList.remove(classe);
        return ogg.innerHTML = '';
    }
}

//funzione per la creazione della tabella in griglia variabile
function creazioneGriglia(nSquare) {
    for (let i = 1; i <= nSquare; i++) {
        let square = createSquare('div', 'my-square');
        square.addEventListener('click', function () {
            clickSquare(square, 'bg-primary', i);
        })
        container.append(square)
    }
}





