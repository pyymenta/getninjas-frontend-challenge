
import { assert } from 'chai';
import { JSDOM } from 'jsdom'
const { window } = (new JSDOM(`...`));

global.document = window.document;
global.window = window;

import Button from '../../src/scripts/components/Button/Button.component'

describe('Button class', () => {
  it('should button instance has inherited render method from component', () => {
    const button = new Button('button 1');
    assert.exists(button.render);
  });
});