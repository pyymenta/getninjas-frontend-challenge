import Component from '../Component/Component';
import './StepPanelPage.css'

export default class StepPanelPage extends Component{
  constructor(id, label, headerMarkup) {
    super();
    this.label = label;
    this.active = false;
    this.idPage = id
    this.headerMarkup = headerMarkup;
    this.init();
  }

  init() {
    this.elem = document.createElement('div');
    this.elem.classList.add('step-panel___page');
    this.elem.innerHTML = this.headerMarkup || '';
  }

  addComponent(component) {
    this.elem.appendChild(component);
  }

  getContainer() {
    return this.elem;
  }

  show() {
    this.active = true;
    this.elem.style.display = 'block';
  }

  hide() {
    this.active = false;
    this.elem.style.display = 'none';
  }
}