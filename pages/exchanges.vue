<script setup>
  import {exchanges} from '../data/exchanges';
</script>

<template>
    <Header></Header>
    
    <div class="container mx-auto w-11/12 md:w-full py-8">
      <h1 class="text-center text-5xl py-16 font-bold">Plataformas y aplicaciones de trading</h1>
  
      <article class="space-y-10">
        <div>
          <h2 class="text-4xl font-semibold mb-6">Recomendaciones al seleccionar tu exchange de confianza</h2>
          <p class="text-lg">Seleccionar el exchange adecuado para tus necesidades de trading es crucial para asegurar una experiencia segura y eficiente. Aquí tienes algunas recomendaciones a tener en cuenta: </p>

          <ul class="list-disc ps-3 mt-6">
            <li><strong>Seguridad</strong>: investiga por tu cuenta si el exchange ha sufrido hackeos o problemas en el pasado en los que los usuarios quedaron expuestos.</li>
            <li><strong>Reputación</strong>: investiga acerca de las reseñas y opiniones de otros usuarios en foros y redes sociales.</li>
            <li><strong>Disponibilidad</strong>: Asegúrate de que el exchange ofrezca las criptomonedas en las que estás interesado en invertir.</li>
            <li><strong>Volumen de trading</strong>: Exchanges con altos volúmenes diarios generalmente ofrecen mejores precios y mayor facilidad para comprar y vender criptomonedas.</li>
          </ul>
        </div>

        <h3 class="text-4xl font-semibold">Exchanges top</h3>
        <p class="text-lg">Aquí algunos exchanges dentro del top, con grandes volumenes diarios de trading y visitas semanales con buenas reseñas de usuarios.</p>

        <ul class="mt-12 space-y-6">
          <li v-for="exchange in exchanges" :key="exchange.name" class="p-5 bg-white rounded-md shadow-md max-w-[450px] hover:bg-gray-50 transition">
            <a :href="exchange.link">
              <div>
                <div class="justify-between sm:flex">
                  <div class="flex-1">
                    <h3 class="text-xl font-medium text-cyan-600">
                      {{exchange.name}}
                    </h3>
                    <p class="text-gray-500 mt-2 pr-2">
                      {{exchange.type == "CEX" ? 'Exchange Centralizado' : 'Exchange Descentralizado'}}
                    </p>
                  </div>
                  <div class="mt-5 space-y-4 text-sm sm:mt-0 sm:space-y-2">
                    <span class="flex items-center text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5 mr-2">
                        <path fill-rule="evenodd" d="M11.097 1.515a.75.75 0 0 1 .589.882L10.666 7.5h4.47l1.079-5.397a.75.75 0 1 1 1.47.294L16.665 7.5h3.585a.75.75 0 0 1 0 1.5h-3.885l-1.2 6h3.585a.75.75 0 0 1 0 1.5h-3.885l-1.08 5.397a.75.75 0 1 1-1.47-.294l1.02-5.103h-4.47l-1.08 5.397a.75.75 0 1 1-1.47-.294l1.02-5.103H3.75a.75.75 0 0 1 0-1.5h3.885l1.2-6H5.25a.75.75 0 0 1 0-1.5h3.885l1.08-5.397a.75.75 0 0 1 .882-.588ZM10.365 9l-1.2 6h4.47l1.2-6h-4.47Z" clip-rule="evenodd" />
                      </svg>
                      {{exchange.ranking}}
                    </span>
                    <span class="flex items-center text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5 mr-2">
                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                      </svg>
                      {{exchange.puntuation}}
                    </span>
                  </div>
                </div>
                <div class="mt-4 items-center space-y-4 text-sm sm:flex sm:space-x-4 sm:space-y-0">
                  <span class="flex items-center text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5 mr-2">
                      <path fill-rule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clip-rule="evenodd" />
                      <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
                    </svg>

                    Visitas semenales: {{exchange.weeklyVisits.toLocaleString()}}
                  </span>
                </div>
              </div>
            </a> 
          </li>
        </ul>
      </article>
  
      <div class="divider my-5"></div>
  
      <p class="mt-5">Este sitio fué construído por <a href="https://github.com/pulygarcia" class="text-emerald-500">Puly G</a>.</p>
    </div>
  
    <Footer></Footer>
  </template>