<script setup>
    import CoinCard from '../components/CoinCard.vue';
import InvestmentDisclaimer from '../components/InvestmentDisclaimer .vue';
    import { projects } from '../data/projects';
</script>

<template>
    <Header></Header>
    
    <div class="container mx-auto w-11/12 md:w-full py-8">
      <h1 class="text-center text-5xl py-16 font-bold">Proyectos con alto potencial de crecimiento</h1>
  
      <InvestmentDisclaimer />

      <p class="mt-2">En esta entrada encontrarás <strong>ALTCOINS</strong> con gran potencial de crecimiento de cara al bullmarket 2024-2025. Sin tener en cuenta criptomonedas como Bitcoin y Ethereum ya que al ser los proyectos con más capitalización de mercado tienen una proyección más conservadora. Y el objetivo de este artículo es presentar proyectos menos conocidos pero con un margen de crecimiento mucho mayor, y con posibilidades de multiplicar varias veces su valor en el largo plazo.</p>
      <p class="mt-2">A continuación, te presentaré una selección de altcoins divididas por narrativas que destacan por sus innovadoras propuestas y el gran interés que están generando en la comunidad cripto. Cada uno de estos proyectos tiene el potencial de ofrecer rendimientos significativos, especialmente a medida que el mercado cripto se recupere y crezca. Es importante recordar que, aunque las oportunidades de alto rendimiento pueden ser emocionantes, también conllevan un mayor riesgo. Por lo tanto, siempre es recomendable realizar una investigación exhaustiva y considerar tus propios objetivos de inversión y tolerancia al riesgo antes de invertir.</p>

      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
        <CoinCard 
            v-for="project in projects"
            :project="project" 
        />
      </div>
  
      <div class="divider my-5"></div>
  
      <p class="mt-5">Este artículo fué escrito por <a href="https://github.com/pulygarcia" class="text-emerald-500">Puly G</a>.</p>
    </div>
  
    <Footer></Footer>
  </template>