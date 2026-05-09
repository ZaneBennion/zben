<template>
    <div class="background">
        <div class="player">
            <MusicPlayer />
        </div>
        <div class="songs">
            <ul v-if="songs">
                <li v-for="song in songs" :key="song.id">{{ song.title }}</li>
            </ul>
        </div>
    </div>
</template>

<style lang="css" scoped>
.background {
    display: flex;
}
</style>

<script setup lang="ts">
interface Song {
    id: string;
    title: string;
    releaseDate: string;
    audioUrl: string;
    coverUrl: string;
}

// Fetch your JSON from the /public folder
const { data: songs } = await useFetch<Song[]>("/songs.json");
</script>
