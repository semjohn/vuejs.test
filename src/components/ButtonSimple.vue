<template id="button-simple">
   <button class="sb" v-on:click=onClick()>{{ btnText}} </button>
</template>

<script lang="ts">
    export default {
        template: "#button-simple",
        name: "ButtonSimple",
        data: function () {
            return {
                count: 0
            }
        },
        props: ['btnText'],
        methods: {
            onClick: function() {
              this.$emit('simpleBtnClick')
            }
        }
    }
</script>

<style scoped lang="scss">
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
</style>