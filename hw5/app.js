const app = Vue.createApp ({
    data() {
        return {
            enteredTaskValue: '',
            tasks: [],
            noTaskMessage: 'No tasks have been added yet - please start adding some!',
            fullTaskMessage: 'You have enough tasks to finish - please delete some!',
            emptyAlertMessagge: 'Please fill the field properly',
            visibility: true,
        }
    },
    computed: {
        handleClass() {
            return {
                visible: this.visibility,
                hidden: !this.visibility,
            };
        }
    },
    methods: {
        addTask() {
            if(this.enteredTaskValue === '') {
                alert( this.emptyAlertMessagge );
            } else if(this.tasks.length < 10){
                this.tasks.push(this.enteredTaskValue);
                this.enteredTaskValue = '';
            } else return;
        },
        handleVisibility() {
            this. visibility = !this. visibility;
        },
    },
});

app.mount('#assignment');