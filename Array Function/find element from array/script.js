let arr = [10, 20, 30, 45, 50];

let number = arr.find(
    function (value){
        return value == 45;
    }
);

console.log(number);