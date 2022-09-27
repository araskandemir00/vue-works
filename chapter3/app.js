const app = Vue.createApp({
    data() {
        return { 
            enteredGoalValue: '',
            goals: [],
            noContentMessage: 'No goals have been added yet - please start adding some!',
            fullContentMessage: 'You have enough goals to finish - please delete some!'
        };
    },
    methods: {
        addGoal() {
            if(this.enteredGoalValue === '') {
                alert('Please fill the field properly!');
            }else if(this.goals.length < 10 && this.enteredGoalValue != ''){
                this.goals.push(this.enteredGoalValue);
            } else return;
        },
        removeGoal(indx) {
            this.goals.splice(indx, 1);
        }
    },
    computed: {}
});
  
app.mount('#user-goals');
  