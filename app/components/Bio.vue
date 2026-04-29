<template>
  <div class="container">
    <div class="you">You:</div>
    <div class="you-text">Tell me about yourself</div>
    <div class="me">Zane:</div>
    <div class="me-text">
      I'm Zane, I'm 22 years old :) aaaaaaaaaaaaaaaaaaaaaaaaaaaa
    </div>
  </div>
</template>

<style lang="css" scoped>
.container {
  background-color: aliceblue;
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: min-content min-content;
  grid-template-rows: min-content min-content;
}

.you {
  justify-self: end;
  color: red;
}

.me {
  justify-self: end;
  color: blue;
}
</style>