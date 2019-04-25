import test from "tape";
import { anagramComp } from "./anagram";

test("is it an anagram?", t => {
  let firstWord: string = "red";
  let secondWord: string = "der";

  var actual = anagramComp(firstWord, secondWord);
  var expected = true;

  t.equal(actual, expected);
  t.end();
});
