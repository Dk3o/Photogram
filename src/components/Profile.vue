<script setup>
    import Container from "./Container.vue";
    import UserBar from "./UserBar.vue";
    import ImageGallery from "./ImageGallery.vue";
</script>

<template>
    <Container>
        <div class="profile-container">
            <UserBar 
                username="daliskeo"
                :userInfo="{
                    posts: 4,
                    followers: 100,
                    following: 342
                }"
            />
            <ImageGallery :posts="[
                {
                    id: 1,
                    image: 'https://fastly.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0',
                },
                {
                    id: 2,
                    image: 'https://fastly.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0',
                }
            ]"/>
        </div>
    </Container>
</template>

<style scoped>
    .profile-container {
        display: flex;
        flex-direction: column;
        padding: 20px 0;
    }
</style>