<template>
    <div>
        <!-- Markup shared across all pages, ex: NavBar -->
        <NuxtPage />
    </div>
</template>

<style lang="css">
@import "98.css";

:root {
    --main-gap: 12px;
    --conponent-pad: 4px;
}

* {
    box-sizing: border-box;
}

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
    padding: var(--main-gap);
    overflow-y: scroll;
}

.window-body {
    font-size: large;
}
</style>
