// 1.Finding the last element of array

let arr1 = [3, 7, 34, 90, 12];
let arr2 = [true, "green", "where", 12, 56];

let lastElementArr1 = arr1[arr1.length - 1];
let lastElementArr2 = arr2[arr2.length - 1];

console.log("Last element of arr1:", lastElementArr1);
console.log("Last element of arr2:", lastElementArr2);

//2.Joins array elements into a string

let myPets = ["Cow", "Bird", "Snake", "Dog"];

let mypetsString = myPets.join(", ");
console.log("My pets are: " + mypetsString);

//3.Sorting array items

var arr3 = [-5, 9, 5, 3, 2, -3, 6, 8, 4, 1];

arr3.sort((a, b) => a - b);
console.log("Sorted array:", arr3);

// 4. Removing duplicate array and an array containing duplicates

let arr = ["boy", "man", "girl", "school", "girl", "woman"];
let newArray = [...new Set(arr)];

let duplicatesArray = arr.filter((item, index) => arr.indexOf(item) !== index);
console.log("Array without duplicates:", newArray);
console.log("Array with duplicates only:", [...new Set(duplicatesArray)]);

//5.Searching words in an array

let arr5 = ["the", "way", "x", 4];
let findWord = "food";
let result = arr5.map(item => item === findWord ? item : null).filter(Boolean);
console.log(result.length > 0 ? result[0] : "The search word was not found");

//6. Sort strings

let word = "renniw";
let sortedString = word.split('').sort().join('');
console.log("Sorted string:", sortedString);

//7. inserting string using an array

let fruits = ["Banana", "Apple", "Orange", "Mango", "Pineapple", "Grapes", "Watermelone", "Pear", "Cherry", "Plum"];

fruits.splice(5, 0, "Tomato");
console.log("New fruits array:", fruits);
Collapse










