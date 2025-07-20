# Notes
## Vue
### Get Started
```
>> mkdir todo-list
>> cd todo-list
>> npm create vite@latest . -- --template vue

>> npm install
>> npm run dev
```

### v-model
```html
<input v-model="message" />
```

Above is a shortcut for:
```html
<input 
  :value="message" 
  @input="message = $event.target.value" 
/>
```

```html
<input 
  v-bind:value="message" 
  v-on:input="message = $event.target.value" 
/>
```

### : and v-bind
`:` is a shortcut for `v-bind:`.

### @ and v-on
`@` is a shortcut for `v-on:`.

#### submit.prevent
```html
<form @submit.prevent="addTodo">
```

```html
<form v-on:submit.prevent="addTodo">
```

#### click
```html
<button class="delete" @click="removeTodo(todo)">Delete</button>
```

```html
<button class="delete" v-on:click="removeTodo(todo)">Delete</button>
```

### Static Class and Dynamic Class
```html
<span class="bubble business"></span>
```

```html
<span :class="`bubble ${todo.category}`"></span>
```
