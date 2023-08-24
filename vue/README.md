# Notes for Vue

Vue uses a declarative approach.

### Form
```
<div id="app">
    <form v-on:submit.prevent="submit">
       <button>Submit</button>
    </form>
</div>   
```

In order to prevent default behavior of form submit action, we need to wrap the form into the div tag.