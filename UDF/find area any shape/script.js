function first() {
  let length = prompt("Enter rectangle length");
  let width = prompt("Enter rectangle width");
  let result;

  function rectangle(length, width) {
    if (length <= 0 || width <= 0) {
      return "length and width must be positive numbers";
      console.log("result");
      return result;
    } else {
      return length * width;
    }
  }

  document.getElementById("rectangle").innerText =
    "answer is : " + rectangle(length, width);
}

function second() {
  let base = prompt("Enter triangle base");
  let height = prompt("Enter triangle height");
  let result;

  function triangle(base, height) {
    if (base <= 0 || height <= 0) {
      return "base and height must be positive numbers";
      console.log("result");
      return result;
    } else {
      return 0.5 * base * height;
    }
  }

  document.getElementById("triangle").innerText =
    "answer is : " + triangle(base, height);
}

function third() {
  let radius = prompt("Enyter circle radius");
  let result;

  function circle(radius) {
    if (radius <= 0) {
      return "radius must be positive number";
    } else {
      return Math.PI * radius * radius;
    }
  }

  document.getElementById("circle").innerText = "answer is : " + circle(radius);
}
