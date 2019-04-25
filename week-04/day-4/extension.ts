"use strict";

export function add(a: number, b: number): number {
  return a + b;
}

export function maxOfThree(a: number, b: number, c: number): number {

 let arrayToGiveMax: number[] =[a, b, c] 
  return Math.max(...arrayToGiveMax)
}

export function median(pool: number[]): number {
  if(pool.length % 2 ===0)
  {return (pool.sort()[pool.length / 2 - 1] + pool.sort()[(pool.length) / 2])/2}
else
{return pool.sort()[Math.floor(pool.length / 2) + 1]}
}


export function isVowel(character: string): boolean {
  return ["a", "u", "o", "e", "i"].some(vowel => vowel === character);
}

export function translate(hungarian: string): string {
  let teve = hungarian;
  let length = teve.length;

  for (let i = 0; i < length; i++) {
    let c = teve[i];
    if (isVowel(c)) {
      teve = teve.split(c).join(`${c}v${c}`);
      i += 2;
      length += 2;
    }
  }
  return teve;
}
