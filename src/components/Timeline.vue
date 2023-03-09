<script setup>
    import Container from "./Container.vue";
    import Card from "./Card.vue";
    
    const data = [
        {
            id: 1,
            username: "daliskeo",
            url: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZnVubnklMjBwb3J0cmFpdHxlbnwwfHwwfHw%3D&w=1000&q=80",
            caption: "De Hangcoi"
        },
        {
            id: 2,
            username: "girl",
            url: "https://cdn.mos.cms.futurecdn.net/p5quSf4dZXctG9WFepXFdR.jpg",
            caption: "Hey"
        }
    ]
 
</script>

<template>
    <Container>
        <div class="timeline-container">
            <Card 
                v-for="post in data" 
                :key="post.id" 
                :post="post"
            />
        </div>
    </Container>
</template>

<style scoped>
    .timeline-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px 0;
    }
</style>