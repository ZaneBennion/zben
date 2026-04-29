<template>
  <div class="container">
    <div class="you">You:</div>
    <div class="you-text">Tell me about yourself</div>
    <div class="me">Zane:</div>
    <div class="me-text">
      Hi, I'm Zane :) 
      I've recently graduated from Utah State University with a BS in <span class="highlight">Computer Science</span>. 
      I’m excited to start my career and am currently looking for a full-time position. 
      I enjoy music production and art, I’m still an amateur but you can check out 
      what I’ve made <a href="https://www.instagram.com/ak_zman/" target="_blank">here</a>!
    </div>
  </div>
</template>

<style lang="css" scoped>
.container {
  background-color: aliceblue;
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: min-content 1fr;
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

.highlight {
  /* Define the rainbow gradient */
  background: linear-gradient(
    to right, 
    #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3
  );
  /* Expand background size so there's "room" to move */
  background-size: 400% 100%;
  /* Clip background to text and make text transparent */
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  /* Link to the keyframe animation */
  animation: rainbow-scroll 8s linear infinite;
}

@keyframes rainbow-scroll {
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}
</style>