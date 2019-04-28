import './input.css';
import Component from '../Component/Component';

export default class Input extends Component {
  constructor(field, fieldProps) {
    super();
    this.init(field, fieldProps);
  }

  init(field, fieldProps) {
    this.createInitialStructure(field);
    this.addInitialClassStructure();
    this.appendProps(fieldProps);
  }

  createInitialStructure(field) {
    this.elem = document.createElement('div');
    this.field = field;
    this.enumerableLabel = document.createElement('label');
    this.enumerableErrorMessage = document.createElement('span');
    this.elem.appendChild(this.enumerableLabel);
    this.field.render(this.elem);
    this.elem.appendChild(this.enumerableErrorMessage);
  }

  addInitialClassStructure() {
    this.elem.classList.add('form-field', 'form-field--fluid');
    this.enumerableLabel.classList.add('form-field-label');
    this.enumerableErrorMessage.classList.add('form-field-message', 'form-field-message--invalid');
  }

  appendProps(props) {
    Object.keys(props).forEach(propName => {
      if (propName === 'label') {
        this.enumerableLabel.innerText = props[propName];
      }
    });
  }
}