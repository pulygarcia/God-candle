<script setup>
  import MyLinks from './MyLinks.vue';
</script>
<template>
  <footer class="footer p-10 bg-base-300 text-base-content mt-20">
  <nav>
    <FooterLink linkText="Inicio"/>
    <FooterLink linkText="Acerca de GodCandle" pageName="about"/>
    <FooterLink linkText="Blog" pageName="blog"/>
  </nav> 
  <nav>
    <p class="footer-title">Entradas</p> 
    <FooterLink linkText="Introducción a crypto y blockchain" pageName="introduction"/>
    <FooterLink linkText="Proyectos con potencial" pageName="coins"/>
    <FooterLink linkText="Narrativas" pageName="narratives"/>
    <FooterLink linkText="Herramientas de trading" pageName="tools"/>
  </nav> 
  <nav>
    <p class="footer-title">¿Como operar?</p> 
    <FooterLink linkText="Donde compro" pageName="tools"/>
    <FooterLink linkText="Estrategia" pageName="strategy"/>
    <FooterLink linkText="División de capital" pageName="administration"/>
  </nav> 
  <nav>
    <p class="footer-title">Made by Puly &copy;</p> 
    <div class="grid grid-flow-col gap-4">
       <MyLinks />
    </div>
  </nav>
</footer>
</template>