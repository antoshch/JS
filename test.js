//Комментарий

/* Большой
такой
комментрий */

'use strict'
// let userName;
// userName = prompt("What is your name?","No name")
// // alert(`Your name is ${userName}`);
// // confirm('Как вас зовут?');

// // let moumtlySalary; 
// // let actualTime;
// // let planTime;
// // let salary;

// // salary = 100000;
// // planTime = 165;
// // actualTime = prompt('Сколько вы отработали в этом месяце?');

// // moumtlySalary = salary / planTime * actualTime; 

// // console.log('Имя переменной',moumtlySalary);
// // if (moumtlySalary > 0);


// let ndflPercentage;

// ndflPercentage = 13;

// function ndflCalculation(moumtlyIncome) {
//     let ndfl = moumtlyIncome * ndflPercentage / 100;
//     return ndfl;
// }

// console.log('NDFL = ',ndflCalculation(10000));

let myName;
let friendName;
let myApple
let myFriendApple;
let sum;
let answer;

alert('Привет!');
myName = prompt('Как тебя зовут?','Твое имя');
friendName = prompt('Как зовут твоего друга?','Имя друга');
myApple = +prompt('Сколько у тебя яблок?');
myFriendApple = +prompt("Сколько яблок у твоего друга?");
sum = myApple + myFriendApple;
answer = `Значит ${myName} и ${friendName} имеют ${sum} яблок`;

alert(answer);
console.log(answer);