import template from './template.mjml';
console.log(template);
const app = document.getElementById('app');
app.insertAdjacentHTML('afterbegin', template);