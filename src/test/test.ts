import { describe, expect, test } from "@jest/globals";
import {verify, verifyAsJson} from "approvals/lib/Providers/Jest/JestApprovals";
import {TrigMath} from "../src/TrigMath";


describe("Testing Existing Code", () => {
   test("SimpleVerify", () => {
       expect(TrigMath.cos(2)).toBe(-0.4161462523737773);
   });
  
});
