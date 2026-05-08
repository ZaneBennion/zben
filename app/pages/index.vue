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

<style lang="css" scoped>
.background {
    width: 100vw;
    height: 100vh;
    background-image: url("/img/bliss.webp");
    background-size: cover;
    background-position: center;
    padding: var(--main-gap);
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
    min-width: 0;
}
.picture {
    flex: 1 1 auto;
    min-height: 0;
    object-fit: contain;
}
.bio {
    flex: 0 0 auto;
    min-width: 0;
}

.right-col {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: var(--main-gap);
    min-width: 0;
}
.experience {
    display: flex;
    flex-direction: column;
    gap: var(--main-gap);
}

@media screen and (max-width: 1024px) {
    .background {
        flex-direction: column;
    }

    .left-col {
        max-width: none;
        width: 100%;
    }

    .picture {
        max-width: 400px;
    }
}
</style>
