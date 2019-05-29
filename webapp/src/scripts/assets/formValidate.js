/* eslint-disable no-param-reassign */
const handleValidationRequiredField = messageErrorContext => function (e) {
  e.preventDefault();
  if (e.target.value) {
    messageErrorContext.enumerableErrorMessage.innerText = '';
    return;
  }
  messageErrorContext.enumerableErrorMessage.innerText = 'Campo requerido!';
};

export default {
  handleValidationRequiredField,
};
