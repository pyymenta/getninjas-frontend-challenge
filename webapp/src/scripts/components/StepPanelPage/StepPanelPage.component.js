import Component from '../Component/Component';

export default class StepPanelPage extends Component{
  constructor(label, headerMarkup) {
    super();
    this.label = label;
    this.headerMarkup = headerMarkup;
    this.init();
  }

  init() {
    this.elem = document.createElement('div');
    this.elem.classList.add('step-panel___page');
    this.elem.appendChild(this.headerMarkup);
  }

  addComponent(component) {
    this.elem.appendChild(component);
  }

  show() {
    this.elem.style.display = 'block';
  }

  hide() {
    this.elem.style.display = 'none';
  }
}