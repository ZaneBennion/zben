<template>
    <div class="container">
        <div class="window">
            <div class="title-bar">
                <div class="title-bar-text">Projects</div>
                <div class="title-bar-controls">
                    <button aria-label="Minimize"></button>
                    <button aria-label="Maximize"></button>
                    <button aria-label="Close"></button>
                </div>
            </div>
            <div class="window-body">
                <div class="section">
                    <div class="section-header">
                        <span class="section-title">
                            <a href="https://github.com/ZaneBennion/daily-budget" target="_blank">
                                Daily Budget 
                            </a>
                        </span>
                        <span class="section-date">Jul 2026</span>
                    </div>
                    <div class="section-body">
                        A super simple budgeting app.
                        You set an amount to get added to your budget every day and that's it.
                        Enter your transactions to subtract from your budget.
                    </div>
                </div>
                <div class="section">
                    <div class="section-header">
                        <span class="section-title">
                            <a href="https://store.steampowered.com/app/4562170/Oar_We_There_Yet/" target="_blank">
                               Oar We There Yet? 
                            </a>
                        </span>
                        <span class="section-date">Jan 2026-May 2026</span>
                    </div>
                    <div class="section-body">
                        An online cooperative game built using Godot and C#
                        where four friends try to raft down a river and face
                        unexpected challenges.
                    </div>
                </div>
                <div class="section">
                    <div class="section-header">
                        <span class="section-title">
                            <NuxtLink to="/hospicefind">HospiceFind</NuxtLink>
                        </span>
                        <span class="section-date">Aug 2025-Jan 2026</span>
                    </div>
                    <div class="section-body">
                        A progressive web app to help you search and sort
                        hospices in your local area.
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
.container {
    width: 100%;
    height: 100%;
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
