<template>
  <div id="users">
    <h1 class="title">一覧検索（デモ）</h1>
    <div class="container">
      <v-client-table :data="users" :columns="columns" :options="options"></v-client-table>
    </div>
  </div>
</template>
<script>
const axios = require('axios');
import {ServerTable, ClientTable, Event} from 'vue-tables-2';

export default {
  components: { ClientTable },
  data () {
    return {
      columns: ['id', 'name', 'name_yomi'],
      users: [],
      options: {
        headings: {
          id: 'id',
          name: '名前',
          name_yomi: '名前(読み)'
        }
      },
      loading: true,
      errored: false
    }
  },
  mounted () {
    axios
    .get('https://script.google.com/macros/s/AKfycbwrYpfVxqjGWdqFEV4kk6piYH4BeAhsqC_nDP4JOZRXUI9m1Njz/exec')
    .then(response => {
      this.users = response.data.users
    })
    .catch(error => {
      console.log(error)
      this.errored = true
    })
    .finally(() => this.loading = false)
  }
}
</script>


<style>
#users {
  font-size: 12px;
}
.VueTables__limit {
display: none;
}
</style>
