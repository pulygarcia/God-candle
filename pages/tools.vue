<script setup>
  import { tools } from '../data/tools';
</script>

<template>
    <Header></Header>
    
    <div class="container mx-auto w-11/12 md:w-full py-8">
      <h1 class="text-center text-5xl py-16 font-bold">Herramientas de trading altamente útiles</h1>
      <article class="space-y-10">
        <div>
          <h2 class="text-4xl font-semibold mb-6">Herramientas destacadas</h2>
          <p class="text-lg">En esta entrada encontrarás herramientas de trading que pueden ayudarte a hacer tus análisis más exhaustivos y tomar mejores desiciones a la hora de invertir tu dinero.</p>
        </div>

        <ul class="list-disc ps-3 mt-6 space-y-6">
            <li v-for="tool in tools"><a :href="tool.link" class="text-blue-500 underline font-semibold">{{tool.name}}</a>: {{ tool.description }}</li>
        </ul>
      </article>
  
      <div class="divider my-5"></div>
  
      <p class="mt-5">Este sitio fué construído por <a href="https://github.com/pulygarcia" class="text-emerald-500">Puly G</a>.</p>
    </div>
  
    <Footer></Footer>
  </template>