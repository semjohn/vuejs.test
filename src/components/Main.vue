<template>
  <div class="hello">
    <h1>Соединение установлено</h1>
    <p class="pt">
      Ожидание событий от сервера {{addr}}
    </p>
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Main',
  props: {
    addr: String
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

.pt {
    color: black !important;
}

a {
  color: #42b983;
}
</style>
