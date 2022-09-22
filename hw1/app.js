const app = Vue.createApp({
    data() {
        return {
            name: 'Aras',
            age: 31,
            favoriteNUm: 'Favorite Number: ',
            imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Ataturk1930s.jpg/666px-Ataturk1930s.jpg',
            input: 'Atatürk'
        };
    },
    methods: {
        favoriteNumber() {
            const randomNumber = Math.random();
            return this.favoriteNUm + randomNumber;
        },
        newAge(n) {
            const newage = this.age + n;
            return newage;
        }
    }
});

app.mount('#assignment');