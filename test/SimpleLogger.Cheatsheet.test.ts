import { SimpleLogger } from "approvals/lib/Utilities/Logger/SimpleLogger";
import { describe, test } from "@jest/globals";
import { verifySimpleLogger } from "approvals/lib/Utilities/Logger/SimpleLoggerApprovals";

function logEverything(input: number): number {
  return SimpleLogger.useMarkers(() => {                             // => logEverything(input: 4)
    SimpleLogger.query("Select * from people");                  // Sql: Select * from people
    SimpleLogger.variable("Nonsense", "foo", true); // variable: Nonsense = foo <String>
    SimpleLogger.event("Testing");                                    // event: Testing
    SimpleLogger.message("Something random");                  // message: Something random
    for (let i = 0; i < 123; i++) {
      SimpleLogger.hourglass();
      //   .........1.........2.........3.........4.........5.........6.........7.........8.........9.........10
      //   .........1.........2...
    }
    try {
      throw new Error("Bad stuff happened here");
    } catch (e: any) {
      SimpleLogger.warning(e);
      //   *******************************************************************************************
      //   Error: Bad stuff happened here
      //   *******************************************************************************************
    }
    return 200;                                                            // <= logEverything(): 200
  }, `input: ${input}`, true);
}

describe("", () => {
  verifySimpleLogger("name", () => {/* your code here*/});
});
