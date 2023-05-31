

// for (let i = 0; i < 100; i++) {
//     console.log(i)
// }


// let i = 0;
// while (i < 50) {
//     console.log(i);
//     i++;
// }



// let names = ["John", "Jane", "Will", "George","Josh"]
// names.pop("Will");
// names.shift("George");
// names.unshift("Jane");
// names.push("George");

// console.log(names);



// let numbers = [];

// for(let i = 1; i < 10; i++) {
//     numbers.push(i * i);
// }
// console.log(numbers);
 
// let numbers = [5, 8, 15, 25, 51];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     sum = sum + numbers[i];
// }
// console.log(sum, "sum of array");


// let numbersArray = [5, 8, 24, 35, 27];

// for (let i = 0; i < numbersArray.length; i++) {
//     let number = numbersArray[index];
//     if (number % 2 === 0) {
//         number = number * 2;
//         console.log(true);
//     } else {
//         number = number * number;
//         console.log(false)
//     } 
// }
// console.log(numbersArray.length);


// function getName() {
//     console.log("this is function");
//     function getLastName() {
//         console.log("this is nested function")
//     }
//     getLastName();
// }
// getName();


// function getSum(a,b) {
//     console.log(a+b);
//     return a+b;
// }
// getSum(5,6);
// getSum(50,60);
// console.log(getSum(5, 6));
// console.log(getSum(50, 60));

// function getNamesToLowerCase(name) {
//     console.log(name.toLowerCase());
//     let newName = name.toLowerCase();
//     // return names.toLowerCase();

// }
// getNamesToLowerCase("NATIA");
// getNamesToLowerCase("Jane");
// getNamesToLowerCase("John");

// console.log(getNamesToLowerCase)

// 7

// const getEvenOrOdd = (number) => {
//     if (number % 2 ===0) {
//         return true;
//     } else {
//         return false;
//     }
// };
// console.log(getEvenOrOdd(5));
// console.log(getEvenOrOdd(6));

// 8

// let numbers = [5, 6, 7, 8, 9, 10, 11, 12, 15, 50, 65, 67, 70];
// let filteredNumbers = numbers.filter((item) => item % 5 === 0);
// console.log(filteredNumbers);

// N4

// const getProfit = (buyPrice, sellPrice, month) => {
//     const profit = sellPrice - buyPrice;
//     const profitPercentage = (profit / buyPrice) * 100;
//     const profitFixed = profitPercentage.toFixed(2);
//     const addPercentageSign = `${profitFixed}%`;
//     return { addPercentageSign, profit, month };
// };

// const may = getProfit(80.25, 227, "May");
// const june = getProfit(45.5, 270, "June");
// const july = getProfit(537, 1235, "July");
// console.log(may, june, july);

// N5

// let numbers = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// let filtersNumbersArrow = numbers.filter((item) => item % 2 === 0);
// const filterNumbers = numbers.filter(function (number) {
//     return numbers % 2 === 0;
// });


