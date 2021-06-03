const reverseString = function(str) {
    let tempArr = str.split('');
    let tempArr2 = [];
    for (let i=tempArr.length-1; i>=0; i--){
        tempArr2.push(tempArr[i]);
    }
    let finalStr = tempArr2.join('');
    return finalStr;
};

module.exports = reverseString;
