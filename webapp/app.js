import './src/styles/reset.css'
import './src/styles/style.css'

import StepPanel from './src/scripts/components/StepPanel/StepPanel.component'
import StepPanelPage from './src/scripts/components/StepPanelPage/StepPanelPage.component'
import markups from './src/pagesMarkup'
import config from './src/scripts/config';
import formComponents from './src/scripts/formComponents';

const pageProps = {
  'request_fields': {
    bottomButtonLabel: '1. Seu Pedido',
    headerMarkup: markups.markupPedidos,
    active: true,
    sendButtonLabel: 'buscar profissionais'
  },
  'user_fields': {
    bottomButtonLabel: '2. Seus Dados',
    headerMarkup: markups.markupDados,
    active: false,
    sendButtonLabel: 'finalizar'
  }
}

const initForm = () => {
  fetch(config.FORM_API_URL).then(res => {
    return res.json();
  }).then(json => {
    const container = document.querySelector('.container');
    generatePanels(json, container);  
  })
  
}

const generatePanels = (apiObj, container) => {
  Object.entries(apiObj).forEach(([panel, panelObject]) => {
    const stepPanel = new StepPanel();
    stepPanel.render(container);
    generatePages(stepPanel, panelObject);
  });
}

const generatePages = (stepPanel, panelObject) => {
  Object.entries(panelObject).forEach(([pageId, pageObject]) => {
    stepPanel.addPage(generatePage(pageId, pageObject))
    if (pageProps[pageId].active) { 
      stepPanel.setActivePage(pageId);
    }
  })
}

const generatePage = (pageId, pageObject) => {
  const page = new StepPanelPage(pageId, pageProps[pageId]);
  pageObject.forEach(fieldProps => {
    generateField(fieldProps).render(page.getContainer());
  });
  const pageButton = formComponents.generate.button(pageProps[pageId].sendButtonLabel);
  pageButton.render(page.getContainer());
  return page;
}

const generateField = (fieldProps) => {
  if (fieldProps.type) {
    switch(fieldProps.type) {
      case 'enumerable': return formComponents.generate.populatedEnumerate(fieldProps, true);
      case 'big_text': return formComponents.generate.bigText(fieldProps);
      case 'checkbox': return formComponents.generate.populatedCheckList(fieldProps);
      case 'small_text', 'cep', 'email', 'phone': return formComponents.generate.textField(fieldProps);
    }
  }
  return formComponents.generate.textField(fieldProps);
}

document.addEventListener('DOMContentLoaded', initForm);