// DOM
const byId = (id) => document.getElementById(id);
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// Event
const on = (element, event, handler) =>
  element.addEventListener(event, handler);
const off = (element, event, handler) =>
  element.removeEventListener(event, handler);

export { byId, $, $$, on, off };
