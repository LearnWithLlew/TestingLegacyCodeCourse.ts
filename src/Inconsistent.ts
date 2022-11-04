import { randomInt } from "crypto";

export class Inconsistent {

  public static print(name:string):string {
  var date: number = Date.now();
  return `started at ${date} by id: ${name}`;
}

public static  getId():number {
  return randomInt(1, 20) ;
}
}
