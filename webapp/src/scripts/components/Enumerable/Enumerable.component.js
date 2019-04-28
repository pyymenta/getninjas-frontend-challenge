import './enumerable.css';
import Input from '../Input/Input.component';

export default class Enumerable extends Input {
  constructor() {
    super();
    this.init();
  }

  init() {
    this.itemList = [];
    this.elem = document.createElement('select');
    this.elem.classList.add('form-input');
  }

  addOption (text, value){
    let option = document.createElement('option');
    option.value = value;
    option.text = text;
    this.elem.add(option);
  }

  appendProps(props) {
    Object.keys(props).forEach(propName => {
      if (propName === 'placeholder') {
        this.elem.placeholder = props[propName];
      }
      if (propName === 'name') {
        this.elem.name = props[propName];
      } 
    });
  }

}