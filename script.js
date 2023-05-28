

for (let i = 0; i < 100; i++) {
    console.log(i)
}

let whileNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];
let index = 0;

while(index < whileNumber.length) {
    console.log(whileNumber[index]);
    index++;
}

let names = ["John", "Jane", "Will", "George","Josh"]
names.pop("Will");
names.shift("George");
names.unshift("Jane");
names.push("George");

console.log(names);



// let numbers = [];

// for(let i = 0; i<10000; i++);
// while (index < numbers.length) {
//     console.log(numbers[index]);
//     index++;
// }
//     do {
//         console.log(numbers[index]);
//         index++;
//     } while (index<10);

 
let numbers = [5, 8, 15, 25, 51];
for (let i = 0; i < 3; i++);
let numbersSum = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4];
console.log(numbersSum);


let numbersArray = [5, 8, 24, 35, 27];

for (let i = 0; i < numbersArray.length; i++) {
    let number = numbersArray[index];
    if (number % 2 === 0) {
        number = number * 2;
        console.log(true);
    } else {
        number = number * number;
        console.log(false)
    } 
}
console.log(numbersArray.length);