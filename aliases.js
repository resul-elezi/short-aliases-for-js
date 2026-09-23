// Define short aliases
window.byId = (id) => document.getElementById(id);
window.$ = (selector) => document.querySelector(selector);
window.$$ = (selector) => document.querySelectorAll(selector);
window.log = console.log;

// use case
// const element = $('#myId');
// const elements = $$('.myClass');
// const header = byId('header');
