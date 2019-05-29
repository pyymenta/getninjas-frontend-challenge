import Component from '../Component/Component';
import './StepPanelPage.css';

export default class StepPanelPage extends Component {
  constructor(id, pageProps) {
    super();
    this.label = pageProps.bottomButtonLabel || '';
    this.active = false;
    this.idPage = id || '';
    this.headerMarkup = pageProps.headerMarkup;
    this.init();
  }

  init() {
    this.elem = document.createElement('fieldset');
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
