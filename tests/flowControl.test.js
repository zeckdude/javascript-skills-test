import { describe, it, expect } from 'vitest';
import { flowControlAnswers } from '../code/flowControl';

describe('flow control', () => {
  it('should be able to conditionally branch your code', () => {
    let num = 0;

    while (num % 3 === 0 || num % 5 === 0) {
      num = Math.floor(Math.random() * 10) + 1;
    }

    expect(flowControlAnswers.fizzBuzz()).not.to.be.ok;
    expect(flowControlAnswers.fizzBuzz('foo')).not.to.be.ok;
    expect(flowControlAnswers.fizzBuzz(2)).to.eql(2);
    expect(flowControlAnswers.fizzBuzz(101)).to.eql(101);

    expect(flowControlAnswers.fizzBuzz(3)).to.eql('fizz');
    expect(flowControlAnswers.fizzBuzz(6)).to.eql('fizz');
    expect(flowControlAnswers.fizzBuzz(num * 3)).to.eql('fizz');

    expect(flowControlAnswers.fizzBuzz(5)).to.eql('buzz');
    expect(flowControlAnswers.fizzBuzz(10)).to.eql('buzz');
    expect(flowControlAnswers.fizzBuzz(num * 5)).to.eql('buzz');

    expect(flowControlAnswers.fizzBuzz(15)).to.eql('fizzbuzz');
    expect(flowControlAnswers.fizzBuzz(num * 3 * 5)).to.eql('fizzbuzz');
  });
});
