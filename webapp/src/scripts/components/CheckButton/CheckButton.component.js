import './CheckButton.css';

export default class CheckButton {
  constructor(props) {
    this.init();
    this.addInitialClassStructure();
    this.appendProps(props || {});
    this.selected = false;
  }
  
  render(container) {
    container.appendChild(this.elem)
  }

  init() {
    this.elem = document.createElement('li');
    this.checkbox = document.createElement('input');
    this.checkbox.type = 'checkbox';
    this.label = document.createElement('label');
    this.elem.appendChild(this.checkbox);
    this.elem.appendChild(this.label);
  }

  addInitialClassStructure() {
    this.elem.classList.add('form-check');
    this.checkbox.classList.add('form-input');
  }

  appendProps(props) {
    if (props.name) {
      this.checkbox.name = props.name;
    }
    if (props.value) {
      this.checkbox.value = props.value;
    }
    if (props.required) {
      this.checkbox.required = true;
    }
    if (props.label) {
      this.label.innerText = props.label;
    }
  }

  isSelect() {
    return this.selected;
  }

}