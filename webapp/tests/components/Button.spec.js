
import { assert } from 'chai';
import { JSDOM } from 'jsdom';
import Button from '../../src/scripts/components/Button/Button.component';

const { window } = (new JSDOM('...'));

global.document = window.document;
global.window = window;

describe('Button class', () => {
  it('should button instance has inherited render method from component', () => {
    const button = new Button('button 1');
    assert.exists(button.render);
  });
});
