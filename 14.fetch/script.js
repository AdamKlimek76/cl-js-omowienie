fetch("https://jsonplaceholder.typicode.com/albums")
    .then(function (response) {
        return response.json();
    })
    .then(function (albums) {
        // console.log(albums);
        for (let i = 0; i < albums.length; i++) {
            const albumElement = document.createElement("div");
            albumElement.innerText = albums[i].title;
            document.body.appendChild(albumElement);
        }
    });

const button = document.querySelector("button");
button.addEventListener("click", function () { // strzałkowo: button.addEventListener("click", () => {
    const newAlbum = {
        userId: 5,
        title: "tytuł nowego albumu"
    };
    fetch("https://jsonplaceholder.typicode.com/albums", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newAlbum)
    }).then(function (response) {
        return response.json();
    }).then(function (album) {
        console.log(album);
    });

});

// new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve(1234);
//     }, 2000);
// }).then(function (result) {
//     console.log(result);
// }).catch(function (reason) {
//     console.log(reason);
// })
//
// console.log("Dalsze działanie skryptu po opisaniu obietnicy i tym, co zrobimy, kiedy da nam wynik");

// const add = function (a, b) {
//     return a + b;
// };
// const add = (a, b) => a + b;

// const example2 = function (a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// };

const example2 = () => {
}
