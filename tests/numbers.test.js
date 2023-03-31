import { describe, it, expect } from 'vitest';
import { numbersAnswers } from '../code/numbers';

describe('numbers', () => {
  describe('binary operations', () => {
    it('should be able to find the value of a given bit', () => {
      expect(numbersAnswers.valueAtBit(128, 8)).to.eql(1);
      expect(numbersAnswers.valueAtBit(65, 1)).to.eql(1);
      expect(numbersAnswers.valueAtBit(65, 7)).to.eql(1);
      expect(numbersAnswers.valueAtBit(128, 1)).to.eql(0);
    });

    it('should be able to return the base10 representation of a binary string', () => {
      expect(numbersAnswers.base10('11000000')).to.eql(192);
    });

    it('should be able to convert an eight-bit number to a binary string', () => {
      expect(numbersAnswers.convertToBinary(128)).to.eql('10000000');
      expect(numbersAnswers.convertToBinary(65)).to.eql('01000001');
    });
  });

  describe('decimals', () => {
    it('should be able to multiply with precision', () => {
      expect(numbersAnswers.multiply(3, 0.1)).to.eql(0.3);
      expect(numbersAnswers.multiply(3, 0.2)).to.eql(0.6);
      expect(numbersAnswers.multiply(3, 0.0001)).to.eql(0.0003);
    });
  });
});