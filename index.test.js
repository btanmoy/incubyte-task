//  test cases

const addNumbers = require('./index');

test('returns 0 for an empty string', () => {
    expect(addNumbers("")).toBe(0);
});

test('returns number itself if only one number is provided', () => {
    expect(addNumbers("1")).toBe(1);
});

test('adds two comma-separated numbers', () => {
    expect(addNumbers("1,5")).toBe(6);
});

test('supports different delimiters', () => {
    expect(addNumbers("//;\n1;2")).toBe(3);
});

test('throws error for negative numbers', () => {
    expect(() => addNumbers("1,-2,3,-4")).toThrow("negative numbers not allowed -2,-4");
});

test('handles custom delimiters of any length', () => {
    expect(addNumbers("//[***]\n1***2***3")).toBe(6);
});
