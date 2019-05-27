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
    this.elem = document.createElement('form');
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

  getForm() {
    return this.elem;
  }

  addPage(page) {
    page.render(this.elem);
    let createdButton = this._createAndAppendPageButton(page);
    let pageObject = { page, pageButton: createdButton }
    createdButton.addEventListener('click', () => {
      this.setActivePage(page.idPage);
    });
    this.pages.push(pageObject);
    this._enableOnlyFirstPage();
  }

  _enableOnlyFirstPage() {
    this.pages.forEach((page, index) => {
      index === 0 ? this._enablePage(page) : this._disablePage(page);
    })
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

  goNext(currentPageId = '') {
    const currentPageIndex = this.pages.indexOf(currentPageId);
    if (currentPageIndex === -1) {
      return;
    }
    if (currentPageIndex < this.pages.length) {
      this.setActivePage(this.pages[currentPageId + 1]);
    }
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