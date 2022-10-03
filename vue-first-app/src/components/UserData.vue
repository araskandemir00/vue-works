<template>
    <section>
        <form @submit.prevent="submitData">
            <div>
                <input type="text" v-model="enteredName"/>
                <input type="text" v-model="enteredAge"/>
            </div>
            <button @click="submitData">Change User Data</button>
        </form>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                enteredName: '',
                enteredAge: '',
            };
        },
        methods: {
            submitData() {
                this.$$emit('set-data', this.enteredName, this.enteredAge);
            }
        }
    }
</script>