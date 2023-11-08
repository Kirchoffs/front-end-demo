const app = Vue.createApp({
  data() {
    return {
      score: 0,
      name: 'Who?',
      confirmedName: 'Who?'
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
      if (!name) {
        this.name = 'Who?';
        return;
      }
      this.name = greeting + ' ' + name.charAt(0).toUpperCase() + name.slice(1);
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm() {
      alert('Submitted!');
    }
  }
});

app.mount('#events');
