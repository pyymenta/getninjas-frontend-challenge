import './src/styles/reset.css'
import './src/styles/style.css'

import StepPanel from './src/scripts/components/StepPanel/StepPanel.component'
import StepPanelPage from './src/scripts/components/StepPanelPage/StepPanelPage.component'

const stepPanel = new StepPanel();
const markupPedidos = `
    <div class="header-markup">
      <h2 class="header-markup___title">Explique o que você precisa
        <small>Peça o orçamento grátis, online!</small>
      </h2>
    </div>
`;

const markupDados = `
    <div class="header-markup">
      <div class="header-markup___content-wrapper">
        <img src="img/phone_call.svg" class="header-markup___header-image" alt="Ilustração de um celular vibrando.">
        <h2 class="header-markup___header-info">
          Estamos quase lá
          <small>Não perca tempo ligando para vários profissionais. Preencha os dados abaixo e 
            <strong>nós encontraremos os melhores pra você!</strong>
          </small>
        </h2>
      </div>
    </div>
`;
const page = new StepPanelPage('request_fields', '1. Seu Pedido', markupPedidos);
const page2 = new StepPanelPage('user_fields', '2. Seus Dados', markupDados);
stepPanel.addPage(page);
stepPanel.addPage(page2);
stepPanel.setActivePage(page.idPage);

const initForm = () => {
  const container = document.querySelector('.container');
  stepPanel.render(container);
}

document.addEventListener('DOMContentLoaded', initForm);