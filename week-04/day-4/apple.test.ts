import  test  from 'tape';

import {Apple} from './apple'

test('add 2 numbers', t => {
  const operations = new Apple();

  var actual = operations.getApple();
  var expected = 'apple';

  t.equal(actual, expected);
  t.end();
});
