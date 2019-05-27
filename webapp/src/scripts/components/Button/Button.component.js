import './Button.css';
import Component from '../Component/Component';

export default class Button extends Component{
  constructor(label) {
    super();
    this.init(label);
  }

  init(label) {
    this.elem = document.createElement('button');
    this.elem.classList.add('btn', 'btn--fluid', 'btn--high-contrast', 'btn--regular', 'space-box-medium');
    this.elem.innerText = label;
  }

  addAction(handle = () => {}) {
    this.elem.addEventListener('click', handle);
  }
}