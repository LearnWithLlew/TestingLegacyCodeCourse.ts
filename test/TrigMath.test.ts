import { describe, expect, test } from "@jest/globals";
import {TrigMath} from "../src/TrigMath";


describe("TrigMath", () => {
   test("Cos", () => {
       expect(TrigMath.cos(1.5)).toBe(null);
   });
});
