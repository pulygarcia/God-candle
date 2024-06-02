<script setup>
    defineProps({
        posts: {
            type: Array,
            required: true
        }
    })
</script>

<template>
    <ul>
        <li v-for="post in posts" :key="idx" class="px-4 py-5 duration-150 hover:border-white hover:rounded-xl hover:bg-gray-50">
            <a :href="post.linkName" class="space-y-3">
            <div class="flex items-center gap-x-3">
                <div class="flex items-center justify-center">
                <img :src="post.image" :alt="post.title" class="w-14 h-14 border rounded-full object-cover">
                </div>
                <div>
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