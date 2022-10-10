const app = Vue.createApp({
    data() {
        return {
            inputClass: '',
            visibility: true,
            inputBackground: ''
        }
    },
    computed: {
        handleClass() {
            return {
                user1: this.inputClass === 'user1',
                user2: this.inputClass === 'user2',
                visible: this.visibility,
                hidden: !this.visibility
            };
        },
    },
    methods: {
        toggleVisible() {
            this.visibility = !this.visibility;
        },
    },
});

app.mount('#assignment');