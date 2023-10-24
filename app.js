function pushVal(arr, num){
    arr.push(num);
    console.log(arr);
    return arr;
}

pushVal([1,2,3], 4);

function spliceArr(arr){
    arr.splice(1, 3, "was replaced");
    console.log(arr);
    return arr;
}

spliceArr([1,2,3,4])

function sliceArr(arr){
    var sliced = arr.slice(1, 3);
    console.log(sliced);
    return sliced;
}

sliceArr([2,4,6,8,10]);