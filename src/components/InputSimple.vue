<template>
    <input
           v-bind:type="inputType"
           v-model="inputText"
           v-bind:name="inputType"
           v-bind:value="inputType"
           v-bind:class="inputType"
           v-on:input="onInput">
</template>

<script lang="ts">
    export default {
        name: "InputSimple",
        props: ['inputType'],
        data() {
            return {
                inputText: ''
            }
        },
        methods: {
            onInput() {
                this.$emit('simpleInput', this.inputText)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .email {
        background: #ecf0f1;
        border: #ccc 1px solid;
        border-bottom: #ccc 2px solid;
        padding: 8px;
        width: 250px;
        color: #AAAAAA;
        margin-top: 10px;
        font-size: 1em;
        border-radius: 2px;
    }

    .password {
        margin-top: 10px;
        border-radius: 2px;
        background: #ecf0f1;
        border: #ccc 1px solid;
        padding: 8px;
        width: 250px;
        font-size: 1em;
    }

</style>
