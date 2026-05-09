<template>
    <div class="window">
        <div class="title-bar">
            <div class="title-bar-text">CD Player</div>
            <div class="title-bar-controls">
                <button aria-label="Minimize"></button>
                <button aria-label="Maximize"></button>
                <button aria-label="Close"></button>
            </div>
        </div>
        <div class="window-body">
            <button class="default">Play/Pause</button>
            <div class="title">
                Title:
                <div class="field-border">pond</div>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
.title {
    display: flex;
    align-items: center;
}
.field-border {
    padding: 8px;
}
</style>
