/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/


//je selecteert een element en dan kijkt die of je deze class heeft zo ja dan haalt die hem weg zo nee dan voegt die  hem toe//
function login() {
    document.querySelector(".inloggen").classList.toggle("active");


    var element = document.querySelector(".zoeken");
    element.classList.remove("active")
}

document.querySelector('#profiel').addEventListener('click', login);

console.log("Inlogveld active");

//als inloggen active is dan gaat active bij zoeken weg en precies andersom hier bij zoeken//
function zoeken() {
    document.querySelector(".zoeken").classList.toggle("active");

    var element = document.querySelector(".inloggen");
    element.classList.remove("active")
}


document.querySelector('#zoek').addEventListener('click', zoeken);

console.log("Zoeken active");
