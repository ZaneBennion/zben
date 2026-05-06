<template>
    <div class="container">
        <div class="header">Education</div>
        <div class="body">
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
                    Sandbox is a program that allows you to spend your senior
                    year learning by doing. Your only goal is to make something
                    real to get real users. You come up with an idea, teach
                    yourself whatever is needed to make it work, and try to get
                    users to vet your idea.
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
