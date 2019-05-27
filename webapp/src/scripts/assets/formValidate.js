const handleValidationRequiredField = (messageErrorContext) => {
  return function(e) {
    e.preventDefault();
    if (e.target.value) {
      messageErrorContext.enumerableErrorMessage.innerText = '';
      return;
    }
    messageErrorContext.enumerableErrorMessage.innerText = 'Campo requerido!';
  }
}

const handleRequiredFieldValidationOnSubmit = (panel, pageId) => {
  return (e) => {
    panel.getForm
    if(panel.getForm().checkValidity().valid) {
      panel.goNext(pageId);
    }
  }
}

const handleFinish = (callback = () => {}) => {
  return (e) => {
    callback();
    console.log('me contrata plxx, nunca pedi nada');
  }
}

export default {
  handleValidationRequiredField,
  handleRequiredFieldValidationOnSubmit,
  handleFinish
}