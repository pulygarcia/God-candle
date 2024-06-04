<script setup>
    defineProps({
        project: {
            type: Object,
            required: true
        }
    })
</script>

<template>
    <div class="card max-w-96 bg-base-100 shadow-xl mx-auto">
            <figure><img :src="project.image" :alt="project.name" /></figure>
            <div class="card-body">
                <h2 class="card-title">
                {{ project.name }}
                <div class="badge bg-emerald-500 text-white">{{ project.category }}</div>
                </h2>
                <p>{{ project.description }}</p>
                <div class="card-actions justify-end">
                    <NuxtLink :to="`coins/${project.id}`">
                        <button class="btn bg-emerald-500 text-white">Ver más</button>
                    </NuxtLink>
                    <a :href="`https://coinmarketcap.com/es/currencies/${project.name}/`">
                        <button class="btn bg-emerald-500 text-white">Precio</button>
                    </a>
                </div>
            </div>
        </div>
</template>