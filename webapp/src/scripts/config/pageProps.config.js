import markups from './pagesMarkup';
import formValidate from '../assets/formValidate'

const pageProps = {
  'request_fields': {
    bottomButtonLabel: '1. Seu Pedido',
    headerMarkup: markups.markupPedidos,
    submmitButtonAction: formValidate.handleRequiredFieldValidationOnSubmit,
    active: true,
    sendButtonLabel: 'buscar profissionais'
  },
  'user_fields': {
    bottomButtonLabel: '2. Seus Dados',
    headerMarkup: markups.markupDados,
    submmitButtonAction: formValidate.handleFinish,
    active: false,
    sendButtonLabel: 'finalizar'
  }
}

export default {
  pageProps
}