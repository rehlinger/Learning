//Array Creation Methods
let arr1 = [0,0,0,0,0]
let arr2 = Array.from({length: 5}, x => 0)
let arr3 = Array(5).fill(0)
let arr4 = Array.apply(null, Array(5)).map(x=>0);
let arr5 = "?".repeat(5).split("").map(x=>0)
let arr6 = [...Array(5)].map(x=>0)

arr7 = [2,3,5,4,23,32,22,21,1,1,2,]
let maxInArray = Math.max(...arr7)//.apply(null, arr7)

let arr8 = [[24],3,5,6,5]

function cons(atom) {
    if (atom === undefined) return 0
    return [...atom].slice(1,)
}

function car(atom) {
    if (atom[0] === undefined) return 
    return [...atom].shift()
}
function cons(first, atom) {
    if (!atom) return first
    return [first,atom];
}


let arr9 = [...arr8].shift()
let arr10 = Array.from(arr8).slice(1,)
let arr11 = [...arr8].slice(1,)
let arr13 = []
arr8[3]=12
arr8
arr9
arr10
arr11
let arr12 = cons(20,67)
arr12

var crazy = function redhat(item) {
    return function bluehat(x) {
        return item += x
    }
}
let bb = crazy(2)
bb
let cc = bb(3);
cc
console.log(bb(3))

