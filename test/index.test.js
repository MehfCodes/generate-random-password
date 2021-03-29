import { it, describe, expect } from '@jest/globals';
import generatePassword from '../index.js';
describe('test for generating random password', () => {
  it('with default options', () => {
    const pass = generatePassword();
    expect(pass.length).toBe(10);
  });

  it('with custom options', () => {
    const pass = generatePassword({
      includeNumbers: true,
      characterAmount: 15,
      includeUppercase: true,
      includeSymbols: true,
    });

    expect(pass.length).toBe(15);
  });
});
