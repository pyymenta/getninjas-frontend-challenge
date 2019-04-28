import Input from '../Input/Input.component';

export default class CheckList extends Input {
  constructor() {
    super();
    this.listItem = [];
    this.init();
  }

  init() {
    this.elem = document.createElement('ul');
  }

  addListItem(listItem) {
    listItem.render(this.elem);
  }
}