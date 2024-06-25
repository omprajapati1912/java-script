let arr = [2, 2, 3, 4, 5];

let find = arr.findIndex((value) => value % 2 == 0);
if (find) {
  console.log("all number are even");
} else {
  console.log("not all number are even");
}

let every = arr.every((value) => value % 2 == 0);
if (every) {
  console.log("all number are even");
} else {
  console.log("not all number are even");
}

let some = arr.some((value) => value % 2 == 0);
if (some) {
  console.log("all number are even");
} else {
  console.log("not all number are even");
}
