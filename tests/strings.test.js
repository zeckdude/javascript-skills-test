import { describe, it, expect } from 'vitest';
import { stringsAnswers } from '../code/strings';

describe('strings', () => {
  it('should be able to reduce duplicate characters to a desired minimum', () => {
    expect(stringsAnswers.reduceString('aaaabbbb', 2)).to.eql('aabb');
    expect(stringsAnswers.reduceString('xaaabbbb', 2)).to.eql('xaabb');
    expect(stringsAnswers.reduceString('aaaabbbb', 1)).to.eql('ab');
    expect(stringsAnswers.reduceString('aaxxxaabbbb', 2)).to.eql('aaxxaabb');
  });

  it('should be able to wrap lines at a given number of columns, without breaking words', () => {
    const wrapCol = 5;
    const inputStrings = [
      'abcdef abcde abc def',
      'abc abc abc',
      'a b c def',
    ];
    const outputStrings = [
      'abcdef\nabcde\nabc\ndef',
      'abc\nabc\nabc',
      'a b c\ndef',
    ];
    let formattedStr;

    inputStrings.forEach((str, index) => {
      formattedStr = stringsAnswers.wordWrap(str, wrapCol);
      expect(formattedStr).to.eql(outputStrings[index]);
    });
  });

  it('should be able to reverse a string', () => {
    const inputStrings = [
      'abc',
      'i am a string of characters',
      'A man, a plan, a canal: Panama',
    ];
    const outputStrings = [
      'cba',
      'sretcarahc fo gnirts a ma i',
      'amanaP :lanac a ,nalp a ,nam A',
    ];

    inputStrings.forEach((str, index) => {
      const result = stringsAnswers.reverseString(str);
      expect(result).to.eql(outputStrings[index]);
    });
  });
});
