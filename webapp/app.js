import './src/styles/reset.css'
import './src/styles/style.css'

import StepPanel from './src/scripts/components/StepPanel/StepPanel.component'
import StepPanelPage from './src/scripts/components/StepPanelPage/StepPanelPage.component'

const stepPanel = new StepPanel();

const page = new StepPanelPage('balão', document.createElement('div'));
const page2 = new StepPanelPage('balão 2', document.createElement('div'));
stepPanel.addPage(page);
stepPanel.addPage(page2);

const initForm = () => {
  const container = document.querySelector('.container');
  stepPanel.render(container);
}

document.addEventListener('DOMContentLoaded', initForm);