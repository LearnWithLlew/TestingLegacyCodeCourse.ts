import { randomInt, randomUUID } from "crypto";

export class Inconsistent {

  public static print(name: string): string {
    const date = new Date(randomInt( 4_000_000_000_000));
    return `started at ${date.toUTCString()} by ${name}`;
  }

  public static getFamily() {
    const mom = randomUUID();
    const dad = randomUUID();
    const son1 = randomUUID();
    const son2 = randomUUID();
    return {
      people: [{ name: "eve", id: mom },
        { name: "adam", id: dad },
        { name: "kane", id: son1, mother: mom },
        { name: "able", id: son2, mother: mom }]
    };
  }

  public static getWordOfTheDay(){
    const words = dictionary();
    const word = words[randomInt(words.length)];
    return `Hello Typescripter,\nTodays word is **${word}**.\n  Happy Testing!\n  `
  }


  public static getId(): number {
    return randomInt(1, 20);
  }
}
function dictionary(): string[] {
  return [

    "abandonable",
    "abandoned",
    "abandonedly",
    "abandonee",
    "abandone",
    "dresser",
    "dressership",
    "dressily",
    "dressiness",
    "dressing",
    "dressline",
    "dressmaker",
    "notencephalocele",
    "notencephalus",
    "noter",
    "notewise",
    "noteworthily",
    "separately",
    "separateness",
    "separates",
    "separatical",
    "separating",
    "cork",
    "corkage",
    "corkboard",
    "corke",
    "corked",
    "corker",
    "corkiness",
    "corking",
    "corkish",
    "corkite",
    "corkmaker",
    "corkmaking",
    "corkscrew",
    "corkscrewy",
    "corkwing",
    "corkwood"
  ];
}
