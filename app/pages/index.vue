<template>
    <div class="background">
        <div class="left-col">
            <ProfilePicture class="picture" />
            <Bio class="bio" />
        </div>
        <div class="right-col">
            <Name class="name" />
            <div class="experience">
                <Work />
                <Projects />
                <div class="edu-row">
                    <Education />
                    <NuxtLink to="/mail" class="mail">
                        <img src="/img/mailIcon.webp" />
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
.background {
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
.edu-row {
    display: flex;
}
.mail {
    padding: var(--main-gap);
}
.mail img {
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

    .edu-row {
        flex-direction: column;
    }
}
</style>
