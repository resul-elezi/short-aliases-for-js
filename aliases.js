/*
 * Short aliases for JavaScript
 * @version: 0.0.1
 * @author: Resul Elezi
 * @license: Licensed under MIT (github.com/resul-elezi/short-aliases-for-js/blob/main/LICENSE)
 * Copyright 2026 Resul Elezi.
 */

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
