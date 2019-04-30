
import { assert } from 'chai';
import { JSDOM } from 'jsdom'
const { window } = (new JSDOM(`...`));

global.document = window.document;
global.window = window;

import TextField from '../../src/scripts/components/TextField/TextField.component'

describe('TextField class', () => {
  it('should textfield instance has inherited render method from component', () => {
    const textfield = new TextField({})
    assert.exists(textfield.render);
  });
});