import { html, css, LitElement } from './lit.js';

export class SimpleGreeting extends LitElement {
  static styles = css`p { color: blue }`;

  static properties = {
    name: { type: String },
  };

  constructor() {
    super();
    this.name = 'Somebody';
  }

  createRenderRoot() {
    /**
     * Render template without shadow DOM. Note that shadow DOM features like
     * encapsulated CSS and slots are unavailable.
     */
    return this;
  }


  render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }
}
customElements.define('simple-greeting', SimpleGreeting);

export default function decorate(block) {
  const bl = document.createElement('simple-greeting');
  bl.name = 'Dude';
  block.appendChild(bl);
}
