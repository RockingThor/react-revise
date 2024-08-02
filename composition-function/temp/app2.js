let animal = {
  eats: true,
};

let species = {
  living: true,
};

let cat = {
  jumps: true,
};

cat.__proto__ = animal;
// cat.__proto__ = species;

console.log(cat);
