/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { html } from '@polymer/polymer/polymer-element.js';
import { BaseElement } from './base-element.js';
import './elements/todo-card.js';
import './shared-styles.js';

class MyView1 extends BaseElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
        .main {
          width: 100%;
          text-align: center;
        }
      </style>

      <div class="main">
        <h1>TODO</h1>
        <todo-card></todo-card>
      </div>
    `;
  }

  ready() {
    super.ready()

    this._get('/whoosh')
    .then((data) => {
      console.log(data)
    })
    .catch((e) => {
      console.error(e)
    })
  }
}

window.customElements.define('my-view1', MyView1);
