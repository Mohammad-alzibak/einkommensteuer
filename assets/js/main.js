function rechnen() {
    let jahr = document.getElementById("jahr").value
    let eingabe = document.getElementById("eingabe").value
    let ergebnis = document.getElementById("ergebnis")
    if (jahr == "2018") {
        jahr2018();
    } else if (jahr == "2019") {
        jahr2019();
    } else if (jahr == "2020") {
        jahr2020()
    }
}
// 2018-------2018-------2018-------2018-------------------------------->
function jahr2018() {
    let zvE = document.getElementById("eingabe").value;
    let ESt;
    let y;
    let z;
    if (zvE <= 9000) {
        ESt = 0;
    }
    else if (zvE >= 9001 && zvE <= 13996) {
        y = (zvE - 9000) / 10000;
        ESt = (997.80 * y + 1400)
    }
    else if (zvE >= 13997 && zvE <= 54949) {
        z = (zvE - 13996) / 10000;
        ESt = (220.13 * z + 2397) * z + 948.49;
    }
    else if (zvE >= 54950 && zvE <= 260532) {
        ESt = 0.42 * zvE - 8621.75;
    }
    else if (zvE >= 260533) {
        ESt = 0.45 * zvE - 16437.70;
    }
    ergebnis.innerHTML += ESt;
}
// 2019-------2019-------2019-------2019----------------------------------->
function jahr2019() {
    let zvE = document.getElementById("eingabe").value;
    let ESt;
    let y;
    let z;
    if (zvE <= 9168) {
        ESt = 0;
    }
    else if (zvE >= 9169 && zvE <= 14254) {
        y = (zvE - 9168) / 10000;
        ESt = (980.14 * y + 1400) * y
    }
    else if (zvE >= 14255 && zvE <= 55960) {
        z = (zvE - 14254) / 10000;
        ESt = (216.16 * z + 2397) * z + 965.58;
    }
    else if (zvE >= 57052 && zvE <= 270500) {
        ESt = 0.42 * zvE - 8963.74;
    }
    else if (zvE >= 270501) {
        ESt = 0.45 * zvE - 17078.74;
    }
    ergebnis.innerHTML += ESt;
}
// 2020-------2020-------2020-------2020----------------------------------->
function jahr2020() {
    let zvE = document.getElementById("eingabe").value;
    let ESt;
    let y;
    let z;
    if (zvE <= 9408) {
        ESt = 0;
    }
    else if (zvE >= 9409 && zvE <= 14532) {
        y = (zvE - 9408) / 10000;
        ESt = (972.87 * y + 1400)
    }
    else if (zvE >= 14533 && zvE <= 57051) {
        z = (zvE - 14532) / 10000;
        ESt = (212.02 * z + 2397) * z + 972.79;
    }
    else if (zvE >= 57052 && zvE <= 270500) {
        ESt = 0.42 * zvE - 8963.74;
    }
    else if (zvE >= 270501) {
        ESt = 0.45 * zvE - 17078.74;
    }
    ergebnis.innerHTML += ESt;
}
