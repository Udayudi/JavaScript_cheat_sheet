const personOne = {
  name: "abc",
  age: 24,
  address: {
    city: "somewhere",
    state: "One of them"
  }
};

const personTwo = {
  name: "cba",
  age: 30,
  favoritFood: "water",
  address: {
    city: "somewhere else",
    state: "Another One of them"
  }
};

const { name, ...all } = personOne; //
console.log(all);

const {
  name: firstName = "xyz",
  age,
  favoritFood = "Rice",
  address: { city }
} = personTwo;

console.log(firstName);
console.log(age);
console.log(favoritFood);
console.log(city);

const personThree = { ...personOne, personTwo };
console.log(personThree);

// function printUser(user)
function printUser({ name, age }) {
  //   console.log(user);
  //   console.log(`Name is : ${user.name} and Age is : ${user.age}`);
  console.log(`Name is : ${name} and Age is : ${age}`);
}

printUser(personOne);
