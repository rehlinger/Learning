function fib1(n) {
    function fib(n) {
        if(n<=0) return {value: 0};
        if(n===1) return {value: 1, prev: 0};
        let prev = fib(n-1);
        return {value: prev.value+prev.prev, prev: prev.value}
    }
    return fib(n).value;
}

console.log(fib1(500));

let fib2 = function (){
    var memo = [0,1];
    var fib = function (n){
        var res = memo[n];
        if (typeof res !== 'number') {res=fib(n-1)+fib(n-2);memo[n]=res;}
        return res;
    }
    return fib;
}()

console.log(fib2(500))

let fib3 = function(){
    let arr = Array(3).fill(0);
    let fib = function (n) {
        if (n===0) return 0;
        if (n===1) {arr.pop();arr.unshift(1);return;}
        fib(n-1);
        arr.pop();
        arr.unshift(arr[0]+arr[1]);
        return arr[0];
    }
    return fib;
}()

console.log(fib3(500))
