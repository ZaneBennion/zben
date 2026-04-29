<template>
  <div class="container">
    <div class="name-header">Zane Bennion</div>
    <div class="age">{{ age }} Years Old</div>
  </div>
</template>

<style lang="css" scoped>
.container {
  width: 100%;
  height: 100%;
  container-type: inline-size;

  display: flex;
  flex-direction: column;
  align-items: end;
}

.name-header {
  font-size: 7cqw;
}
.age {
  font-size: 3cqw;
}
</style>

<script setup lang="ts">
  const today = new Date();
  const currYear = today.getFullYear();
  const birthYear = 2004;
  const age = currYear - birthYear;
</script>