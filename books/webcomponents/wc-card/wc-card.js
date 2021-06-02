import { LitElement, html, css } from 'lit-element';

class Card extends LitElement {

  static get properties() {
    return {
      title: { type: String },
      author: { type: String },
      cover: { type: String },
      alt: { type: String }
    };
  }

  static get styles() {
    return css `
      * {
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        margin: 0;
        padding: 0;
      }

      .book {
        box-shadow: 4px 4px 15px 2px rgb(0 0 0 / 50%);
        margin: 20px;
        max-width: 182px;
        padding: 20px;
        transition: transform .5s;
        width: 100%;
      }

      .book:hover {
        transform: scale(1.1);
      }
  
      .cover {
        height: auto;
        width: 142px;
      }
  
      .book-info {
        display: flex;
        flex-direction: column;
        margin-top: 10px;
      }

      .title {
        font-size: 16px;
        font-weight: bold;
        line-height: 18px;
      }
      
      .sub-head {
        color: #828282;
        font-size: 14px;
        line-height: 28px;
      }
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="book">
        <img class="cover" src="${this.cover}" alt="${this.alt}">
        <div class="book-info">
          <h6 class="title">${this.title}</h6>
          <span class="sub-head">${this.author}</span>
        </div>
      </div>
    `;
  }
}

/* eslint-disable-next-line */
customElements.define('wc-card', Card);
