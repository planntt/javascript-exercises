const ftoc = function(ftemp) {
  const degC = (ftemp - 32) * (5/9);
  const rounded = Math.round(degC * 10) / 10;
  return rounded;
};

const ctof = function(ctemp) {
  const degF = ctemp * (9/5) + 32;
  const rounded = Math.round(degF * 10) / 10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
