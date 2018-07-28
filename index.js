// add solution here
function theBeatlesPlay(musicians, instruments) {
  var beatles=[];
  for(var i = 0; i < musicians.length; i++) {
    beatles.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return beatles
}
<<<<<<< HEAD
function johnLennonFacts(array) {
  var newFacts=[];
  var i=0;
  while(i<array.length) {
    newFacts.push(array[i] + "!!!");
    i++;
  }
  return newFacts;
=======
function johnLennonFacts(facts) {
  var lennon=[];
  var i=0;
  while(i<facts.length) {
    lennon.push(`${facts}` + "!!!");
    i++;
  }
  return facts;
>>>>>>> b2c710fb7e9c3262c63c5a74001b0d5d9c5772e3
}
function iLoveTheBeatles(n) {
  var beatles=[];
  do {
    beatles.push(`I love the Beatles!`);
    n++;
  } while(n<15);
  return beatles;
}