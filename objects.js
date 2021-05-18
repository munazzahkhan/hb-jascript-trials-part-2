"use strict";


// 1. countWords
function countWords(phrase) {
  const wordCounts = {};
  // console.log(phrase.split(' '))
  for (const word of phrase.split(' ')){
    if (!wordCounts[word]){ 
      wordCounts[word] = 1;
    } else {
      wordCounts[word] += 1;
    }
  }
  return wordCounts;
}


// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  const melonPrices = {
    2.50: ['Cantaloupe', 'Honeydew'],
    2.95: ['Watermelon'],
    3.25: ['Musk', 'Crenshaw'],
    14.25: ['Christmas']
  };
  for (const p in melonPrices){
    if (p == price){
      console.log("here");
      return (melonPrices[price]);
    } 
  }
  return null;
}

console.log(countWords("This is a test to test the number of the words."))