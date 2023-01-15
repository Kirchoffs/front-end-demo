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
      this.name = greeting + ' ' + event.target.value;
    }
  }
});

app.mount('#events');
