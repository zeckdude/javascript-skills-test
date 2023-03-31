import { describe, it, expect } from 'vitest';
import { recursionAnswers } from '../code/recursion';

describe('recursion', () => {
  const fileData = {
    dir: 'app',
    files: [
      'index.html',
      {
        dir: 'js',
        files: [
          'main.js',
          'app.js',
          'misc.js',
          {
            dir: 'vendor',
            files: [
              'jquery.js',
              'underscore.js',
            ],
          },
        ],
      },
      {
        dir: 'css',
        files: [
          'reset.css',
          'main.css',
        ],
      },
    ],
  };

  it('should be able to return a list of files from the data', () => {
    const result = recursionAnswers.listFiles(fileData);
    expect(result.length).to.eql(8);
    expect(result.indexOf('index.html') > -1).to.be.ok;
    expect(result.indexOf('main.js') > -1).to.be.ok;
    expect(result.indexOf('underscore.js') > -1).to.be.ok;
  });

  it('should be able to return a list of files in a subdir', () => {
    const result = recursionAnswers.listFiles(fileData, 'js');
    expect(result.length).to.eql(5);
    expect(result.indexOf('main.js') > -1).to.be.ok;
    expect(result.indexOf('underscore.js') > -1).to.be.ok;
  });
});

describe('permutation', () => {
  const arr = [1, 2, 3, 4];
  const answer = [
    [1, 2, 3, 4],
    [1, 2, 4, 3],
    [1, 3, 2, 4],
    [1, 3, 4, 2],
    [1, 4, 2, 3],
    [1, 4, 3, 2],
    [2, 1, 3, 4],
    [2, 1, 4, 3],
    [2, 3, 1, 4],
    [2, 3, 4, 1],
    [2, 4, 1, 3],
    [2, 4, 3, 1],
    [3, 1, 2, 4],
    [3, 1, 4, 2],
    [3, 2, 1, 4],
    [3, 2, 4, 1],
    [3, 4, 1, 2],
    [3, 4, 2, 1],
    [4, 1, 2, 3],
    [4, 1, 3, 2],
    [4, 2, 1, 3],
    [4, 2, 3, 1],
    [4, 3, 1, 2],
    [4, 3, 2, 1],
  ];

  it('should be able to return the permutations of an array', () => {
    const result = recursionAnswers.permute(arr);
    const resultStrings = _.map(result, (r) => r.join(''));

    expect(result.length).to.eql(answer.length);

    _.each(answer, (a) => {
      expect(resultStrings.indexOf(a.join('')) > -1).to.be.ok;
    });
  });

  it('should be able to return the nth number in a fibonacci sequence', () => {
    expect(recursionAnswers.fibonacci(2)).to.eql(1);
    expect(recursionAnswers.fibonacci(6)).to.eql(8);
  });

  it('should be able to return the set of all valid combinations of n pairs of parentheses.', () => {
    const expected = ['((()))', '(()())', '(())()', '()(())', '()()()'];
    const result = recursionAnswers.validParentheses(3);

    expect(result.length).to.eql(5);
    _.each(expected, (c) => {
      expect(result).to.contain(c);
    });
  });
});
