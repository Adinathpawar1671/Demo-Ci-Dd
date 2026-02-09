import sum from "./sum.js";

describe("test for sum func", ()=>{
    test("2+2 is equal tp 4", ()=>{
    expect(sum(2,2)).toBe(4);
    });

    test("-3+3 is equal to zero", ()=>{
        expect(sum(-3,3)).toBe(0);
    });
});
