import { describe, it, expect } from 'vitest';
import { asyncAnswers } from '../code/async';

describe('async', () => {
  it('should understand how to use promises to handle asynchronicity', (done) => {
    let flag = false;
    let finished = 0;
    const total = 2;

    const finish = (_done) => {
      if (++finished === total) {
        _done();
      }
    };

    asyncAnswers.async(true).then((result) => {
      flag = result;
      expect(flag).to.eql(true);
      finish(done);
    });

    asyncAnswers.async('success').then((result) => {
      flag = result;
      expect(flag).to.eql('success');
      finish(done);
    });

    expect(flag).to.eql(false);
  });

  it('should be able to retrieve data from the server and return a sorted array of names', (done) => {
    const url = '/data/testdata.json';

    asyncAnswers.manipulateRemoteData(url).then((result) => {
      expect(result).to.have.length(5);
      expect(result.join(' ')).to.eql('Adam Alex Matt Paul Rebecca');
      done();
    });
  });
});
