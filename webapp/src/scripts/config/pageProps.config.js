import markups from './pagesMarkup';

const pageProps = {
  request_fields: {
    bottomButtonLabel: '1. Seu Pedido',
    headerMarkup: markups.markupPedidos,
    active: true,
    sendButtonLabel: 'buscar profissionais',
  },
  user_fields: {
    bottomButtonLabel: '2. Seus Dados',
    headerMarkup: markups.markupDados,
    active: false,
    sendButtonLabel: 'finalizar',
  },
};

export default {
  pageProps,
};
