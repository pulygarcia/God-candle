<script setup>
    import {projects} from '../data/projects';
    import {formatCurrency} from '../../helpers'
    
    const route = useRoute();

    const currentProject = projects.filter((project) => project.ticker == route.params.ticker)[0];
</script>

<template>
    <Header></Header>
    
    <div class="container mx-auto w-11/12 md:w-full py-8">
      <div class="flex items-center justify-center md:justify-start gap-2">
        <img :src="currentProject.image" :alt="currentProject.name + 'logo'" class="w-12 h-12 md:w-16 md:h-16 object-cover rounded-full">
        <h1 class="text-center text-3xl md:text-5xl py-16 font-bold">{{currentProject.name}} <span class="text-gray-500 text-sm md:text-lg">({{ currentProject.ticker }})</span></h1>
      </div>
      
      <div class="flex items-center gap-2">
        <div class="badge bg-emerald-600 text-white text-md py-4 mb-8">{{ currentProject.category }} category</div>
        <div class="badge bg-gray-400 text-white text-md py-4 mb-8 font-bold">{{ ' #' + currentProject.ranking }}</div>
        <div 
          class="badge text-gray-600 text-md py-4 mb-8 font-bold border"
          :class="currentProject.risk == 'Alto' ? 'border-red-500' : currentProject.risk == 'Intermedio' ? 'border-yellow-500' : currentProject.risk == 'Bajo' ? 'border-green-500' : ''"
        >{{ 'Riesgo ' + currentProject.risk }}
        </div>
      </div>

      <p class="text-md">{{ currentProject.description }}</p>
      <p class="text-md mt-8">{{ currentProject.text }}</p>

      <article class="text-md mt-8 flex items-center gap-1">
        <p>Sitio web oficial de {{ currentProject.name }}:</p> 
        <a :href="currentProject.projectWebsite" class="text-blue-500 underline">{{currentProject.projectWebsite }}</a>
      </article>

      <details class="collapse bg-base-200 mt-8">
        <summary class="collapse-title text-xl font-medium">Plataformas en las que cotiza</summary>
        <div class="collapse-content"> 
          <article v-for="platform in currentProject.exchanges" class="flex items-center gap-2">
            <p class="font-semibold">{{ platform.name }}</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
            <a :href="platform.link" class="text-blue-500 hover:underline">{{ platform.link }}</a>
          </article>
        </div>
      </details>

      <strong class="block text-md mt-8">Al invertir en estos proyectos, es importante revisar si tienen en aval de empresas importantes en el mundo, ya que pueden generar más seguridad al invertir en los mismos, o incrementar fuertemente su valor al publicar anuncios importantes colaborando con estas empresas.</strong>

      <details v-if="currentProject.partners.length" class="collapse bg-base-200 mt-8">
        <summary class="collapse-title text-xl font-medium">Partners del proyecto</summary>
        <div class="collapse-content"> 
          <article v-for="partner in currentProject.partners" class="flex items-center gap-2">
            <p class="font-semibold">{{ partner }}</p>
          </article>
        </div>
      </details>

      <p class="text-md mt-8">El precio del activo <span class="underline">a la fecha de creación de este artículo (<strong>05/06/2024</strong>)</span> es: USD<strong>{{ formatCurrency(currentProject.articleDatePrice) }}</strong></p>
    </div>

    <Footer></Footer>
  </template>