import  test  from 'tape';
import {Sum} from './sum'

test('sum of arr numbers', t => {
  const operations = new Sum([1, 2, 3]);
  
  var actual = operations.sum();
  var expected = 6;

  t.equal(actual, expected);
  t.end();
});

test('empty arr', t => {
  const operations = new Sum([]);
  
  var actual = operations.listOfNumbers.length;
  var expected = 0;

  t.equal(actual, expected);
  t.end();
});

test('one element', t => {
  const operations = new Sum([1]);
  
  var actual = operations.sum();
  var expected = operations.listOfNumbers[0];

  t.equal(actual, expected);
  t.end();
});