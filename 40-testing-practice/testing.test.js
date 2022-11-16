import { capitalize, reverseString, calculator } from "./testing";

test('Can capitalize', () => {
  expect(capitalize('test')).toBe('TEST');
});

test('Reverse string', () => {
  expect(reverseString('test')).toBe('tset');
});

test('Calculator function', () => {
  expect(calculator.add(5, 10)).toBe(15);
  expect(calculator.subtract(5, 10)).toBe(-5);
  expect(calculator.divide(5, 10)).toBe(0.5);
  expect(calculator.multiply(5, 10)).toBe(50);
});

