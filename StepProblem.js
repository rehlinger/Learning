//Given a staircase of n steps. Solve how many ways in which one can traverse the staircase using only
//step increments of [m...]. The last step taken must be in [m...].

//Solution 1: Create array that tracks the number of paths incoming to each step.
function nump(numberOfSteps, possibleSteps) {
    if (numberOfSteps == 0) return 1;
    let iterativeArray = Array.apply(null, Array(Math.max.apply(null,possibleSteps))).map(x=> 0); // [(steps away),sum of paths]
    iterativeArray.push(0);
    //iterate over each increasing step and count the incoming paths and copy to the next outgoing steps
    for (let i = 0; i <= numberOfSteps; i++) {
        //shift array to next step
        iterativeArray.map( (x,i) => {
           if (i < (iterativeArray.length-1)) {
            iterativeArray[i]=iterativeArray[i+1];
           } else {
               iterativeArray[i]=0;
            }
        })
        //add the previous path options that lead to current step together and store in final position of iterativeArray.
        for (let j=0; j<possibleSteps.length; j++) {
            iterativeArray[iterativeArray.length-1] += iterativeArray[(iterativeArray.length-1)-possibleSteps[j]];
        }
        if (i===0) iterativeArray[iterativeArray.length-1] = 1;
    }
    return iterativeArray[iterativeArray.length-1];
}

console.log(nump(800,[2,3]));

//Solution 2: Create object that recursively goes through all possible paths and keeps track of path in a object called total. (Slow)
function nump2(numberOfSteps,posibleSteps) {
    let total = { count: 0, paths: [] };
    let path = [];
    function findSteps(stepsToGo, nextSteps) {
        if (stepsToGo === 0) {
            total.count += 1
            let newP = [...path];
            total.paths.push(newP); //Send a copy of the current path to the output object array as a solution
            return;
        }
        nextSteps.map(step => {
            if (stepsToGo - step >= 0) {
                path.push(step);
                findSteps(stepsToGo - step, nextSteps);
                path.pop();
            }
        });
    };
    findSteps(numberOfSteps,posibleSteps);
    return total.count;
}
console.log(nump2(4,[2,3]));

//Solution 3 creates an array of length n+1 and steps through each step and looks back a 
//potential amount similar to solution 1 but retains all answers in one (potentially long) array.
function nump3(stepsToGo, possibleSteps) {
    if (stepsToGo === 0) return 1;
    let nums = Array(stepsToGo + 1);
    nums[0] = 1;
    for (let i = 1; i <= stepsToGo; i++) {
        let total = 0;
        possibleSteps.map(j => {
            if (i - j >= 0) total += nums[i - j];
        })
        nums[i] = total;
    }
    return nums[stepsToGo];
}

console.log(nump3(800,[2,3]))
