const array = [123, "abc", true];
console.log("Wartość pierwszego elementu tablicy:", array[0]);
console.log("Liczba elementów tablicy:", array.length);

array.push("nowy element");
console.log(array[3]);

const array2 = [5, 1, 23, 70];
const filterResult = array2.filter(function (element) {
    return element > 10;
});
console.log(filterResult);

const array3 = ["Dariusz", "Anna", "Alicja", "Tomasz", "Wojciech"];
const mapResult = array3.map(function (element) {
    return element.length;
});
console.log(mapResult);

function compare(element1, element2) {
    return element1.length - element2.length;
}

console.log(compare("aa", "bb"));

array3.sort(compare);
console.log(array3);

const sum = array2.reduce(function (total, element) {
    return total + element;
});
console.log(sum);
