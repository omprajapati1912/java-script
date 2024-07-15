var user_arr = [];

class User {
  constructor(name, age, email, phone) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.phone = phone;
  }
}

const form = document.getElementById("userForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  user_arr.push(new User(name, age, email, phone));

  console.log(user_arr);

  const dataList = document.getElementById("list");
  dataList.innerHTML = user_arr

    .map(
      (user) =>
        `<p>name: ${user.name}, Age: ${user.age}, Email: ${user.email}, Phone: ${user.phone}</p>`
    )
    .join("");
});
