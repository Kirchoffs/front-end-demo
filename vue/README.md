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
