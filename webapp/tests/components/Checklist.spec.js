
import { assert } from 'chai';
import { JSDOM } from 'jsdom';
import CheckList from '../../src/scripts/components/CheckList/CheckList.component';

const { window } = (new JSDOM('...'));

global.document = window.document;
global.window = window;

describe('CheckList class', () => {
  it('should CheckList instance has inherited render method from component', () => {
    const checkList = new CheckList({});
    assert.exists(checkList.render);
  });
});
