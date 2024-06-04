<script setup>
    import CoinCard from '../components/CoinCard.vue';
    import { projects } from '../data/projects';
    
    const route = useRoute();
</script>

<template>
    <Header></Header>
    
    <div class="container mx-auto w-11/12 md:w-full py-8">
      <h1 class="text-center text-5xl py-16 font-bold">{{ route.params.id }}</h1>
    </div>
  
    <Footer></Footer>
  </template>