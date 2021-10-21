// 1a
const jPDinos = [`Velociraptors`, `Tyrannosaurus Rex`, `Dilophosaurus`];

// 1b
function seeDinos(a, ...c){
    console.log(a);
    console.log(c);
}
seeDinos(...jPDinos);

console.log("==========");

// 2a
const jPCharacters = {
    alanGrant: `Sam Neill`,
    ellieSattler: `Laura Dern`,
    ianMalcolm: `Jeff Goldblum`
};

// 2b
let seeCharacters = ({ellieSattler}) => {
    console.log(ellieSattler);
}
seeCharacters(jPCharacters);

// 3a
const jurassicParkMovies = [
    {
        one: `Jurassic Park`,
        two: `The Lost World: Jurassic Park`,
        three: `Jurassic Park III`
    },
    {
        four: `Jurassic World`,
        five: `Jurassic World: Fallen Kingdom`,
        six: `Jurassic World: Dominion`
    }
];

console.log("==========");

// 3b
function seeJPMovies([{one, two, three}, {four, five, six}]){
    console.log(one);
    console.log(two);
    console.log(three);
    console.log(four);
    console.log(five);
    console.log(six);
}
seeJPMovies(jurassicParkMovies);