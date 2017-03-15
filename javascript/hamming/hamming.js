function Hamming() {}

Hamming.prototype.compute = function(str1, str2){
  if (str1.length !== str2.length) {
    throw new Error('DNA strands must be of equal length.');
  }

  var counter = 0;

  str1.split('').forEach(function(char, idx){
    if (char !== str2[idx]) {
      counter++;
    }
  });

  return counter;
}

module.exports = Hamming;