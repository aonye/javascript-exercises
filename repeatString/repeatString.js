const repeatString = function(str, numOfRepeats) {
    let cumulativeStr = "";
    let isNum = typeof numOfRepeats;
    if (numOfRepeats<0 || isNum!=="number"){
        return "ERROR";
    }
    for (let i=0; i < numOfRepeats; i++){
        cumulativeStr+=str;
    }
    //console.log(cumulativeStr);
    return cumulativeStr;
};

module.exports = repeatString;
