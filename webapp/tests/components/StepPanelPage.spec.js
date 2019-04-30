
import { assert } from 'chai';
import { JSDOM } from 'jsdom'
const { window } = (new JSDOM(`...`));

global.document = window.document;
global.window = window;

import SpecPanelPage from '../../src/scripts/components/StepPanelPage/StepPanelPage.component';

describe('TextField class', () => {
  const specPanelPage = new SpecPanelPage('idPage', {bottomButtonLabel: 'label'});
  it('should specPanelPage instance has inherited render method from component', () => {
    assert.exists(specPanelPage.render);
  });
});