const allergiesList = {
  1: 'eggs',
  2: 'peanuts',
  4: 'shellfish',
  8: 'strawberries',
  16: 'tomatoes',
  32: 'chocolate',
  64: 'pollen',
  128: 'cats'
};

function Allergies(score){
  this.score = score;
}

Allergies.prototype.list = function(){
  var keys = allergiesList.keys;
  console.log(keys);
}

Allergies.prototype.allergicTo = function(allergy){

}

// module.exports = Allergies;