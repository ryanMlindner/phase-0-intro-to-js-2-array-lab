// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.splice(2,1);
}

function destructivelyRemoveFirstCat() {
    cats.splice(0,1);
}

function appendCat(name) {
    return [...cats, name];
}

function prependCat(name) {
    return [name ,...cats];
}

//terrible readability, but we aren't worrying about that yet
function removeLastCat() {
    return cats.slice(0, -1);
}
// see previous comment
function removeFirstCat() {
    return cats.slice(1);
}