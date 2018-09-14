<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name:{{name}}</div>
    <div class="dashboard-text">roles:<span v-for="role in roles" :key="role">{{role}}</span> </div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    computed:{

    }
  }
</script>

<style scoped>

</style>
