# Notes for Vue

Vue uses a declarative approach.

### Basic Framework
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

### Form
```
<div id="app">
    <form v-on:submit.prevent="submit">
       <button>Submit</button>
    </form>
</div>   
```

In order to prevent default behavior of form submit action, we need to wrap the form into the div tag.

### Event Modifier
Right click to trigger the event.
```
<button type="button" v-on:click.right="decrease(1)">Decrease</button>
```

Enter Key Trigger
```
<input type="text" v-on:keyup.enter="confirmInput" />
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
