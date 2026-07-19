<template>
    <div class="container">
        <div class="window">
            <div class="title-bar">
                <div class="title-bar-text">Work</div>
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
                            <a href="https://www.nexusdatasolutions.com/" target="_blank">
                                neXus Data Solutions
                            </a>
                        </span>
                        <span class="section-date">Jun 2026-Present</span>
                    </div>
                    <div class="section-body">
                        Currently working as a Programmer Analyst 
                    </div>
                </div>
                <div class="section">
                    <div class="section-header">
                        <span class="section-title">
                            <NuxtLink to="/vivint">Vivint</NuxtLink>
                        </span>
                        <span class="section-date">Summer 2025</span>
                    </div>
                    <div class="section-body">
                        I worked as a Platform Engineering Intern for Vivint.
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
