import './BigText.css'
import Component from '../Component/Component';

export default class BigText extends Component {
  constructor(props) {
    super();
    this.init(props);
  }

  init(props) {
    this.elem = document.createElement('textarea');
    this.elem.classList.add('form-input');
    this.appendProps(props);
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