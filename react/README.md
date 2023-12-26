# Notes for React

## Getting Started
```
>> npx create-react-app@latest prj
>> cd prj
>> npm start
```

## React Hooks
```
useEffect(() => {
    console.log("Hi");
}, []);
```
It runs only once when components first render.

## React CSS
You can import it in JS file:
```
import './style.css';
```
Or you can add it in public/index.html
```
<link rel="stylesheet" type="text/css" href="%PUBLIC_URL%/style.css" />
```

## Package.json
### Semver
~version "Approximately equivalent to version", will update you to all future patch versions, without incrementing the minor version. ~1.2.3 will use releases from 1.2.3 to <1.3.0.

^version "Compatible with version", will update you to all future minor/patch versions, without incrementing the major version. ^2.3.4 will use releases from 2.3.4 to <3.0.0.

## React Class Components
### Difference between `Component` and `PureComponent`
The PureComponent class is an extension of Component that provides an automatic shallow prop and state comparison to determine if a re-render is necessary. When a PureComponent updates, it performs a shallow comparison of the current props and state with the previous props and state. If there are no changes, it prevents re-rendering, optimizing performance by avoiding unnecessary rendering and reconciliation.

The shallow comparison means that it compares the references of the props and state objects, as well as the primitive values within them. If the references and primitive values are the same, React assumes that the component does not need to be re-rendered.

It's important to note that this shallow comparison may not be suitable for all scenarios. If your component's props or state contain complex data structures or nested objects, the shallow comparison may not detect deep changes. In such cases, you should avoid using PureComponent and use Component instead or consider implementing your own `shouldComponentUpdate` method to perform a more in-depth comparison.

## Event Handler
### Event Handler
#### Longhand Version
```
const handleClick = () => {
    console.log("I was clicked");
}

<div onClick={handleClick}></div>
```

#### Shorthand Version
```
<div onClick={() => console.log("I was clicked")}></div>
```

## React Minor Points
- React does not print booleans, nulls, undefined.

## JS Minor Points
- `||` gives back the first truthy value, or the last value if all are falsy.
- `&&` gives back the first falsy value, or the last value if all are truthy.
