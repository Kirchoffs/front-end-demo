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