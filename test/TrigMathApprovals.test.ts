import { describe, expect, test } from "@jest/globals";
import {TrigMath} from "../src/TrigMath";
import { verify } from "approvals/lib/Providers/Jest/JestApprovals";


describe("TrigMath", () => {
   test("Cos", () => {
       verify(TrigMath.cos(1.5));
   });
});
