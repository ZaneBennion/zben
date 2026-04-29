<template>
  <div class="container">
    <div class="name">Zane Bennion</div>
    <div class="age">{{ age }} Years Old</div>
    <div class="contact">Contact Me: 
      <a href="mailto:zanebennion@gmail.com">zanebennion@gmail.com</a>
    </div>
  </div>
</template>

<style lang="css" scoped>
.container {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
}

.name {
  color: pink;
}
</style>

<script setup lang="ts">
  const today = new Date();
  const currYear = today.getFullYear();
  const birthYear = 2004;
  const age = currYear - birthYear;
</script>