import {
  describe, it, expect, beforeEach, afterEach, vi,
} from 'vitest';
import { countAnswers } from '../code/count';

/**
  * This test describes a function, count, that takes two arguments: a starting number,
  * and an ending number. The function should console.log each number from the start
  * number to the end number, one number per 1/10th of a second. The function should
  * return an object with a cancel method, which should cancel the counting.
*/

describe('count', () => {
  let nums;
  let origConsoleLog;

  beforeEach(() => {
    nums = [];

    if (typeof console === 'undefined') {
      // eslint-disable-next-line no-global-assign
      console = {
        log: null,
      };
    }
    origConsoleLog = console.log;
    console.log = (val) => {
      nums.push(val);
    };

    this.clock = vi.useFakeTimers();
  });

  afterEach(() => {
    console.log = origConsoleLog;

    this.clock.restore();
  });

  it('should count from start number to end number, one per 1/10th of a second', () => {
    this.timeout(600);
    countAnswers.count(1, 5);

    for (let i = 1; i <= 5; i++) {
      expect(nums.length).to.eql(i);

      this.clock.tick(100);
    }

    expect(nums.length).to.eql(5);
    expect(nums[0]).to.eql(1);
    expect(nums[4]).to.eql(5);
  });

  it('should provide a method to cancel the counting', () => {
    this.timeout(600);

    const counter = countAnswers.count(1, 5);
    counter.cancel();

    this.clock.tick(550);

    expect(nums.length < 5).to.be.ok;
  });
});
