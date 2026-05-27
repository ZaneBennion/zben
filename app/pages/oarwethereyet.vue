<template>
    <div class="container">
        <div class="window">
            <div class="title-bar">
                <div class="title-bar-text">Oar We There Yet?</div>
                <div class="title-bar-controls">
                    <button aria-label="Minimize"></button>
                    <button aria-label="Maximize"></button>
                    <button aria-label="Close"></button>
                </div>
            </div>
            <div class="window-body">
                <p>There's so much room for activities!</p>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
.container {
    width: 100vw;
    height: 100vh;
    background-image: url("/img/oarwethereyetBG.webp");
    background-size: 50% auto;
}

.window {
    max-width: 900px;
    margin: auto;
    height: 100%;
}
</style>
