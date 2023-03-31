import { describe, it, expect } from 'vitest';
import { logicalOperatorsAnswers } from '../code/logicalOperators';

describe('logical operators', () => {
  it('should be able to work with logical or', () => {
    expect(logicalOperatorsAnswers.or(false, true)).to.be.ok;
    expect(logicalOperatorsAnswers.or(true, false)).to.be.ok;
    expect(logicalOperatorsAnswers.or(true, true)).to.be.ok;
    expect(logicalOperatorsAnswers.or(false, false)).not.to.be.ok;
    expect(logicalOperatorsAnswers.or(3, 4)).to.not.eq(7);
  });

  it('should be able to work with logical and', () => {
    expect(logicalOperatorsAnswers.and(false, true)).not.to.be.ok;
    expect(logicalOperatorsAnswers.and(false, false)).not.to.be.ok;
    expect(logicalOperatorsAnswers.and(true, false)).not.to.be.ok;
    expect(logicalOperatorsAnswers.and(true, true)).to.be.ok;
    expect(logicalOperatorsAnswers.and(3, 4)).to.be.ok;
  });
});
