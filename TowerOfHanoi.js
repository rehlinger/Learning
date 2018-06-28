//---------Tower of Hanoi---------
//Move a stack of items that start in ascending order and all in one position to a second position.
//An auxillary third position is also available, however items can be only be moved one at a time 
//to another position and an item cannot be placed on top of smaller items

//This function takes a size of the initial stack and outputs the number of moves it requires to rearrange
function moveStacks(num) {
    let startingStack = Array(num).fill(0).map((x, i) => i + 1),
        endingStack = [],
        auxStack = [],
        moves = [];
    startingStack.name = "S1";
    endingStack.name = "S2";
    auxStack.name = "S3";

    function moveToStack(num, pos, goal, alt) {
        if (num > 0) {
            moveToStack(num - 1, pos, alt, goal);//Move the next lower value to the position that is not the current numbers destination
            moves.unshift([`(${num})${pos.name}->${goal.name}`]);
            goal.unshift(num);
            pos.shift();
            moveToStack(num - 1, alt, goal, pos);///Move the next lower value to final position
        }
    }
    moveToStack(num, startingStack, endingStack, auxStack);
    console.table(moves);
    return `Number of Moves = ${moves.length}`
}

console.log(moveStacks(4));

