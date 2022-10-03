<template>
    <section>
        <h2>{{ username }}</h2>
        <h2>{{ userage }}</h2>
    </section>
</template>

<script>
    export default {
        props: {
            username: {
                type: String,
                required: true
            },
            userage: {
                type: Number,
                required: true
            },
        }
    }
</script>