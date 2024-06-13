// meter to foot

function meter() {
  let number = prompt("Enter meter:");

  function feet(meter) {
    if (meter >= 0) {
      let feet = meter * 3.28084;
      console.log("feet");
      return feet;
    } else {
      return "invalid input";
    }
  }

  document.getElementById("feet").innerText = "answer is : " + feet(number);
}

// end

// Celsius to Fahrenheit

function Celsius() {
  let Celsius = prompt("Enter temperature in Celsius:");

  function Fahrenheit(Celsius) {
    if (Celsius >= 0) {
      let Fahrenheit = (Celsius * 9) / 5 + 32;
      console.log(Fahrenheit);
      return Fahrenheit;
    } else {
      return "invalid input";
    }
  }

  document.getElementById("Fahrenheit").innerText =
    "Answer is : " + Fahrenheit(Celsius);
}

// end

// Dollar to Rupees

function Dollar() {
  let dollar = prompt("Enter value in dollars:");

  function Rupees(dollar) {
    if (dollar >= 0) {
      let rupees = dollar * 83.54;
      console.log(rupees);
      return rupees;
    } else {
      return "Invalid input";
    }
  }

  document.getElementById("Rupees").innerText = "Answer is : " + Rupees(dollar);
}

// end
