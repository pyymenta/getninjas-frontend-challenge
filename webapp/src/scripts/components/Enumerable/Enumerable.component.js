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

  addOption (text, value, isPlaceholder = false){
    let option = document.createElement('option');
    option.value = value;
    option.text = text;
    if (isPlaceholder) {
      this._makeOptionPlaceholder(option);
      this._enablePlaceholding();
    }
    this.elem.add(option);
  }

  _enablePlaceholding(){
    this.elem.addEventListener('change', this._togglePlaceholder);
    this.elem.classList.add('option___placeholder');
  }

  _makeOptionPlaceholder(option) {
    option.disabled = true;
    option.selected = true;
    option.hidden = true;
  }

  _togglePlaceholder(e){
    const selectElem = e.currentTarget;
    if (selectElem.value === ''){
      selectElem.classList.add('option___placeholder');
      return;
    }
    selectElem.classList.remove('option___placeholder');
  }

  appendProps(props) {
    Object.keys(props || {}).forEach(propName => {
      if (propName === 'type') {
        return;
      }
      if (propName === 'placeholder') {
        this.addOption(props['placeholder'], '', true);
        return;
      }
      this.elem[propName] = props[propName];
    });
  }

}