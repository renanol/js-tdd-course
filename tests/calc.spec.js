import assert from 'assert';
import { expect } from 'chai';
import { div, sum } from '../calc';

describe('Calculate', () => {
  it('Calculate sum', () => {
    assert.equal(sum(1, 2), 3);
  });

  it('Calculate div', () => {
    expect(div(2, 2)).to.equal(1);
  });
});
