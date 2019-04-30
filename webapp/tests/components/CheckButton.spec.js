
import { assert } from 'chai';
import { JSDOM } from 'jsdom'
const { window } = (new JSDOM(`...`));

global.document = window.document;
global.window = window;

import CheckButton from '../../src/scripts/components/CheckButton/CheckButton.component'

describe('CheckButton class', () => {
  it('should checkButton instance has inherited render method from component', () => {
    const checkButton = new CheckButton({});
    assert.exists(checkButton.render);
  });
});