const ftoc = function(temp) {  //5/9 (f-32)

  let tempInC = 5 / 9 * (temp - 32);
  if (Number.isInteger(tempInC)===true){
    return tempInC;
  }
  else {
    tempInC = parseFloat(tempInC.toFixed(1));
    return tempInC;
  }
};

const ctof = function(temp) {
  let tempInF = (9 / 5 * temp) + 32;
  if (Number.isInteger(tempInF)===true) {
    return tempInF;
  }
  else {
    tempInF = parseFloat(tempInF.toFixed(1));
    return tempInF;
  }

};

module.exports = {
  ftoc,
  ctof
};
