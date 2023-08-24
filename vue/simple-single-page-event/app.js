const app = Vue.createApp({
  data() {
    return {
      score: 0,
      name: "Hi Ben"
    };
  },
  methods: {
    increase(delta) {
      this.score = this.score + delta;
    },
    decrease(delta) {
      this.score = this.score - delta;
    },
    setName(event, greeting) {
      const name = event.target.value;
      this.name = greeting + ' ' + name.charAt(0).toUpperCase() + name.slice(1);
    },
    submitForm() {
      alert('Submitted!');
    }
  }
});

app.mount('#events');
