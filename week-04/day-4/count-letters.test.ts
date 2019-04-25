import test from "tape";
import { countLetters } from "./count-letters";

test("count letters", t => {
  var actual = countLetters("dommmm");
  var expected = { 'd': 1, 'o': 1, 'm': 4 };

  t.deepEqual(actual, expected);
  t.end();
});
