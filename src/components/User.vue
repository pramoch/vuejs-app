<template>
  <div>
    <div>User</div>
    <div>Count = {{count}}</div>
    <button @click="increaseCount">Increase</button>
  </div>

</template>

<script>
export default {
  name: 'User',
  data: function () {
    return {
      count: 0
    }
  },
  methods: {
    increaseCount: function () {
      this.count++
    }
  }
}
</script>

<style scoped>

</style>
