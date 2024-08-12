function fibonacciGenerator (n) {
    var list = [];
    for(var i=0; i<n; i++) {
        if (i===0) {
            list.push(i)
        }
        else if (i===1) {
            list.push(i)
        }
        else{
            list.push(list[i-1] + list[i-2])
        }
    }
    return list;
}
console.log(fibonacciGenerator(5))