import Component from '../Component/Component';

export default class CheckList extends Component {
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
    this.listItem.push(listItem);
  }
}