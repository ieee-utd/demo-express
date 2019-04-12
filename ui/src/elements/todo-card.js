import { html } from '@polymer/polymer/polymer-element.js';
import { BaseElement } from '../base-element.js';
import '../shared-styles.js';

class TodoCard extends BaseElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div>Todo Card</div>
    `;
  }
}

window.customElements.define('todo-card', TodoCard);
