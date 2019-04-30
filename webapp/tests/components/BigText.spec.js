
import { assert } from 'chai';
import { JSDOM } from 'jsdom'
const { window } = (new JSDOM(`...`));

global.document = window.document;
global.window = window;

import BigText from '../../src/scripts/components/BigText/BigText.component'

describe('BigText class', () => {
  it('should bigText instance has inherited render method from component', () => {
    const bigText = new BigText({});
    assert.exists(bigText.render);
  });
});