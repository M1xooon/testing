import { isValidCard, getCardType } from '../src/index';

test('Valid Visa card', () => {
  expect(isValidCard('4111111111111111')).toBe(true);
  expect(getCardType('4111111111111111').type).toBe('Visa');
});

test('Invalid card', () => {
  expect(isValidCard('1234567890123456')).toBe(false);
  expect(getCardType('1234567890123456').type).toBe('Unknown');
});

test('Valid Mir card', () => {
  expect(getCardType('2200200000000000').type).toBe('Mir');
});
