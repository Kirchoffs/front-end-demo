# Notes for Vue

Vue uses a declarative approach.

### Get Started
#### Script Tag
Just put below script tag in the HTML
```
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
```

#### Vite
```
>> npm create vite@latest todo-list -- --template vue

>> cd todo-list
>> npm install
>> npm run dev
```

#### create-vue
```
>> npm create vue@latest todo-list

>> cd todo-list
>> npm install
>> npm run dev
```

### Basic Framework
```
<div id="app">
  <h1>{{ counter }}</h1>
  <button v-on:click="increase">Increase</button>
  <button v-on:click="decrease">Decrease</button>
</div>
```

```
const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increase() {
      this.counter++;
    },
    decrease() {
      this.counter--;
    },
  },
});

app.mount('#app');
```

`{{ counter }}` is the interpolation syntax (also called mustache). It is used to display the value of the counter variable.

### Basic Elements
- The `$el` object represents the root DOM node of the Vue component. The `$el` object does not exist until the Vue application is mounted.

- Interpolation: double curly braces

- Bind data - v-bind (:)

- Listen for events - v-on (@)

### Form
```
<div id="app">
    <form v-on:submit.prevent="submit">
       <button>Submit</button>
    </form>
</div>   
```

In order to prevent default behavior of form submit action, we need to wrap the form into the div tag.

### Event
```
<input type="text" v-on:click="clickOperation" />

<input type="text" v-on:keydown="keydownOperation" />
```

#### Difference between keydown and keyup
- keydown: fires when the user depresses a key. It repeats while the user keeps the key depressed.
- keyup: fires when the user releases a key.

### Event Modifier
Right click to trigger the event.
```
<button type="button" v-on:click.right="decrease(1)">Decrease</button>
```

Enter Key Trigger
```
<input type="text" v-on:keyup.enter="confirmInput" />
```

### Computed Property

### Watcher Property

### Directive
- Attributes with __v-__ prefix
- Take arguments v-__bind__
- Single JavaScript expressions
- Reactive

```
<img v-bind:src="imgSrc" v-bind:alt="imgAlt" />
<img :src="imgSrc" :alt="imgAlt" />
```

### Short Hand
#### @click is short for v-on:click
```
<button v-on:click="click()">button</button>

<button @click="click()">button</button>
```

#### :value is short for v-bind:value
```
<input type="text" v-bind:value="inputValue" @input="updateInputValue()">

<input type="text" :value="inputValue" @input="updateInputValue()">
```

#### :style is short for v-bind:style
```
<div class="demo" :style="{borderColor: boxASelected ? 'red' : 'LightGrey'}" @click="boxSelected('A')"></div>
```

```
<div class="demo" :style="{'border-color': boxASelected ? 'red' : 'LightGrey'}" @click="boxSelected('A')"></div>
```

#### :class is short for v-bind:class
```
<div :class="boxASelected ? 'demo active' : 'demo'" @click="boxSelected('A')"></div>
```

```
<div :class="{demo: true, active: boxASelected}" @click="boxSelected('A')"></div>
```

```
<div class="demo" :class="{active: boxASelected}" @click="boxSelected('A')"></div>
```
