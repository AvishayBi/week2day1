
// Exercise 1: Your Favorite Food

let favoritefood= "Tehina";
let favoritemeal = "Dinner";
let fun=`I eat ${favoritefood} at every ${favoritemeal}`;
console.log(fun);

//Exercise 2 : Series
//Part I

let watchedSeries = ["black mirror", "money heist", "the big bang theory"];
let watchedSeriesLength=watchedSeries.length;
console.log(watchedSeriesLength);
let myWatchedSeries=`${watchedSeries[0]},${watchedSeries[1]},${watchedSeries[2]}`;
console.log(`I watched ${watchedSeriesLength} series: ${myWatchedSeries}`);


//Part II

watchedSeries.splice(2,1,"friends");
console.log(watchedSeries);
watchedSeries.push("vikings");
console.log(watchedSeries);
watchedSeries.splice(0,1,);
console.log(watchedSeries);

console.log(watchedSeries[0][2].toUpperCase());


//Exercise 3 : The Temperature Converter

let celsiustemperature = 36.6
let fahrenheit= celsiustemperature * 9 / 5 + 32
console.log(fahrenheit);

//Exercise 4 : Guess The Answers #1

let c;
let a = 34;
let b = 21;

console.log(a+b) //first expression
    // Prediction: 55
    // Actual:55

    a = 2;

console.log(a+b) //second expression
// Prediction:23
// Actual:23



//Exercise 5 : Guess The Answers #2

console.log(typeof(15));
// Prediction: number
// Actual:

console.log(typeof(5.5));
// Prediction: number
// Actual:number

typeof(NaN)
// Prediction: text
// Actual:

typeof("hello")
// Prediction: string
// Actual:

typeof(true)
// Prediction: bolean
// Actual:

typeof(1 != 2)
// Prediction: true
// Actual:

"hamburger" + "s"
// Prediction:hamburgers
// Actual:

"hamburgers" - "s"
// Prediction:hamburger
// Actual:

"1" + "3"
// Prediction:13
// Actual:

"1" - "3"
// Prediction:2
// Actual:

"johnny" + 5
// Prediction:johnny5
// Actual:

"johnny" - 5
// Prediction:5johnny
// Actual:

99 * "hello"
// Prediction:99hello
// Actual:

1 != 1
// Prediction:false
// Actual:

1 == "1"
// Prediction:false
// Actual:

1 === "1"
// Prediction:false
// Actual:


//Exercise 6 : Guess The Answers #3

5 + "34"
// Prediction:534
// Actual:

5 - "4"
// Prediction:1
// Actual:

10 % 5
// Prediction:5
// Actual:

5 % 10
// Prediction:0.05
// Actual:

"Java" + "Script"
// Prediction:java script
// Actual:

" " + " "
// Prediction:  
// Actual:

" " + 0
// Prediction: 0
// Actual:

true + true
// Prediction:true
// Actual:

true + false
// Prediction:true
// Actual:

false + true
// Prediction:true
// Actual:

false - true
// Prediction:true
// Actual:

!true
// Prediction:false
// Actual:

3 - 4
// Prediction:-1
// Actual:

"Bob" - "bill"
// Prediction: bob-bill
// Actual:



