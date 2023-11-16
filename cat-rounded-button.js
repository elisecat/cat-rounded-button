import { LitElement, html, css } from 'lit-element';

export class CatRoundedButton extends LitElement {

    static get styles() {
        return css`
        :host {
            display: inline-block;
        }
        button {
            border-color: transparent;
            border-radius: 30px;
            border-style: solid;
            border-width: 1px;
            box-sizing: inherit;
            cursor: pointer;
            display: inline-block;
            line-height: normal;
            margin: 0;
            padding: 5px 20px;
            position: relative;
            text-decoration: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            user-select: none;
            border-radius: var (---cat-rounded-button-height, 30px);
            font-size: 12px;
            text-transform: uppercase;
            height: var(--cat-rounded-button-animation-time, 0,3s) ease;
            background-color: var(--cat-rounded-button-background-color, #e74c3c);
            color: var(--cat-rounded-button-text-color, #fff);
        }
        button:hover {
            background-color: var(--cat-rounded-button-hover-background-color, #303030);
            color: var(--cat-rounded-button-hover-text-color, #fff);
        }
        button:disabled {
            cursor: default;
            opacity: 0.6;
            background-color: var(--cat-rounded-button-background-color, #e74c3c);
            color: var(--cat-rounded-button-text-color, #fff);
        }
        `
    }
    
    static get properties() {
        return {
          disabled: { type: Boolean }  
        };
    }

    /**
      * Instance of the element is created/upgraded. Useful for initializing
      * state, set up event listeners, create shadow dom.
      * @constructor
      */
    constructor() {
        super();
        this.disabled = false;
    }

    render() {
        return html`
        <button @click="${this.onClick}" ?disabled="${this.disabled}"><slot></slot></button>
        `;
    }

    onClick() {
        console.log('click')
        this.dispatchEvent(new CustomEvent('cat-rounded-button-click'));
    }
}
customElements.define('cat-rounded-button', CatRoundedButton);