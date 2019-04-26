import FormGenerator from './src/scripts';

import reset from './src/styles/reset.css';
import style from './src/styles/style.css';

document.addEventListener("DOMContentLoaded", function(event) {
  const element = document.createElement('h1')
  element.innerHTML = "Hello World"
  document.body.appendChild(element)
})