const app = Vue.createApp({
  data() {
    return {
      score: 0,
      name: 'Who?',
      fullname: '',
    };
  },
  watch: {
    name(value) {
      this.fullname = value + ' ' + 'Robertson';
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
