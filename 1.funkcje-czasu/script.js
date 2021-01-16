let timeoutId = setTimeout(function () {
    console.log("Wywołano funkcję");
}, 1500);

// clearTimeout(timeoutId);

let intervalId = setInterval(function () {
    console.log("Cykliczne wywołanie funkcji");
}, 1000);

setTimeout(function () {
    clearInterval(intervalId);
}, 6000);

