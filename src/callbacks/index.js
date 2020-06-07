// Example 1
const sum = (num1, num2) => num1 + num2;

const calc = (num1, num2, callback) => callback(num1, num2);

console.log(calc(2, 2, sum));

// Example 2
const date = (callback) => {
  console.log(new Date());
  setTimeout(function () {
    let date = new Date();
    callback(date);
  }, 3000);
};

const printDate = (dateNow) => console.log(dateNow);

date(printDate);
