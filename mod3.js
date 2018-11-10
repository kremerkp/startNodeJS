var _ = require(`underscore`);

// function will be executed;
module.exports = function() {
  var myName = `Kai`;
  console.log(`Hello my name is: ${myName}`);

  var list = [1, 2, 3, 4, 5, 6, 7];
  // loop through list
  for (var i = 1; i < list.length; i++) {
    console.log(i * 2);
  }
  // loop using underscore
  _.each(list, function(element, index) {
    console.log(element * index);
  });
  // map js way
  const map1 = list.map(x => (x * 2 < 10 ? x * 2 : x * 20));
  console.log(map1);
  // map underscore
  var result = _.map(list, function(value, key, list) {
    if (value * 2 < 10) {
      return value * 2;
    } else {
      return value * 20;
    }
  });
  console.log(result);
  // filer
  var result = _.filter(list, function(value) {
    return value * 2 < 10;
  });
  console.log(result);
  _.times(5, function(index) {
    console.log(`what is the index? ... it is $index` + index);
  });
};
