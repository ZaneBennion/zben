<template>
    <div class="container">
        <div class="window">
            <div class="title-bar">
                <div class="title-bar-text">About</div>
                <div class="title-bar-controls">
                    <button aria-label="Minimize"></button>
                    <button aria-label="Maximize"></button>
                    <button aria-label="Close"></button>
                </div>
            </div>
            <div class="window-body">
                <div class="field-border">
                    <div>
                        <span class="you">You:</span> Tell me about yourself
                    </div>
                    <div>
                        <span class="me">Zane:</span> Hi, I'm Zane :) I attended
                        Utah State University and got a BS in
                        <span class="highlight">Computer Science</span>. I enjoy
                        music production and art, I’m still an amateur but you
                        can check out what I’ve made
                        <a
                            href="https://www.instagram.com/ak_zman/"
                            target="_blank"
                            >here</a
                        >!
                    </div>
                    <div>
                        <span class="you">You:</span> Wow! That's awesome! How
                        can I contact you?
                    </div>
                    <div>
                        <span class="me">Zane:</span> My email is
                        <a href="mailto:zanebennion@zben.me" target="_blank"
                            >zanebennion@zben.me</a
                        >! Feel free to contact me anytime :p
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
.container {
    width: 100%;
    min-width: 0;
    height: min-content;
}

.field-border {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 8px;
}

.you {
    color: red;
}

.me {
    color: blue;
}

.highlight {
    /* Define the rainbow gradient */
    background: linear-gradient(
        to right,
        #ff2400,
        #e81d1d,
        #e8b71d,
        #e3e81d,
        #1de840,
        #1ddde8,
        #2b1de8,
        #dd00f3,
        #dd00f3
    );
    /* Expand background size so there's "room" to move */
    background-size: 400% 100%;
    /* Clip background to text and make text transparent */
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    /* Link to the keyframe animation */
    animation: rainbow-scroll 8s linear infinite;
}

@keyframes rainbow-scroll {
    0% {
        background-position: 0% 50%;
    }
    100% {
        background-position: 100% 50%;
    }
}
</style>
