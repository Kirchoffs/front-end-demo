const app = Vue.createApp({
  data() {
    return {
      score: 0,
      name: 'Who?',
      confirmedName: 'Who?',
      message: 'What?',
    };
  },
  methods: {
    increase(delta) {
      this.score = this.score + delta;
    },
    decrease(delta) {
      this.score = this.score - delta;
    },
    setName(event) {
      const name = event.target.value;
      if (!name) {
        this.name = 'Who?';
        return;
      }
      this.name = name.charAt(0).toUpperCase() + name.slice(1);
    },
    confirmInput(greeting) {
      this.confirmedName = greeting + ' ' + this.name;
    },
    submitForm() {
      alert('Submitted!');
    },
    outputAll() {
      return this.name + ': ' + this.message;
    }
  }
});

app.mount('#events');
