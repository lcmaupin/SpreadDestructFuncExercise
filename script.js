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

