<script setup>
    import { posts } from '../data/posts';
</script>

<template>
    <Header></Header>
    
    <div class="container mx-auto w-11/12 md:w-full py-8">
      <h1 class="text-center text-5xl py-16 font-bold">Entradas de blog</h1>
  
      <div class="max-w-xl">
        <h2 class="text-gray-800 text-2xl font-extrabold sm:text-3xl">Atención</h2>
        <p class="text-gray-600 mt-2">El contenido que está por ver a continuación <span class="text-red-500">no es recomendación de inversión</span>. Usted es responsable de su dinero y las decisiones que tome con el mismo.</p>
      </div>

      <article class="space-y-10 mt-10">
        <Posts :posts="posts"></Posts>
      </article>
  
      <div class="divider my-5"></div>
  
      <p class="mt-5">Este sitio fué construído por <a href="https://github.com/pulygarcia" class="text-emerald-500">Puly G</a>.</p>
    </div>
  
    <Footer></Footer>
  </template>