const app = Vue.createApp({
    data() {
        return {
            alertText: 'Your input contain al least one character, one number and one sign!',
            input: '',
            confirmedInput: '',
            input2: '',
            confirmedInput2 : ''
        };
    },
    methods:{
        showAlert() {
            alert(this.alertText);
        },
        setInput(event) {
            this.input = event.target.value;
        },
        setInput2(event){
            this.input2 = event.target.value;
        },
        confirmInput() {
            this.confirmedInput = this.input;
        },
        confirmInput2() {
            this.confirmedInput2 = this.input2;
        }
    }
})

app.mount('#assignment');