<script setup>
    defineProps({
        posts: {
            type: Array,
            required: true
        }
    })
</script>

<template>
    <ul class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <li v-for="post in posts" :key="idx" class="px-4 py-5 duration-150 hover:border-white rounded-xl bg-gray-50 hover:bg-gray-100 hover:scale-105 transition">
            <a :href="post.linkName" class="space-y-3">
            <div class="flex items-center gap-x-3">
                <div class="flex items-center justify-center">
                <img :src="post.image" :alt="post.title" class="w-14 h-14 border rounded-full object-cover">
                </div>
                <div>
                <span class="text-emerald-500 font-semibold text-sm">03 Jun 2024</span>
                <h3 class="text-base text-gray-800 font-semibold mt-1">{{ post.title }}</h3>
                </div>
            </div>
            <p class="text-gray-600 sm:text-sm">
                {{ post.description }}
            </p>
            </a>
        </li>
        </ul>        
</template>