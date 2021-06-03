const removeFromArray = function(arr, ...args) {
    let tempArr = arr;
    let argsArr = args;

    for (let i=0; i<argsArr.length;i++){ //loops through args
        let tempVal = argsArr[i];
        let inArr = false;
        if(tempArr.indexOf(tempVal)!==-1){
            inArr = true;
        }
        while (inArr) { //loops through arr for multiple values
          tempArr.splice(tempArr.indexOf(tempVal), 1);
          if (tempArr.indexOf(tempVal)!==-1){ //if still in the newly spliced arr (repeat val)
              inArr = true;
          }
          else {
              inArr = false;
          }
        }
    }
    arr = tempArr
    return arr;
};

module.exports = removeFromArray;
