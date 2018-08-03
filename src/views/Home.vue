<template>
    <div class="home">
        <h>{{email}}</h>

        <img src="../assets/logo2.png">
        <Main addr="ws://10.81.3.210:8083/ws"/>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Main from '@/components/Main.vue' // @ is an alias to /src

    export default Vue.extend({
        name: 'home',
        data() {
            return {
                email: this.$store.state.email
            }
        },
        components: {
            Main
        }
    })
</script>
