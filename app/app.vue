<template>
  <div class="background">
    <div class="left-col">
      <ProfilePicture class="picture"/>
      <Bio class="bio"/>
    </div>
    <div class="right-col">
      <Name class="name"/>
      <div class="experience">
        <Education/>
        <Work/>
        <Projects/>
      </div>
    </div>
  </div>
</template>

<style lang="css">
body {
  margin: 0%;
  font-family: "Press Start 2P", system-ui;
  font-weight: 400;
  font-style: normal;
}

.background {
  width: 100vw;
  height: 100vh;
  background-image: url("/img/bliss.webp");
  background-size: cover;
  background-position: center;

  display: flex;
  flex-direction: row;
}

.left-col {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.picture {
  max-width: 500px;
}
.bio {
}

.right-col {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}
.name {

}
.experience {
  display: flex;
  flex-direction: row;
}
</style>