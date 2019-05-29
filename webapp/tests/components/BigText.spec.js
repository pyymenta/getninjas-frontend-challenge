
import { assert } from 'chai';
import { JSDOM } from 'jsdom';
import BigText from '../../src/scripts/components/BigText/BigText.component';

const { window } = (new JSDOM('...'));

global.document = window.document;
global.window = window;

describe('BigText class', () => {
  it('should bigText instance has inherited render method from component', () => {
    const bigText = new BigText({});
    assert.exists(bigText.render);
  });
});
