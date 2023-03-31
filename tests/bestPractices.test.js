import { describe, it, expect } from 'vitest';
import { bestPracticesAnswers } from '../code/bestPractices';

describe('best practices', () => {
  it('should avoid global variables', () => {
    bestPracticesAnswers.globals();
    expect(window.myObject).not.to.be.ok;
  });

  it('should use parseInt correctly', () => {
    expect(bestPracticesAnswers.parseInt('12')).to.eql(12);
    expect(bestPracticesAnswers.parseInt('12px')).to.eql(12);
    expect(bestPracticesAnswers.parseInt('0x12')).to.eql(0);
  });

  it('should understand strict comparison', () => {
    expect(bestPracticesAnswers.identity(1, '1')).to.eql(false);
    expect(bestPracticesAnswers.identity(1, 1)).to.eql(true);
    expect(bestPracticesAnswers.identity(0, false)).to.eql(false);
  });
});
