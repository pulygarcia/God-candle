<script setup>
    import InvestmentDisclaimer from '../components/InvestmentDisclaimer .vue';
import { posts } from '../data/posts';
</script>

<template>
    <Header></Header>
    
    <div class="container mx-auto w-11/12 md:w-full py-8">
      <h1 class="text-center text-5xl py-16 font-bold">Entradas de blog</h1>
  
      <InvestmentDisclaimer />

      <article class="space-y-10 mt-10">
        <Posts :posts="posts"></Posts>
      </article>
  
      <div class="divider my-5"></div>
  
      <p class="mt-5">Este sitio fué construído por <a href="https://github.com/pulygarcia" class="text-emerald-500">Puly G</a>.</p>
    </div>
  
    <Footer></Footer>
  </template>