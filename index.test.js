//  test

const add = require('./index');

test('returns 0 for an empty string', () => {
    expect(add("")).toBe(0);
});

test('returns number itself if only one number is provided', () => {
    expect(add("1")).toBe(1);
});

test('adds two comma-separated numbers', () => {
    expect(add("1,5")).toBe(6);
});

