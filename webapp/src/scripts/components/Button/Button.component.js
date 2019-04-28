import './Button.css';

export default class Button {
  constructor(label) {
    this.init(label);
  }
  
  render(container) {
    container.appendChild(this.elem);
  }

  init(label) {
    this.elem = document.createElement('button');
    this.elem.classList('btn', 'btn--fluid', 'btn--high-contrast', 'btn--regular');
    this.elem.innerText = label;
  }
}