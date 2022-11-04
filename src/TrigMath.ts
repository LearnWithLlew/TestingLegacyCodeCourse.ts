export class TrigMath {
    // Constants
    public static readonly IMPROVEMENT_2 = false;
    public static readonly PI: number = 3.1415;
    public static readonly SQUARED_PI: number = this.PI * this.PI;
    public static readonly HALF_PI: number = this.PI / 2;
    public static readonly QUARTER_PI: number = this.HALF_PI / 2;
    public static readonly TWO_PI: number = 2 * this.PI;
    public static readonly THREE_PI_HALVES: number = this.TWO_PI - this.HALF_PI;
    public static readonly DEG_TO_RAD: number = this.PI / 180;
    public static readonly HALF_DEG_TO_RAD: number = this.PI / 360;
    public static readonly RAD_TO_DEG: number = 180 / this.PI;
    public static readonly SQRT_OF_TWO: number = Math.sqrt(2);
    public static readonly HALF_SQRT_OF_TWO: number = this.SQRT_OF_TWO / 2;
    // Trig
    public static readonly SIN_BITS: number = 22;
    public static readonly SIN_SIZE: number = 1 << this.SIN_BITS;
    public static readonly SIN_MASK: number = this.SIN_SIZE - 1;
    public static readonly SIN_TABLE: number[] = [];
    public static readonly SIN_CONVERSION_FACTOR: number = (this.SIN_SIZE / this.TWO_PI);
    public static readonly COS_OFFSET: number = this.SIN_SIZE / 4;
    // Arc trig
    public static readonly sq2p1: number = 2.414213562373095048802;
    public static readonly sq2m1: number = 0.414213562373095048802;
    public static readonly p4: number = 0.161536412982230228262E2;
    public static readonly p3: number = 0.26842548195503973794141E3;
    public static readonly p2: number = 0.11530293515404850115428136E4;
    public static readonly p1: number = 0.178040631643319697105464587E4;
    public static readonly p0: number = 0.89678597403663861959987488E3;
    public static readonly q4: number = 0.5895697050844462222791E2;
    public static readonly q3: number = 0.536265374031215315104235E3;
    public static readonly q2: number = 0.16667838148816337184521798E4;
    public static readonly q1: number = 0.207933497444540981287275926E4;
    public static readonly q0: number = 0.89678597403663861962481162E3;
    private static readonly initialized = this.init();
     private static init() {
        for (let i = 0; i < this.SIN_SIZE; i++) {
            this.SIN_TABLE[i] = Math.sin((i * this.TWO_PI) / this.SIN_SIZE);
        }
        return true;
    }


    public static sin(angle: number): number {
        return this.sinRaw(GenericMath.floor(angle * this.SIN_CONVERSION_FACTOR));
    }

    public static cos(angle: number): number {
        return this.cosRaw(GenericMath.floor(angle * this.SIN_CONVERSION_FACTOR));
    }

    public static tan(angle: number): number {
        const idx = GenericMath.floor(angle * this.SIN_CONVERSION_FACTOR);
        return this.sinRaw(idx) / this.cosRaw(idx);
    }

    public static csc(angle: number): number {
        return 1 / this.sin(angle);
    }

    public static sec(angle: number): number {
        return 1 / this.cos(angle);
    }

    public static cot(angle: number): number {
        const idx = GenericMath.floor(angle * this.SIN_CONVERSION_FACTOR);
        return this.cosRaw(idx) / this.sinRaw(idx);
    }

    public static asin(value: number): number {
        if (value > 1) {
            return NaN;
        } else if (value < 0) {
            return -this.asin(-value);
        } else {
            const temp = Math.sqrt(1 - value * value);
            if (value > 0.7) {
                return this.HALF_PI - this.msatan(temp / value);
            } else {
                return this.msatan(value / temp);
            }
        }
    }

    public static acos(value: number): number {
        if (value > 1 || value < -1) {
            return NaN;
        } else {
            return this.HALF_PI - this.asin(value);
        }
    }

    public static atan(value: number): number {
        if (value > 0) {
            return this.msatan(value);
        } else {
            return -this.msatan(-value);
        }
    }

    public static atan2(y: number, x: number): number {
        if (y + x == y) {
            return y >= 0 ? this.HALF_PI : -this.HALF_PI;
        }
        y = this.atan(y / x);
        if (x < 0) {
            if (y <= 0) {
                return y + this.PI;
            } else {
                return y - this.PI;
            }
        }
        return y;
    }

    public static acsc(value: number): number {
        if (value == 0) {
            return NaN;
        }
        return this.asin(1 / value);
    }

    public static asec(value: number): number {
        if (value == 0) {
            return NaN;
        }
        return this.acos(1 / value);
    }

    public static acot(value: number): number {
        if (value == 0) {
            return NaN;
        } else if (value > 0) {
            return this.atan(1 / value);
        } else {
            return this.atan(1 / value) + this.PI;
        }
    }

    private static sinRaw(idx: number): number {
        return this.SIN_TABLE[idx & this.SIN_MASK + this.getOffset()];
    }

    private static cosRaw(idx: number): number {
        return this.SIN_TABLE[(idx + this.COS_OFFSET) & this.SIN_MASK];
    }

    private static mxatan(arg: number): number {
        const argsq = arg * arg;
        let value = ((((this.p4 * argsq + this.p3) * argsq + this.p2) * argsq + this.p1) * argsq + this.p0);
        value /= ((((argsq + this.q4) * argsq + this.q3) * argsq + this.q2) * argsq + this.q1) * argsq + this.q0;
        return value * arg;
    }

    private static getOffset():number{
         return this.IMPROVEMENT_2 ? 1:0;
    }
    private static msatan(arg: number): number {
        if (arg < this.sq2m1) {
            return this.mxatan(arg);
        }
        if (arg > this.sq2p1) {
            return this.HALF_PI - this.mxatan(1 / arg);
        }
        return this.HALF_PI / 2 + this.mxatan((arg - 1) / (arg + 1));
    }
}

class GenericMath {

    public static floor(a: number) {
        return Math.floor(a);
    }


}