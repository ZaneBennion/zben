<template>
    <div class="background">
        <div class="container">
            <div class="window">
                <div class="title-bar">
                    <div class="title-bar-text">Inbox - Microsoft Outlook</div>
                    <div class="title-bar-controls">
                        <button aria-label="Minimize"></button>
                        <button aria-label="Maximize"></button>
                        <button aria-label="Close"></button>
                    </div>
                </div>
                <div class="window-body">
                    <div class="status-field-border">Inbox</div>
                    <div class="sunken-panel">
                        <!-- 1. Handle Loading and Error States -->
                        <div v-if="pending">Loading inbox...</div>
                        <div v-else-if="error">Failed to load posts.</div>

                        <!-- 2. Display the Data -->
                        <table v-else>
                            <thead>
                                <tr>
                                    <th>From</th>
                                    <th>Subject</th>
                                    <th>Received</th>
                                </tr>
                            </thead>
                            <tbody>
                                <!-- 3. The Vue Loop (v-for) -->
                                <tr
                                    v-for="post in data?.items"
                                    :key="post.link"
                                >
                                    <!-- Author Name -->
                                    <td>{{ post.creator || data?.title }}</td>

                                    <!-- Post Title (Made into a clickable link!) -->
                                    <td>
                                        <a :href="post.link" target="_blank">{{
                                            post.title
                                        }}</a>
                                    </td>

                                    <!-- Formatted Date -->
                                    <td>{{ formatDate(post.pubDate) }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
.container {
    max-width: 900px;
    margin: auto;
    height: 100%;
}

.status-field-border {
    padding: 8px;
    margin-bottom: 8px;
}

table {
    font-size: large;
    width: 100%;
}
td {
    padding: var(--conponent-pad);
}
</style>

<script setup>
// 1. Fetch the data from the API endpoint we just created
// 'useFetch' automatically handles the async request and gives us helpful reactive variables
const { data, pending, error } = await useFetch("/api/feed");

// 2. A little helper function to make the raw RSS date look pretty
const formatDate = (dateString) => {
    if (!dateString) return "Unknown Date";
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
};
</script>
