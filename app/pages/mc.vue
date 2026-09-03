<template>
    <div class="container">
        <div class="window">
            <div class="title-bar">
                <div class="title-bar-text">Zane's Minecraft Server - Palantir Boy Scouts</div>
                <div class="title-bar-controls">
                    <button aria-label="Minimize"></button>
                    <button aria-label="Maximize"></button>
                    <button aria-label="Close"></button>
                </div>
            </div>
            <div class="window-body">
                <div class="section">
                    <div class="status-field-border" style="padding: 8px">
                        <div class="header">Overview</div>
                        <div class="body">
                            This is everything you need to know about my server:
                        </div>
                        <div class="subsection">
                            <div class="header">
                                Schedule
                            </div>
                            <div class="body">
                                The server is only open for specific times on specific days.
                                Times are in AKDT, translate to your timezone if needed.
                                <div class="sunken-panel" >
                                  <table class="interactive" style="height: 80px; width: 240px;">
                                    <thead>
                                      <tr>
                                        <th>Day</th>
                                        <th>Opens</th>
                                        <th>Closes</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>Tuesday</td>
                                        <td>6:00pm</td>
                                        <td>8:00pm</td>
                                      </tr>
                                      <tr>
                                        <td>Saturday</td>
                                        <td>7:00pm</td>
                                        <td>10:00pm</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                            </div>
                        </div>
                        <div class="subsection">
                            <div class="header">
                                World Border
                            </div>
                            <div class="body">
                                I have a pretty small world border right now. I think Minecraft servers
                                are the most fun when lots of people are online and close together.
                                At some point, based off vibes, I will expand or remove the border.
                            </div>
                        </div>
                        <div class="subsection">
                            <div class="header">
                                Tree Chopping
                            </div>
                            <div class="body">
                                When you chop a log with an axe, the logs above it will shift down.
                                You'll still have to break the same amount of blocks but you'll
                                be able to chop down trees without needing to climb them.
                            </div>
                        </div>
                        <div class="subsection">
                            <div class="header">
                                Create Mod
                            </div>
                            <div class="body">
                                I mainly wanted this because it has trains and I wanted a nice way of 
                                making transportation between people's bases. It's a pretty technical
                                mod but it shouldn't get in your way if you just want to ignore it 
                                and have a more vanilla experience.
                            </div>
                        </div>
                        <div class="subsection">
                            <div class="header">
                                Farmer's Delight Mod
                            </div>
                            <div class="body">
                                Expands Minecraft's cooking and farming. Nice for more relaxed and
                                chill gameplay.
                            </div>
                        </div>
                        <div class="subsection">
                            <div class="header">
                                Elytra Don't Work in the Overworld
                            </div>
                            <div class="body">
                                Elytra enable people to build bases a billion blocks away and
                                also disincentivize people from building transportation
                                infrastructure. I don't like this so elytra are only useable
                                in the End where they make exploration manageable.
                            </div>
                        </div>
                    </div>
                </div>
                <div class="section">
                    <div class="status-field-border" style="padding: 8px">
                        <div class="header">Mods</div>
                        <div class="body">
                            <div class="body">
                                If you just want to get started quickly you should do this.
                                Install and open 
                                <a href="https://prismlauncher.org/download" target="_blank">
                                    Prism Launcher
                                </a>
                                , sign into your Minecraft account,
                                download this 
                                <a href="https://drive.google.com/file/d/1vtl82_y_rurBXuojf2q-aTyWAa6mKxxv/view?usp=sharing" 
                                    target="_blank">
                                    ZIP file 
                                </a>
                                and drag it into Prism Launcher. This should
                                give you an instance of Minecraft that'll have all the mods you
                                need installed. Select the instance, press launch, and you should
                                be good to go! If you want to install the mods yourself here's
                                what you need:
                            </div>
                            <div class="subsection">
                                <div class="header">
                                    Required Mods
                                </div>
                                <div class="body">
                                    fabric-api, create-fly, farmers-delight-refabricated
                                </div>
                            </div>
                            <div class="subsection">
                                <div class="header">
                                    Technically Optional but Highly Recommended
                                </div>
                                <div class="body">
                                    simple-voice-chat, distanthorizons, jei
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="section">
                    <div class="status-field-border" style="padding: 8px">
                        <div class="header">How to Join</div>
                        <div class="body">
                            <div class="body">
                                Once you have the mods installed you're ready to join!
                            </div>
                            <div class="subsection">
                                <div class="header">
                                    Get Whitelisted
                                </div>
                                <div class="body">
                                    Send me a message (text, Discord, Instagram) with your Minecraft username so I can
                                    add you to the whitelist. If you haven't been added to the whitelist you wont
                                    be able to connect to the server.
                                </div>
                            </div>
                            <div class="subsection">
                                <div class="header">
                                    Server Name
                                </div>
                                <div class="body">
                                    Palantir Boy Scouts
                                </div>
                            </div>
                            <div class="subsection">
                                <div class="header">
                                    Server Address
                                </div>
                                <div class="body">
                                    mc.zben.me
                                </div>
                            </div>
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
    background-image: url("/img/server-icon.png");
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
    margin-bottom: var(--main-gap);
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


