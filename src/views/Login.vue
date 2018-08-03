<template>
    <div class="login">
        <link href='https://fonts.googleapis.com/css?family=Open+Sans:700,600' rel='stylesheet' type='text/css'>
        <div class="box">

            <h1>{{ login }}</h1>

            <h1>Log In or Create an Account</h1>
                <input-simple input-type="email" v-on:simpleInput="onEmailInput"/>
                <input-simple input-type="password" v-on:simpleInput="onPswdInput"/>
                <button-simple btn-text="Login" v-on:simpleBtnClick="onLoginClick()"></button-simple>
                <button-simple btn-text="Facebook login" v-on:simpleBtnClick="onFbLoginClick()"/>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import ButtonSimple from "./../components/ButtonSimple.vue"
    import InputSimple from "./../components/InputSimple"
    import router from "./../router";

    export default Vue.extend({
        data() {
            return {
                email: '',
                pswd: '',
                login: ''
            }
        },
        name: 'Login',
        components: {
            ButtonSimple,
            InputSimple
        },
        methods: {
            onEmailInput(inputText) {
                this.email = inputText;
            },
            onPswdInput(inputText) {
                this.pswd = inputText;

            },
            onLoginClick: function () {
               /* this.login = 'login: ' +this.email + ' ' + 'pswd: ' + this.pswd;*/
                this.$store.commit("login", this.email);
                router.push('/');
                /*router.push('/')*/
            },
            onFbLoginClick: function () {
                router.push('/')
            },
        }
    })
</script>

<style lang="scss" scoped>

    .sb {
        float: right;
        background: #3498db;
        width: 125px;
        padding-top: 5px;
        padding-bottom: 5px;
        color: white;
        border-radius: 2px;
        margin-top: 20px;
        margin-bottom: 20px;
        margin-right: 10px;
        font-weight: 800;
        font-size: 0.8em;

        &:hover {
            background: #3594D2;
        }
    }

    p {
        font-size: 12px;
        text-decoration: none;
        color: #ffffff;
    }

    h1 {
        font-size: 20px;
        color: #525252;
    }

    .box {
        background: white;
        width: 300px;
        border-radius: 2px;
        margin: 0 auto 0 auto;
        padding: 0px 0px 70px 0px;
        border: grey 1px solid;
    }
</style>