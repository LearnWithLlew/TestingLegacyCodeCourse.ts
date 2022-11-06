import * as fs from "fs";

export class NonFunctional {

  private count: number = 0;

  public getCategory(): number {
    if (this.count == 5) {
      return 2;
    } else {
      return 1;
    }
  }

  public static printName(name: string): void {
    process.stdout.write(`Hello ${name}. Welcome to the commandline\n`);
  }

  public static loop(count: number): void {
    fs.open("/tmp/message.txt", "a", (err, fd) => {
      for (let i = 1; i <= count; i++) {
        const squared = i * i;
        const text = `${i} -> ${squared}\n`;
        fs.appendFile(fd, text, "utf8", (err) => fs.close(fd));
      }
    });
  }
}
