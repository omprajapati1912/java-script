function first() {
  let a = Number(prompt("Enter first number: "));
  let b = Number(prompt("Enter second number: "));

  let operation = prompt("Enter operation (+ , - , * , / ): ");

  function add(a, b) {
    return a + b;
  }

  function sub(a, b) {
    return a - b;
  }

  function mul(a, b) {
    return a * b;
  }

  function div(a, b) {
    return a / b;
  }

  function calculate() {
    let result;
    if (operation === "+") {
      result = add(a, b);
    } else if (operation === "-") {
      result = sub(a, b);
    } else if (operation === "*") {
      result = mul(a, b);
    } else if (operation === "/") {
      result = div(a, b);
    } else {
      alert = "Invalid operation";
    }

    return result;
  }

  let result = calculate();
  console.log(result);
  document.getElementById("calculate").innerHTML = "answer is : " + result;
}
