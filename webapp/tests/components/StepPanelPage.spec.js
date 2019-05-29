
import { assert } from 'chai';
import { JSDOM } from 'jsdom';
import SpecPanelPage from '../../src/scripts/components/StepPanelPage/StepPanelPage.component';

const { window } = (new JSDOM('...'));

global.document = window.document;
global.window = window;

describe('TextField class', () => {
  const specPanelPage = new SpecPanelPage('idPage', { bottomButtonLabel: 'label' });
  it('should specPanelPage instance has inherited render method from component', () => {
    assert.exists(specPanelPage.render);
  });
});
