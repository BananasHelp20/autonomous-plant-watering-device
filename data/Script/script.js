let timestamp1;
let timestamp2;
let timestamp3;

let timeToWait1;
let timeToWait2;
let timeToWait3;

let pumpdelay1;
let pumpdelay2;
let pumpdelay3;

function init() {
    //darkmode/lightmode
    document.getElementById("lightSwitch").addEventListener("click", () => {darkmodeButton();});
    setColorTheme();

    //zeit erhöhen/verringern
    fetchSec();
    fetchDays();

    //zeit abchecken
    checkTime();
    
    //Statistiken ausgeben
    displayStatistics();
}

function darkmodeButton() {
    console.log(localStorage.getItem("lightSwitch"));
    if (localStorage.getItem("lightSwitch") == "true") {
        localStorage.setItem("lightSwitch", "false");
    } else {
        localStorage.setItem("lightSwitch", "true");
    }
    setColorTheme();
}

function setColorTheme() {
    if (localStorage.getItem("lightSwitch") == "true") {
        document.getElementById('backgroundImg').setAttribute('src', './images/backgroundImage2.jpg');
        document.getElementById('mode').setAttribute('href', './CSS/darkColors.css');
    } else {
        document.getElementById('mode').setAttribute('href', './CSS/brightColors.css');
        document.getElementById('backgroundImg').setAttribute('src', './images/backgroundImage.jpg');
    }
}

function displayStatistics() {
    
}

function sleep(milliseconds) {
    let start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
  }

function checkTime() {
    if (timestamp3.getMilliseconds() >= timeToWait3) {
        fetch('/usePump3');
        sleep(pumpdelay3);
        fetch('/stopPump3');
    }

    if (timestamp2.getMilliseconds() >= timeToWait2) {
        fetch('/usePump2');
        sleep(pumpdelay2);
        fetch('/stopPump2');
    }

    if (timestamp1.getMilliseconds() >= timeToWait1) {
        fetch('/usePump1');
        sleep(pumpdelay1);
        fetch('/stopPump1');
    }
}

function fetchSec() {
    if (pumpdelay1 == null && pumpdelay2 == null && pumpdelay3 == null) {
        pumpdelay1 = 0;
        pumpdelay2 = 0;
        pumpdelay3 = 0;
    }
    
    if (pumpdelay1 < 20 * 60 * 1000) document.getElementById("increaseSecPump1").addEventListener("click", () => { pumpdelay1 += 100 });
    if (pumpdelay1 > 0) document.getElementById("decreaseSecPump1").addEventListener("click", () => { pumpdelay1 -= 100 });
    
    if (pumpdelay2 < 20 * 60 * 1000) document.getElementById("increaseSecPump2").addEventListener("click", () => { pumpdelay2 += 100 });
    if (pumpdelay2 > 0) document.getElementById("decreaseSecPump2").addEventListener("click", () => { pumpdelay2 -= 100 });
  
    if (pumpdelay3 < 20 * 60 * 1000) document.getElementById("increaseSecPump3").addEventListener("click", () => { pumpdelay3 += 100 });
    if (pumpdelay3 > 0) document.getElementById("decreaseSecPump3").addEventListener("click", () => { pumpdelay3 -= 100 });
}
  
function fetchDays() {
    if (timeToWait1 == null && timeToWait2 == null && timeToWait3 == null) {
        timeToWait1 = 0;
        timeToWait2 = 0;
        timeToWait3 = 0;
    }

    if (timeToWait1 < (1000 * 60 * 60 * 24) * 356) document.getElementById("increaseDaysPump1").addEventListener("click", () => { timeToWait1 += (1000 * 60 * 60 * 24) });
    if (timeToWait1 > 0) document.getElementById("decreaseDaysPump1").addEventListener("click", () => { timeToWait1 -= (1000 * 60 * 60 * 24) });
  
    if (timeToWait2 < (1000 * 60 * 60 * 24) * 356) document.getElementById("increaseDaysPump2").addEventListener("click", () => { timeToWait2 += (1000 * 60 * 60 * 24) });
    if (timeToWait2 > 0) document.getElementById("decreaseDaysPump2").addEventListener("click", () => { timeToWait2 -= (1000 * 60 * 60 * 24) });
  
    if (timeToWait3 < (1000 * 60 * 60 * 24) * 356) document.getElementById("increaseDaysPump3").addEventListener("click", () => { timeToWait3 += (1000 * 60 * 60 * 24) });
    if (timeToWait3 > 0) document.getElementById("decreaseDaysPump3").addEventListener("click", () => { timeToWait3 -= (1000 * 60 * 60 * 24) });
}

// function getAndDisplayMyNumbers(url, displayId) {
//     // AJAX Anfrage mit Fetch API
//     fetch(url)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('response wasn"t ok');
//             }
//             return response.text()
//         })
//         .then(data => {
//             document.getElementById(displayId).innerHTML = data;
//         })
//         .catch(error => console.error('Error:', error));
// }

// function fetchPumps() {
//     document.getElementById("pump1").addEventListener("click", () => { fetch('/usePump1') });
//     document.getElementById("pump2").addEventListener("click", () => { fetch('/usePump2') });
//     document.getElementById("pump3").addEventListener("click", () => { fetch('/usePump3') });
// }

// function fetchProcess() {
//     document.getElementById("start").addEventListener("click", () => {getAndDisplayMyNumbers("/startProcess", "currentlyDoingAnything")});
//     document.getElementById("stop").addEventListener("click", () => {getAndDisplayMyNumbers("/stopProcess", "currentlyDoingAnything")});
// }

// function fetchSec() {
//     document.getElementById("increaseSecPump1").addEventListener("click", () => {getAndDisplayMyNumbers("/increaseSecPump1", "currSecPump1")});
//     document.getElementById("decreaseSecPump1").addEventListener("click", () => {getAndDisplayMyNumbers("/decreaseSecPump1", "currSecPump1")});
    
//     document.getElementById("increaseSecPump2").addEventListener("click", () => {getAndDisplayMyNumbers("/increaseSecPump2", "currSecPump2")});
//     document.getElementById("decreaseSecPump2").addEventListener("click", () => {getAndDisplayMyNumbers("/decreaseSecPump2", "currSecPump2")});
  
//     document.getElementById("increaseSecPump3").addEventListener("click", () => {getAndDisplayMyNumbers("/increaseSecPump3", "currSecPump3")});
//     document.getElementById("decreaseSecPump3").addEventListener("click", () => {getAndDisplayMyNumbers("/decreaseSecPump3", "currSecPump3")});
// }
  
// function fetchDays() {
//     document.getElementById("increaseDaysPump1").addEventListener("click", () => {getAndDisplayMyNumbers("/increaseDaysPump1", "currDaysPump1")});
//     document.getElementById("decreaseDaysPump1").addEventListener("click", () => {getAndDisplayMyNumbers("/decreaseDaysPump1", "currDaysPump1")});
  
//     document.getElementById("increaseDaysPump2").addEventListener("click", () => {getAndDisplayMyNumbers("/increaseDaysPump2", "currDaysPump2")});
//     document.getElementById("decreaseDaysPump2").addEventListener("click", () => {getAndDisplayMyNumbers("/decreaseDaysPump2", "currDaysPump2")});
  
//     document.getElementById("increaseDaysPump3").addEventListener("click", () => {getAndDisplayMyNumbers("/increaseDaysPump3", "currDaysPump3")});
//     document.getElementById("decreaseDaysPump3").addEventListener("click", () => {getAndDisplayMyNumbers("/decreaseDaysPump3", "currDaysPump3")});
// }

init();