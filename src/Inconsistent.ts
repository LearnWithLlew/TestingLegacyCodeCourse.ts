import { randomInt, randomUUID } from "crypto";

export class Inconsistent {

  public static print(name: string): string {
    var date: number = Date.now();
    return `started at ${date} by ${name}`;
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

  public static getId(): number {
    return randomInt(1, 20);
  }
}
