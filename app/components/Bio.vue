<template>
    <div class="container">
        <div class="you">You:</div>
        <div class="you-text">Tell me about yourself</div>
        <div class="me">Zane:</div>
        <div class="me-text">
            Hi, I'm Zane :) I attended Utah State University and got a BS in
            <span class="highlight">Computer Science</span>. I enjoy music
            production and art, I’m still an amateur but you can check out what
            I’ve made
            <a href="https://www.instagram.com/ak_zman/" target="_blank">here</a
            >!
        </div>
        <div class="you">You:</div>
        <div class="you-text">Wow! That's awesome! How can I contact you?</div>
        <div class="me">Zane:</div>
        <div class="me-text">
            My email is
            <a href="mailto:zanebennion@gmail.com" target="_blank"
                >zanebennion@gmail.com</a
            >! Feel free to contact me anytime :p
        </div>
    </div>
</template>

<style lang="css" scoped>
.container {
    width: 100%;
    min-width: 0;
    height: min-content;

    display: grid;
    grid-template-columns: min-content 1fr;
    grid-template-rows: repeat(4, min-content);
    row-gap: 16px;

    background-color: #c0c0c0;
    border-top: 2px solid #ffffff;
    border-left: 2px solid #ffffff;
    border-right: 2px solid #808080;
    border-bottom: 2px solid #808080;
    padding: 10px;
    box-shadow: 1px 1px 0px 1px #000000;
}

.you {
    justify-self: end;
    color: red;
}
.you-text {
    min-width: 0;
}

.me {
    justify-self: end;
    color: blue;
}
.me-text {
    min-width: 0;
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
