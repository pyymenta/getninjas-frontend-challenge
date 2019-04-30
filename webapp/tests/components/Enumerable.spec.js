
import { assert } from 'chai';
import { JSDOM } from 'jsdom'
const { window } = (new JSDOM(`...`));

global.document = window.document;
global.window = window;

import Enumerable from '../../src/scripts/components/Enumerable/Enumerable.component'

describe('Enumerable class', () => {
  it('should enumerable instance has inherited render method from component', () => {
    const enumerable = new Enumerable({});
    assert.exists(enumerable.render);
  });
});