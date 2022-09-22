const app = Vue.createApp({
    data() {
      return {
        counter: 10,
        addMuch: 5,
        reduceMuch: 5,
        name: '',
        confirmedName: '',
        surname: 'Kandemir'
      };
    },
    methods:{
        confirmInput() {
            this.confirmedName = this.name;
        },
        submitForm() {
            alert('Submitted!');
        },
        setName(event, lastName) {
            this.name = event.target.value + ' ' + lastName; 
        },
        add(n) {
            this.counter = this.counter +  n;
        },
        reduce(n) {
            this.counter = this.counter - n;
        }
    }
  });
  
  app.mount('#events');
  