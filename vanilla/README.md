# Notes

## Font
```
body {
    font-family: Lato, sans-serif;
}
```
The font-family property specifies the font for an element.

The font-family property can hold several font names as a "fallback" system. If the browser does not support the first font, it tries the next font.

There are two types of font family names:  
• `family-name` - The name of a font-family, like "times", "courier", "arial", etc.  
• `generic-family` - The name of a generic-family, like "serif", "sans-serif", "cursive", "fantasy", "monospace".  

Start with the font you want, and always end with a generic family, to let the browser pick a similar font in the generic family, if no other fonts are available.

## Font Awesome
```
<i class="fa-solid fa-square-plus"></i>
```

## General Frontend Knowledge

1\. Basic style
```
*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

2\. CSS box-sizing  

`box-sizeing: content-box;`  
width + padding + border = actual width of an element  

`box-sizing: border-box;`  
padding and border are included in the width and height

3\. CSS unit  
vh - percentage of  viewport's height  

rem - In CSS rem stands for `root em`, a unit of measurement that represents the font size of the `root element`. This means that 1rem equals the font size of the html element, which for most browsers has a default value of `16px`. Using rem can help ensure consistency of font size and spacing throughout your UI.

4\. CSS Flex Layout  
`display: flex`

Properties:  
- justify-content: This defines the alignment along the `main axis` (X-axis).
- align-items: This defines the default behavior for how flex items are laid out along the `cross axis` (Y-axis) on the current line.
- flex: shorthand for flex-grow, flex-shrink, flex-basis.  
```
li {
    flex: 1;
}

/*
 * The code above and the code below are equivalent
 */

li {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0;
}
```

5\. CSS Background

Attribute `background` is equal to:
```
background-color  
background-image  
background-position  
background-repeat  
background-attachment  
background-clip  
background-origin  
background-size
```

6\. CSS Pseudo Elements

A CSS pseudo-element is used to style specified parts of an element.  
For example, it can be used to:
- Style the first letter, or line, of an element
- Insert content before, or after, the content of an element

```
p::first-line {}

p::first-letter {}

h1::before {}

h1::after {}
```

7\. CSS Pseudo Classes

A pseudo-class is used to define a special state of an element.  
For example, it can be used to:
- Style an element when a user mouses over it
- Style visited and unvisited links differently
- Style an element when it gets focus

```
a:link {}

a:visited {}

a:hover {}

a:active {}
```

## Code Snippet