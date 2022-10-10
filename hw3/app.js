const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            firstNum: 5,
            secondNum: 1,
        }
    },
    watch: {
        counter(value) {
            if(value != 0){
                const that = this;
                setTimeout(function () {
                    that.counter = 0;
                }, 5000);
            }
        }
    },
    computed: {
        reachPoint() {
            this
            if(this.counter < 37){
                return 'Not there yet';
            }
            if(this.counter > 37){
                return 'Too much!';
            } else {
                return 'Yeay!';
            }
        }
    },
    methods: {
        add(n){
            this.counter = this.counter + n;
        }
    }
});

app.mount('#assignment');