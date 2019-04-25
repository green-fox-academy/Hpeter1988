import test from "tape";
import { fibbo } from "./fibonacci2";

test("is it the right fibbo number?", t => {
  
  var actual = fibbo(10);
  var expected = 34;

  t.equal(actual, expected);
  t.end();
});
test("is it the right fibbo number?", t => {
  
  var actual = fibbo(1);
  var expected = 0;

  t.equal(actual, expected);
  t.end();
});
test("is it the right fibbo number?", t => {
  
  var actual = fibbo(2);
  var expected = 1;

  t.equal(actual, expected);
  t.end();
});
