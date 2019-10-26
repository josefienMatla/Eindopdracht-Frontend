/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

var knop = document.getElementsByClassName('like')[0];
var image = 0;

//hier geef ik met image === 0 aan dat hij alleen de eerste moet gebruiken als ik wat anders zou invullen pak hij alle elementen te gelijk.//



// ik geef hiermee aan dat als je op de afbeelding in else klikt je if krijgt te zien, en andersom precies het zelfde//
function favoriet() {

    if (image === 0) {
        knop.src = 'Afbeeldingen/like%20rood.svg';
        image = 1;
    } else {
        knop.src = 'Afbeeldingen/heart.svg';
        image = 0;
    }
}


knop.addEventListener('click', favoriet);
