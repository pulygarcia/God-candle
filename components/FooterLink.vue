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
    <NuxtLink :to="pageName ? '/' + pageName : '/'" class="link link-hover">{{ linkText }}</NuxtLink>
</template>