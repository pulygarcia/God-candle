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
    <h6 class="footer-title">Entradas</h6> 
    <FooterLink linkText="Introducción a crypto y blockchain" pageName="introduction"/>
    <FooterLink linkText="Proyectos con potencial" pageName="coins"/>
    <FooterLink linkText="Narrativas" pageName="narratives"/>
    <FooterLink linkText="Herramientas de trading" pageName="tools"/>
  </nav> 
  <nav>
    <h6 class="footer-title">¿Como operar?</h6> 
    <FooterLink linkText="Donde compro" pageName="tools"/>
    <FooterLink linkText="Estrategia" pageName="strategy"/>
    <FooterLink linkText="División de capital" pageName="administration"/>
  </nav> 
  <nav>
    <h6 class="footer-title">Made by Puly &copy;</h6> 
    <div class="grid grid-flow-col gap-4">
       <MyLinks />
    </div>
  </nav>
</footer>
</template>