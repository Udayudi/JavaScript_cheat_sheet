const alphabet = ["A", "B", "C", "D", "E", "F"];
const number = ["1", "2", "3", "4", "5", "6"];

// const a = alphabet[0];
// const b = alphabet[1];

const [a, , b, ...any] = alphabet;

const newArray = [...alphabet, ...number];

console.log(a);
console.log(b);
console.log(any);
console.log(newArray);

function sumAndMuliply(a, b) {
  return [a + b, a * b]; // a/b
}

// const array = sumAndMuliply(2, 3);

// if the return value is not passed
const [sum, muliply, division = "No division"] = sumAndMuliply(2, 3);

// console.log(array);

console.log(sum);
console.log(muliply);
console.log(division);
