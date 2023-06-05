import 'regenerator-runtime';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import '../styles/main.css';
import '../styles/responsive.css';

import App from './views/App';
import swRegister from './utils/sw-register';

import './components/navbar';
import './components/hero';
import './components/custom-footer';

const app = new App({
  button: document.querySelector('.menu'),
  drawer: document.querySelector('.nav-list'),
  content: document.querySelector('#main-content'),
});

const skipLink = document.querySelector('.skip-link');
const mainContent = document.querySelector('#main-content');

skipLink.addEventListener('click', (event) => {
  event.preventDefault();
  mainContent.scrollIntoView({ behavior: 'smooth' });
  skipLink.blur();
});

window.addEventListener('hashchange', () => {
  document.querySelector('.container').scrollIntoView();
  app.renderPage();
});

window.addEventListener('load', async () => {
  app.renderPage();
  await swRegister();
});
