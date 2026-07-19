<template>
    <div class="container">
        <div class="window">
            <div class="title-bar">
                <div class="title-bar-text">HospiceFind</div>
                <div class="title-bar-controls">
                    <button aria-label="Minimize"></button>
                    <button aria-label="Maximize"></button>
                    <button aria-label="Close"></button>
                </div>
            </div>
            <div class="window-body">
                <div class="section">
                    <div class="status-field-border" style="padding: 8px">
                        <div class="header">HospiceFind</div>
                        <div class="body">
                            <div class="subsection">
                                <div class="body">
                                    A progressive web app that let users view information and metrics
                                    about hospices. These metrics are provided by Medicare and have an
                                    API that lets you pull the data. Users searched using their zip code
                                    to see options in the area. Then could sort their search by different
                                    metrics, see a detailed page for each hospice, and compare metrics
                                    across different hospices.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="section">
                    <div class="status-field-border" style="padding: 8px">
                        <div class="header">What I Leaned</div>
                        <div class="body">
                            I learned how to work with large amounts of data.
                            The data was pulled, turned into objects that were much
                            easier to work with, and then custom data was added to
                            those objects for sorting/filtering purposes.
                            I learned out to make a progressive web app using
                            Javascript service workers. I also learned a lot about
                            design, having to make something user friendly whose
                            UI needed to work on desktop and mobile screens.
                        </div>
                    </div>
                </div>
                <div class="img-section">
                    <img src="/img/newSearch.png"/>
                    <img src="/img/averageDetail.png"/>
                    <img src="/img/newCompare.png"/>
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
    height: 100vh;
    overflow: scroll;
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

.img-section {
    margin-bottom: var(--main-gap);
    display: flex;
    gap: var(--main-gap); 
}
img {
    width: 250px;
}

@media screen and (max-width: 1024px) {
    .img-section {
        margin-bottom: var(--main-gap);
        display: flex;
        gap: var(--main-gap); 
        flex-direction: column;
    }
}
</style>

