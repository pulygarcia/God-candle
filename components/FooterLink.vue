<script setup>
    defineProps({
        pageName: {
            type: String
        },
        linkText: {
            type: String,
            required: true
        }
    })
</script>

<template>
    <a class="link link-hover"><NuxtLink :to="`/${pageName !== '' ? pageName : ''}`">{{ linkText }}</NuxtLink></a>
</template>