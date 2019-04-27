import Component from '../Component/Component';
import './StepPanel.css';

export default class StepPanel extends Component {
  constructor() {
    super();
    this.pages = [];
    this.init();
  }

  init() {
    this._createInitialStructure();
    this._setClasses();
  }

  _createInitialStructure() {
    this.rootElem = document.createElement('div');
    this.elem = document.createElement('div');
    this.elemStepButtonContainer = document.createElement('ol')
    this.rootElem.appendChild(this.elem);
    this.rootElem.appendChild(this.elemStepButtonContainer);
  }

  _setClasses() {
    this.rootElem.classList.add('step-panel');
    this.elem.classList.add('step-panel___content');
    this.elemStepButtonContainer.classList.add('step-panel___containerButton');
  }

  render(container) {
    container.appendChild(this.rootElem);
  }

  addPage(page) {
    page.render(this.elem);
    let createdButton = this._createAndAppendPageButton(page);
    let pageObject = { page, pageButton: createdButton }
    createdButton.addEventListener('click', () => {
      this.setActivePage(page.idPage);
    });
    this.pages.push(pageObject);
    console.log(this.pages);
  }

  setActivePage(pageId) {
    this.pages.forEach(currentPage => {
      if (pageId === currentPage.page.idPage) {
        this._enablePage(currentPage);
        return;
      }
      this._disablePage(currentPage);
    });
  }

  _enablePage(page) {
    page.page.show();
    page.pageButton.classList.add('step-panel___button--active');
  }

  _disablePage(page) {
    page.page.hide();
    page.pageButton.classList.remove('step-panel___button--active');
  }

  _createAndAppendPageButton(page) {
    let stepButton = document.createElement('li');
    stepButton.innerText = page.label || '';
    stepButton.classList.add('step-panel___button');
    this.elemStepButtonContainer.appendChild(stepButton);
    return stepButton;
  }
}