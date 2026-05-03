<template>
    <div class="background">
        <div class="left-col">
            <ProfilePicture class="picture" />
            <Bio class="bio" />
        </div>
        <div class="right-col">
            <Name class="name" />
            <div class="experience">
                <Education />
                <Work />
                <Projects />
            </div>
        </div>
    </div>
</template>

<style lang="css">
:root {
    --main-gap: 12px;
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
    padding: 12px;
    overflow-y: scroll;

    display: flex;
    flex-direction: row;
    gap: var(--main-gap);
}

.left-col {
    display: flex;
    flex-direction: column;
    max-width: 500px;
    align-items: start;
    gap: var(--main-gap);
}
.picture {
    flex: 1 1 auto;
    min-height: 0;
    object-fit: contain;
}
.bio {
    flex: 0 0 auto;
}

.right-col {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: var(--main-gap);
}
.name {
}
.experience {
    display: flex;
    flex-direction: column;
}

@media screen and (max-width: 1024px) {
    .background {
        flex-direction: column;
    }

    .left-col {
        max-width: none;
        width: 100vw;
    }

    .picture {
        max-width: 400px;
    }
}
</style>
