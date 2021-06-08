const palindromes = function(str) {
    let re = /[A-Za-z]/gm
    let tempArr = str.match(re);
    let tempStr = tempArr.join('');
    tempStr = tempStr.toLowerCase();
    for (let i=0; i<tempStr.length; i++){
        if(tempStr[i]!==tempStr[tempStr.length-1-i]){
          return false;
        }
    }
    return true;
};

module.exports = palindromes;
