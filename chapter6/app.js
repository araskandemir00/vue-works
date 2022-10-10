const app = Vue.createApp({
    data() {
        return {
            friends: [
                {
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: '0123 5678 991',
                    email: 'manuel@localhost.com'
                },
                {
                    id: 'julie',
                    name: 'Julie Jones',
                    phone: '09876 543 221',
                    email: 'julie@localhost.com'
                },
            ]
        }
    },
});

app.component('friend-contact', {
    template: `
        <li>
          <h2>{{ friend.name }}</h2>
          <button @click="toggleDetails()">{{ buttonNameVisibility }} Details</button>
          <ul v-if="detailsVisibility">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }} </li>
          </ul>
        </li>
    `,
    data() {
        return { 
            detailsVisibility: false,
            friend: {
                id: 'manuel',
                name: 'Manuel Lorenz',
                phone: '0123 5678 991',
                email: 'manuel@localhost.com'
            }
        
        };
    },
    methods: {
        toggleDetails() {
            this.detailsVisibility = !this.detailsVisibility;
        },
    },
    computed: {
        buttonNameVisibility() {
            if(this.detailsVisibility === true) {
                return 'Hide';
            } else return 'Show';
        }
    }
});

app.mount('#app');