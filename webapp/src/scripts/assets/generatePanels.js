import configPageProp from '../config/pageProps.config';
import componentsFactory from './formComponentsFactory';

const _pageProps = configPageProp.pageProps;

const _generateField = (fieldProps) => {
  if (fieldProps.type) {
    switch (fieldProps.type) {
      case 'enumerable': return componentsFactory.generate.populatedEnumerate(fieldProps, true);
      case 'big_text': return componentsFactory.generate.bigText(fieldProps);
      case 'checkbox': return componentsFactory.generate.populatedCheckList(fieldProps);
      default: return componentsFactory.generate.textField(fieldProps);
    }
  }
  return componentsFactory.generate.textField(fieldProps);
};

const _generatePage = (pageId, pageObject) => {
  const page = componentsFactory.generate.stepPanelPage(pageId, _pageProps[pageId]);
  pageObject.forEach((fieldProps) => {
    _generateField(fieldProps).render(page.getContainer());
  });
  const pageButton = componentsFactory.generate.button(_pageProps[pageId].sendButtonLabel);
  pageButton.render(page.getContainer());
  return page;
};

const _generatePages = (stepPanel, panelObject) => {
  Object.entries(panelObject).forEach(([pageId, pageObject]) => {
    stepPanel.addPage(_generatePage(pageId, pageObject));
    if (_pageProps[pageId].active) {
      stepPanel.setActivePage(pageId);
    }
  });
};

const generatePanels = (apiObj, container) => {
  Object.entries(apiObj).forEach(([, panelObject]) => {
    const stepPanel = componentsFactory.generate.stepPanel();
    stepPanel.render(container);
    _generatePages(stepPanel, panelObject);
  });
};

export default {
  render: generatePanels,
};
