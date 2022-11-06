import { describe, test } from "@jest/globals";
import { verify } from "approvals/lib/Providers/Jest/JestApprovals";
import { Inconsistent } from "../src/Inconsistent";
import { Scrubbers } from "approvals/lib/Scrubbers/Scrubbers";
import { Options } from "approvals/lib/Core/Options";


describe("Inconsistent", () => {
   test("print", () => {
     const s = Scrubbers.createReqexScrubber(/\*\*[a-zA-Z]+\*\*/g, `**<word_of_the_day>**`)
     verify(Inconsistent.getWordOfTheDay(), new Options().withScrubber(s));
   });
});
