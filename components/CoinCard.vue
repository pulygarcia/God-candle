<script setup>
    defineProps({
        project: {
            type: Object,
            required: true
        }
    })
</script>

<template>
    <div class="card max-w-96 bg-base-100 shadow-xl mx-auto overflow-hidden">
            <img :src="project.image" alt="project logo" loading="lazy" class="w-full mx-auto h-60 md:h-80 object-cover">
            <div class="card-body">
                <h2 class="card-title">
                {{ project.name }}
                <div class="badge bg-emerald-500 text-white">{{ project.category }}</div>
                </h2>
                <p>{{ project.description }}</p>
                <div class="card-actions justify-end">
                    <NuxtLink :to="`coins/${project.ticker}`">
                        <button class="btn bg-emerald-600 hover:bg-emerald-800 text-white">Ver más</button>
                    </NuxtLink>
                    <a :href="`https://coinmarketcap.com/es/currencies/${project.name}/`">
                        <button class="btn bg-emerald-600 text-white hover:bg-emerald-800">Precio</button>
                    </a>
                </div>
            </div>
        </div>
</template>