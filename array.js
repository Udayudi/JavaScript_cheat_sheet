const items = [
  { name: "Bile", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 400 },
  { name: "Computer", price: 1000 },
  [{ size: "20" }]
];

//filter
const filteredItems = items.filter(item => {
  return item.price <= 100;
});

//old array
console.log(items);
//new array
console.log(filteredItems);

/////////////////////////////////////////////////////

const itemNames = items.map(item => {
  return item.name; //or Price
});

console.log(itemNames);

/////////////////////////////////////////////////////

const foundItem = items.find(item => {
  return item.name === "Phone";
});

console.log(foundItem);

//////////////////////////////////////////////////////

items.forEach(item => {
  console.log(item.price); //or any key
});

//////////////////////////////////////////////////////
const hasCostlyItems = items.some(item => {
  return item.price <= 100;
});

console.log(hasCostlyItems);

//////////////////////////////////////////////////////

const NewhasCostlyItems = items.every(item => {
  return item.price <= 100;
});

console.log(NewhasCostlyItems);

//////////////////////////////////////////////////////

const total = items.reduce((currentTotal, item) => {
  return item.price + currentTotal;
}, 0); // 0 is a second parameter

console.log(total);

///////////////////////////////////////////////////////

const numbers = [1, 2, 3, 4, 5];

const includesTwo = numbers.includes(7);

console.log(includesTwo);
