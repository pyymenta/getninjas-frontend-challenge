import './input.css';
import formValidate from '../../assets/formValidate';
import Component from '../Component/Component';

export default class Input extends Component {
  constructor(field, fieldProps) {
    super();
    this.field = field;
    this.init(this.field, fieldProps);
  }

  init(field, fieldProps) {
    this.createInitialStructure(field);
    this.addInitialClassStructure();
    this.appendProps(fieldProps);
  }

  createInitialStructure(field) {
    this.createElements();
    this.composeElemObject();
    if (this.field instanceof Component) {
      this.setupFieldListeners(field);
    }
  }

  createElements() {
    this.elem = document.createElement('div');
    this.enumerableLabel = document.createElement('label');
    this.enumerableErrorMessage = document.createElement('span');
  }

  composeElemObject() {
    this.elem.appendChild(this.enumerableLabel);
    if (this.field instanceof Component) {
      this.field.render(this.elem);
    }
    this.elem.appendChild(this.enumerableErrorMessage);
  }

  addInitialClassStructure() {
    this.elem.classList.add('form-field', 'form-field--fluid');
    this.enumerableLabel.classList.add('form-field-label');
    this.enumerableErrorMessage.classList.add('form-field-message', 'form-field-message--invalid');
  }

  appendProps(props) {
    Object.keys(props || {}).forEach((propName) => {
      if (propName === 'label') {
        this.enumerableLabel.innerText = props[propName];
      }
    });
  }

  setupFieldListeners(field) {
    if (field.elem.required) {
      field.elem.addEventListener('blur', formValidate.handleValidationRequiredField(this));
    }
  }
}
