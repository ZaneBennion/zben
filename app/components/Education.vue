<template>
    <div class="container">
        <div class="window">
            <div class="title-bar">
                <div class="title-bar-text">Education</div>
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
                            <a href="https://web.sandbox.ing/" target="_blank">
                                Sandbox
                            </a>
                        </span>
                        <span class="section-date">2025-2026</span>
                    </div>
                    <div class="section-body">
                        Sandbox is a program that allows you to spend your
                        senior year learning by doing. Your only goal is to make
                        something real to get real users. You come up with an
                        idea, teach yourself whatever is needed to make it work,
                        and try to get users to vet your idea.
                    </div>
                </div>
                <div class="section">
                    <div class="section-header">
                        <span class="section-title">Utah State University</span>
                        <span class="section-date">2022-2026</span>
                    </div>
                    <div class="section-body">
                        Bachelor of Science in Computer Science
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
