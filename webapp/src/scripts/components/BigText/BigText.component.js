import './BigText.css'
import Input from '../Component/Component';

export default class BigText extends Input {
  constructor() {
    super();
    this.init();
  }

  init() {
    this.elem = document.createElement('textarea');
    this.elem.classList.add('form-input');
  }

  appendProps(props) {
    Object.keys(props).forEach(propName => {
      if (propName === 'placeholder') {
        this.elem.placeholder = props[propName];
      }
      if (propName === 'name') {
        this.elem.name = props[name];
      } 
    });
  }
}