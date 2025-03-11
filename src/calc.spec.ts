import { calc } from "./calc"

describe("calc", () => {
    it("empty string returns 0", () => {
        // given
        const a = ""
        const expected_result = 0
        // when
        const result = calc(a)
        // then
        expect(result).toBe(expected_result)
    })
    it("it returns a number when given a number in string", () => {
        // given
        const a = "10"
        const expected_result = 10
        // when
        const result = calc(a)
        // then
        expect(result).toBe(expected_result)
    })
    it("it returns the sum when comma delimited", () => {
        // given
        const a = "1,2"
        const expected_result = 3
        // when
        const result = calc(a)
        // then
        expect(result).toBe(expected_result)
    })
    it("it returns the sum when newline delimited", () => {
        // given
        const a = "1\n2"
        const expected_result = 3
        // when
        const result = calc(a)
        // then
        expect(result).toBe(expected_result)
    })
    it("it return a sum when both delimiters are used", () => {
        // given
        const a = "1\n2,3"
        const expected_result = 6
        // when
        const result = calc(a)
        // then
        expect(result).toBe(expected_result)
    })
    it("it throws an error when a negative number is used", () => {
        // given
        const a = "1\n-2,3"
        // then
        expect(() => calc(a)).toThrow("negatives not allowed")
    })
    it("it ignores numbers greater than 1000", () => {
        // given
        const a = "1\n1001,3"
        const expected_result = 4
        // when
        const result = calc(a)
        // then
        expect(result).toBe(expected_result)
    })
    it("sum two numbers with a custom delimiter", () => {
        // given
        const a = "//#1,2#3"
        const expected_result = 6
        // when
        const result = calc(a)
        // then
        expect(result).toBe(expected_result)
    })
    it("sum two numbers with a custom delimiter of any length", () => {
        // given
        const a = "//[###]1###2###3"
        const expected_result = 6
        // when
        const result = calc(a)
        // then
        expect(result).toBe(expected_result)
    })
    it("sum two numbers with multiple custom delimiters", () => {
        // given
        const a = "//[#][%]1#2%3"
        const expected_result = 6
        // when
        const result = calc(a)
        // then
        expect(result).toBe(expected_result)
    })
})
