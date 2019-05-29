
import { assert } from 'chai';
import { JSDOM } from 'jsdom';
import Input from '../../src/scripts/components/Input/Input.component';

const { window } = (new JSDOM('...'));

global.document = window.document;
global.window = window;

describe('Input class', () => {
  it('should input instance has inherited render method from component', () => {
    const input = new Input({});
    assert.exists(input.render);
  });
});
