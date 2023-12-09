const app = Vue.createApp({
  data() {
    return {
      score: 0,
      name: 'Who?',
    };
  },
  computed: {
    fullname() {
      console.log("Running...")
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Smith';
    }
  },
  methods: {
    increase(delta) {
      this.score = this.score + delta;
    },
    decrease(delta) {
      this.score = this.score - delta;
    },
  }
});

app.mount('#events');
