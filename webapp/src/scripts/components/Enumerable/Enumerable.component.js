import './enumerable.css';
import Component from '../Component/Component';

export default class Enumerable extends Component{
  constructor(props) {
    super();
    this.init(props);
  }

  init(props) {
    this.itemList = [];
    this.elem = document.createElement('select');
    this.elem.classList.add('form-input');
    this.appendProps(props);
  }

  addOption (text, value){
    let option = document.createElement('option');
    option.value = value;
    option.text = text;
    this.elem.add(option);
  }

  appendProps(props) {
    Object.keys(props || {}).forEach(propName => {
      if (propName === 'required') {
        this.elem.required = props[propName] ? true : false;
        return;
      }
      if (propName === 'type') {
        return;
      }
      this.elem[propName] = props[propName];
    });
  }

}