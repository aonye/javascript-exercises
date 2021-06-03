const sumAll = function(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number" || num1<0 || num2 <0) {
        //error checking for negative and non numbers
        return 'ERROR';
    }

    let biggerNum;
    let smallerNum;

    if (num1>num2){
        biggerNum = num1;
        smallerNum = num2;
    }
    else {
        biggerNum = num2;
        smallerNum = num1;
    }

    let totalSum = 0;
    for (;smallerNum<=biggerNum;smallerNum++){
        totalSum+=smallerNum;
    }
    return totalSum;
};

module.exports = sumAll;
