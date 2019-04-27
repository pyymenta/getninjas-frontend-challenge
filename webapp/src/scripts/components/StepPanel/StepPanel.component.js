import Component from '../Component/Component';
import './StepPanel.css';

export default class StepPanel extends Component {
  constructor() {
    super();
    this.init();
  }
  
  init() {
    this.elem = document.createElement('div');
    this.elemStepButtonContainer = document.createElement('ol')
    this.elem.classList.add('step-panel');
    this.elemStepButtonContainer.classList.add('step-panel___containerButton');
    this.elem.appendChild(this.elemStepButtonContainer);
  }

  addPage(page) {
    page.render(this.elem);
    this._createAndAppendPageButton(page.label);
  }

  _createAndAppendPageButton (label)  {
    let stepButton = document.createElement('li');
    stepButton.innerText = label;
    stepButton.classList.add('step-panel___button');
    this.elemStepButtonContainer.appendChild(stepButton);
  }
}