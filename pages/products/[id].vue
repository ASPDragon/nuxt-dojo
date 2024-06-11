<template>
    <div>
        <p>Products details for {{ id }}</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur necessitatibus vitae magni ipsam illo tenetur omnis sed distinctio delectus sequi.</p>
    </div>
</template>

<script setup>
    const { id } = useRoute().params;

    definePageMeta({
        layout: 'products'
    });
</script>

<style lang="scss" scoped>

</style>