//A runway of length n (=10) has spikes randomly placed throughout it's length. Given a starting position and a initial speed determine
//if the airplane can stop by decreasing its increasing/decreasing it's speed by only 1 each spot it takes forward.

//Solution 1 recursively looks at all possible movement options to solve whether the plane can stop.
let runway = Array.apply(null,Array(10)).map(x=>true);
runway.map((x,i) => {if(Math.random()>.8) {runway[i] = false;}});

function traverseFrom(startPos, speed) {
    if (runway[startPos]==true && speed === 0) return true; //Plane stops on runway
    if (runway[startPos]==false || startPos >= runway.length ) return false; //Plane fails to stop
    return traverseFrom(startPos+speed-1,speed-1) || 
            traverseFrom(startPos+speed,speed) ||
            traverseFrom(startPos+speed+1,speed+1);//Try all possible options to move
};

console.log(runway);
console.log(traverseFrom(0,3));