
import { assert } from 'chai';
import { JSDOM } from 'jsdom'
const { window } = (new JSDOM(`...`));

global.document = window.document;
global.window = window;

import CheckList from '../../src/scripts/components/CheckList/CheckList.component'

describe('CheckList class', () => {
  it('should CheckList instance has inherited render method from component', () => {
    const checkList = new CheckList({});
    assert.exists(checkList.render);
  });
});