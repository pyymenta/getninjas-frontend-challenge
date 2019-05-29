import './src/styles/reset.css';
import './src/styles/style.css';

import config from './src/scripts/config/config';
import formObj from './src/scripts/assets/apiRequest';
import generatePanels from './src/scripts/assets/generatePanels';

const initForm = () => {
  formObj.get(config.FORM_API_URL).then((form) => {
    const container = document.querySelector('.container');
    generatePanels.render(form, container);
  });
};

document.addEventListener('DOMContentLoaded', initForm);
