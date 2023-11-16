# \<cat-rounded-button>

Web component to implement a styled button, with background color and rounded corners. Based on LitElement.

## Properties

- **disabled**: Boolean property to make the button disabled.

## Styles

You can customize it using CSS Custom Properties.

Custom property | Description | Default
----------------|-------------|---------
--cat-rounded-button-border-radius | Button border radius | 30px
--cat-rounded-button-background-color | Button background color | #e74c3c
--cat-rounded-button-height | Height of the button | 30px
--cat-rounded-button-text-color | Button text color | #fff
--cat-rounded-button-hover-background-color | Button hover background color | #303030
--cat-rounded-button-hover-text-color | Button hover text color | #fff
--cat-rounded-button-animation-time | Hover button color animation | 0.3s
--cat-rounded-button-padding-x | Horizontal padding | 20px
--cat-rounded-button-padding-y | Vertical padding | 5px
--cat-rounded-button-text-transform | Text transform | uppercase
--cat-rounded-button-font-size | Button text size | 1em
--cat-rounded-button-font-weight | Button font weight | normal

## Events

This component dispatch a custom event when the user clicks the button

- **cat-rounded-button-click**: there was a click in the button. If the button is in disabled state, the component do not dispatch the event.