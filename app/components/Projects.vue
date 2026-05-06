<template>
    <div class="container">
        <div class="header">Projects</div>
        <div class="body">
            <div class="section">
                <div class="section-header">
                    <span class="section-title">
                        <NuxtLink to="/hospicefind">HospiceFind</NuxtLink>
                    </span>
                    <span class="section-date">Aug 2025-Jan 2026</span>
                </div>
                <div class="section-body">
                    A progressive web app to help you search and sort hospices
                    in your local area.
                </div>
            </div>
            <div class="section">
                <div class="section-header">
                    <span class="section-title">
                        <NuxtLink to="/oarwethereyet">
                            Oar We There Yet?
                        </NuxtLink>
                    </span>
                    <span class="section-date">Jan 2026-May 2026</span>
                </div>
                <div class="section-body">
                    An online cooperative game built using Godot and C# where
                    four friends try to raft down a river and face unexpected
                    challenges.
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
.container {
    background-color: #c0c0c0;
    border-top: 2px solid #ffffff;
    border-left: 2px solid #ffffff;
    border-right: 2px solid #808080;
    border-bottom: 2px solid #808080;
    padding: 10px;
    box-shadow: 1px 1px 0px 1px #000000;

    width: 100%;
    height: 100%;
}

.header {
    padding-bottom: var(--main-gap);
    font-weight: bold;
}

.body {
    padding-left: var(--main-gap);
}

.section {
    padding-bottom: var(--main-gap);
}
.section-header {
    display: flex;
    font-weight: bold;
}
.section-title {
    flex-grow: 1;
}
.section-body {
    padding-left: var(--main-gap);
}
</style>
