import { capitalize, reverseString, calculator, caesarCipher } from "./testing";

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

test('Caesar cipher', () => {
  const space = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  expect(caesarCipher('test', 5, space)).toBe('yjxy');
  expect(caesarCipher('the fox jumped over the lazy dog', 5, space)).toBe('ymj ktc ozruji tajw ymj qfed itl');
});

