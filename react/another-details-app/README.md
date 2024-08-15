# Notes

## Run
```
>> npm start
```

## Dependencies
```
>> npm install prop-types

>> npm install -D tailwindcss postcss autoprefixer
>> npx tailwindcss init -p
>> npm install tailwind-merge

>> npm install classnames

>> npm install react-icons
```

## Tailwind
Steps:
- Decide on a new styling rule you want to add
- Go to tailwindcss.com/docs
- Smash Control + K (or Command + K) as hard as possible
- Search for your styling rule
- Add appropriate className to your elements

## CSS
### CSS Box Model
Border controlled by:
- border-width
- border-color

Padding controlled by:
- padding
- background-color

## Plain JavaScript
### Document-wide Event Listener
```
const handleClick = (event) => {
  console.log(event.target);
};

document.addEventListener("click", handleClick);
```

### Event Capturing and Bubbling
When an event occurs, browser wants to find event handlers to call, the order is: capturing phase -> target phase -> bubbling phase.

For body -> div -> button, if we click button, the order is:
- Capturing (frequently disabled): body (most parent) -> div
- Target: button
- Bubbling: div (immediate parent) -> body

We very often disbale capturing phase entirely, so we only have bubbling phase.
```
document.addEventListener("click", handleClick);        // For bubbling phase
document.addEventListener("click", handleClick, true);  // For capturing phase
document.addEventListener("click", handleClick, false); // For bubbling phase
```

### Dropdown
```
const dropdown = document.querySelector(".dropdown");

const handleClick = (event) => {
  if (dropdown.contains(event.target)) {
    console.log("Inside dropdown");
  } else {
    console.log("Outside dropdown");
  }
};

document.addEventListener("click", handleClick, true);
```

For `document.addEventListener("click", handleClick, true);`, true means enabling capturing phase, false means disabling capturing phase and enabling bubbling phase.

### Time
```
performance.now(); // Returns time in milliseconds since the page was loaded
```

## React 
### React Icons
```
import { GoChevronDown } from "react-icons/go";

return (
  <GoChevronDown />
);
```
