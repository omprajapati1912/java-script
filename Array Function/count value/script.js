let pets = ["dog", "chicken", "cat", "dog", "chicken", "chicken", "rabbit"];

function countpetsfun(obj, curr) {
  if (obj[curr]) {
    obj[curr] = obj[curr] + 1;
  } else {
    obj[curr] = 1;
  }
  return obj;
}

let petscount = pets.reduce(countpetsfun, {});
console.log(petscount);
