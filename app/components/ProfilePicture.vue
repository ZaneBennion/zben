<template>
    <div class="container">
        <img class="border" src="/img/profileBorder.png" />
        <img class="image" src="/img/zane.webp" />
    </div>
</template>

<style lang="css" scoped>
.container {
    display: grid;
    position: relative;
    place-items: center;
}

.border {
    grid-area: 1/1;
    z-index: 1;
    width: 100%;
    height: 100%;
    min-width: 0;
    min-height: 0;
    object-fit: contain;
}

.image {
    grid-area: 1/1;
    width: 77%;
    height: 77%;
    min-width: 0;
    min-height: 0;
    object-fit: contain;
}
</style>
