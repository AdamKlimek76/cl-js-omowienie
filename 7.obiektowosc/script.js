let dead = 0;
let sickStart = 1;
let day = 1;
let archive = [];
archive.push(sickStart);
while (dead < 7600000000) {
    if (day < 4) {
        archive.push(archive[day - 1] * 2);  //ilość tylko zarażających na dzień, przed pierwszą śmiercią
        day++;
        console.log("ilość nowych zakażeń dla dnia<4", archive[archive.length - 1]);
        if (day ===4) {
            dead = archive[0];
        }
    } else {
        archive.push((archive[day - 1] * 2) - archive[day - 4]);//ilość tylko zarażających na dzień, po 3 dniach zaczynają sie zgony
        day++;
        console.log("ilość nowych zakażeń dla dnia>4 ", archive[archive.length - 1]);
        dead = archive.slice(0, day - 3).reduce(function (total, day) {   //zliczanie zakażonych po 3 dniach, nie ma ozdrowieńców
            return total + day
        });
    }
    console.log("dead " + dead);
    console.log("day ", day);
}
console.log("po ", day + 3, " dniach ziemia wymarła"); //plus 3 dni na wymarcie ostatniej grupy zarażonych
