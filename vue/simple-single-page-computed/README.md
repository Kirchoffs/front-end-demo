# Notes
## Basic
v-bind: set the value of an attribute.  
```
<a v-bind:href="vueLink">about Vue</a>
<!-- vueLink is part of data -->
```

v-on: bind the event handler.
```
<button v-on:click="add">Add</button>
<!-- add is part of methods -->
```

## Two-Way Binding
```
<input type="text" v-model="message">
<p>{{ message }}</p>
```
