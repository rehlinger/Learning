//Array Creation Methods
let arr1 = [0,0,0,0,0]
let arr2 = Array.from({length: 5}, x => 0)
let arr3 = Array(5).fill(0)
let arr4 = Array.apply(null, Array(5)).map(x=>0);
let arr5 = "?".repeat(5).split("").map(x=>0)
let arr6 = [...Array(5)].map(x=>0)

arr7 = [2,3,5,4,23,32,22,21,1,1,2,]
let maxInArray = Math.max(...arr7)//.apply(null, arr7)
