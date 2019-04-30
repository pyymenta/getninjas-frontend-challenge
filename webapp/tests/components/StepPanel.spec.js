
import { assert } from 'chai';
import { JSDOM } from 'jsdom'
const { window } = (new JSDOM(`...`));

global.document = window.document;
global.window = window;

import StepPanel from '../../src/scripts/components/StepPanel/StepPanel.component'

describe('StepPanel class', () => {
  it('should stepPanel instance has inherited render method from component', () => {
    const stepPanel = new StepPanel({})
    assert.exists(stepPanel.render);
  });
});