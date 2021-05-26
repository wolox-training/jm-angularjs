import { LitElement, html } from 'lit-element';
class HelloWorld extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`<span>This is a LitElement component, hello world!</span>`;
  }
}

/* eslint-disable-next-line */
customElements.define('wc-hello-world', HelloWorld);
