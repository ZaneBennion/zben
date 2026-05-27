<template>
    <div class="container">
        <div class="window">
            <div class="title-bar">
                <div class="title-bar-text">Vivint</div>
                <div class="title-bar-controls">
                    <button aria-label="Minimize"></button>
                    <button aria-label="Maximize"></button>
                    <button aria-label="Close"></button>
                </div>
            </div>
            <div class="window-body">
                <div class="section">
                    <div class="status-field-border" style="padding: 8px">
                        <div class="header">What I Did</div>
                        <div class="body">
                            <div class="subsection">
                                <div class="header">
                                    Audit of Email Notification Templates:
                                </div>
                                <div class="body">
                                    Sorted through a large codebase and 10K line
                                    YAML file to find which email templates were
                                    currently in use. Updated old documentation
                                    for locally testing emails to current and
                                    working information.
                                </div>
                            </div>
                            <div class="subsection">
                                <div class="header">
                                    Internal App Migration:
                                </div>
                                <div class="body">
                                    Migrated app used by internal contractors to
                                    a monorepo. Updated technologies while
                                    maintaining functionality, Vue 2 -> Vue 3,
                                    Javascript -> Typescript.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="section">
                    <div class="status-field-border" style="padding: 8px">
                        <div class="header">What I Leaned</div>
                        <div class="body">
                            I learned to come into large codebases, figure out
                            what they do, and modify them. It's not a skill
                            that's trained very well in college and highlights
                            importance of documentation and readable code. I
                            learned what working in a large coorperate
                            environment is like.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
.container {
    width: 100vw;
    height: 100vh;
    background-image: url("/img/vivintBG.webp");
}

.window {
    max-width: 900px;
    margin: auto;
    height: 100%;
}

.section {
    margin-bottom: var(--main-gap);
}
.subsection {
    margin-bottom: var(--main-gap);
}

.header {
    font-weight: bold;
}

.body {
    padding-left: var(--main-gap);
}
</style>
