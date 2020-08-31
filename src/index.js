import template from './template.mjml';
import template2 from './template2.mjml';
console.log(template);
const app = document.getElementById('app');
app.insertAdjacentHTML('afterbegin', template);