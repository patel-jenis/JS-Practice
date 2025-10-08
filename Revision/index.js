let arr = [10, 27, 0, 40, 51];
let arr1 = [10, 27, 0, 40, 51];

// Return Nothing
// arr.forEach((data) => {
//     console.log(data);
// });

// Return something of same size of original array
// let half = arr.map((data) => {
//     return data / 2;
// }); 
// console.log(half);

// Return Condition always
// let half = arr.filter((data) => {
//     return data % 2 == 0;
// }); 
// console.log(half);

let result = arr.concat(arr1);
console.log(result);