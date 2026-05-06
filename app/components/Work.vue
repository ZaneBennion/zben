<template>
    <div class="container">
        <div class="header">Work</div>
        <div class="body">
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
