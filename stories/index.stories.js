import { storiesOf, html, withKnobs, withClassPropertiesKnobs } from '@open-wc/demoing-storybook';

import { CatRoundedButton } from '../cat-rounded-button.js';
import '../cat-rounded-button.js';

import readme from '../README.md';

storiesOf('cat-rounded-button', module)
  .addDecorator(withKnobs)
  .add(
    'Simple button',
    () => html`
      <cat-rounded-button>Click Here</cat-rounded-button>
      `,
  )
  .add(
    'Customized button',
    () => html`
      <style>
      *{
        box-sizing: border-box;
      }
        .customized {
          --cat-rounded-button-background-color: #004c3c;
          --cat-rounded-button-text-color: #cff;
          --cat-rounded-button-hover-background-color: #3ff;
          --cat-rounded-button-hover-text-color: #000;
          --cat-rounded-button-animation-time: 1s;
          --cat-rounded-button-height: 20px;
          --cat-rounded-button-font-size: 12px;
        }
        .c2 {
          --cat-rounded-button-font-size: 1.125em;
          --cat-rounded-button-font-weight: bold;
          --cat-rounded-button-text-transform: none;
          --cat-rounded-button-padding-x: 2.45em;
          --cat-rounded-button-padding-y: 1em;

        }
      </style>
      <cat-rounded-button class="customized">Click Here</cat-rounded-button>
      
      <cat-rounded-button class="c2">Buy now</cat-rounded-button>
      `,
  )
  .add(
    'Customized 2',
    () => html`
      <style>
        .customized {
          --cat-rounded-button-padding-x: 58px;
          --cat-rounded-button-padding-y: 10px;
          --cat-rounded-button-text-transform: none;
        }
      </style>
      <cat-rounded-button class="customized2">Search</cat-rounded-button>
      `,
  )
  .add(
    'Disabled button',
    () => html`
      <cat-rounded-button disabled id="elButton" @cat-rounded-button-click=${

        () => {
          console.log('click');
        }

      }>Disabled button</cat-rounded-button>
      <button @click=${

        () => {
          document.getElementById('elButton').disabled = false;
        }

      }>Remove disabled</button>
      `,
  )
  .add('Documentation', () => withClassPropertiesKnobs(CatRoundedButton), { notes: { markdown: readme } })