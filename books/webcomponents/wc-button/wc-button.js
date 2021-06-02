import { LitElement, html, css } from 'lit-element';

class Button extends LitElement {

  static get properties() {
    return {
      form: { type: String },
      label: { type: String },
      disable: { type: String }
    };
  }

  static get styles() {
    return css `
      :host(.primary) > .button {
        position: relative;
        margin-bottom: 30px;
      }

      :host(.primary) > .button::after {
        border-bottom: 2px solid #A8A8A8;
        content: '';
        left: 0;
        position: absolute;
        top: 45px;
        width: 100%;
      }

      .button {
        align-items: center;
        background-color: #BED23C;
        border: 0;
        border-radius: 5px;
        color: #FFF;
        cursor: pointer;
        display: flex;
        font-size: 16px;
        height: 32px;
        justify-content: center;
        line-height: 24px;
        width: 252px;
      }

      .button:disabled {
        background-color: #CCC;
      }
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <button class="button" @click="${this.onSubmit}" ?disabled="${this.disable}">${this.label}</button>
    `;
  }

  onSubmit() {
    // eslint-disable-next-line no-undef
    document.querySelector(`#${this.form}`).requestSubmit();
  }
}

/* eslint-disable-next-line */
customElements.define('wc-button', Button);
