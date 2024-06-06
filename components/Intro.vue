
import GodCandleFloat from './GodCandleFloat.vue';
<template>
    <div class="max-w-[1200px] mx-auto">
        <div class="w-11/12 mx-auto md:w-full py-8">
            <img src="/public/chart.jpg" alt="trading" class="trading-image mx-auto rounded-xl -mt-20 md:mt-5 filter grayscale hover:grayscale-0 transition">

            <article class="mt-20 space-y-6 grid grid-cols-1 md:grid-cols-3 items-center">
                <div class="col-span-2">
                    <h3 class="text-emerald-500 uppercase font-bold">Innovación de la blockchain</h3>
                    <h2 class="mt-6 mb-8 text-4xl lg:text-5xl  font-bold">¿No conoces nada acerca de crypto o blockchain?</h2>
                    <p class="mb-10 leading-loose text-gray-500 md:w-8/12">Descubre cuáles son los beneficios de esta tecnología y por qué es tan importante. Además de utilizarlas como inversión al hacer trading en spot (es más fácil de lo que crees).</p>

                    <ul class="mb-6 ">
                        <li class="mb-4 flex">
                            <div class="rounded-full bg-transparent w-5 h-5 flex justify-center items-center mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#10b981" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M5 12l5 5l10 -10" />
                                </svg>
                            </div>
                            <span>Seguridad</span>
                        </li>
                        <li class="mb-4 flex">
                            <div class="rounded-full bg-transparent w-5 h-5 flex justify-center items-center mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#10b981" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M5 12l5 5l10 -10" />
                                </svg>
                            </div>
                            <span>Transparencia</span>
                        </li>
                        <li class="mb-4 flex">
                            <div class="rounded-full bg-transparent w-5 h-5 flex justify-center items-center mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#10b981" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M5 12l5 5l10 -10" />
                                </svg>
                            </div>
                            <span>Descentralización</span>
                        </li>
                        <li class="mb-4 flex">
                            <div class="rounded-full bg-transparent w-5 h-5 flex justify-center items-center mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#10b981" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M5 12l5 5l10 -10" />
                                </svg>
                            </div>
                            <span>Eficiencia y velocidad</span>
                        </li>
                    </ul>
                    <NuxtLink to="/introduction">
                        <button class="btn border border-emerald-500 hover:border-black transition w-56 text-base">Ver más</button>
                    </NuxtLink>
                </div>
                <NuxtImg format="webp" src="/candles.svg" alt="trading candles" loading="lazy" class="max-h-48 md:max-h-80 w-full object-contain rounded-md"/>
            </article>

            <div class="divider my-5"></div>

            <article class="mt-20 space-y-6 grid grid-cols-1 md:grid-cols-3 items-center">
                <NuxtImg format="webp" src="/pie.png" alt="pie chart" loading="lazy" class="max-h-48 md:max-h-80 w-full object-contain rounded-md"/>
                <!-- <img src="/public/pie.png" alt="chart" class="md:max-h-80 w-full object-contain rounded-md"> -->

                <div class="col-span-2">
                    <h3 class="text-emerald-500 uppercase font-bold">Gestion de capital</h3>
                    <h2 class="mt-6 mb-8 text-4xl lg:text-5xl  font-bold">Tener control de el riesgo al invertir en activos altamente volátiles es clave.</h2>
                    <p class="mb-10 leading-loose text-gray-500 md:w-8/12">Descubre la forma más eficiente de dividir tu capital y tener en cuenta los distintos perfiles al invertir en crypto.</p>

                    <ul class="mb-6 ">
                        <li class="mb-4 flex">
                            <div class="rounded-full bg-transparent w-5 h-5 flex justify-center items-center mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#10b981" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M5 12l5 5l10 -10" />
                                </svg>
                            </div>
                            <span>Perfil Conservador</span>
                        </li>
                        <li class="mb-4 flex">
                            <div class="rounded-full bg-transparent w-5 h-5 flex justify-center items-center mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#10b981" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M5 12l5 5l10 -10" />
                                </svg>
                            </div>
                            <span>Perfil Intermedio</span>
                        </li>
                        <li class="mb-4 flex">
                            <div class="rounded-full bg-transparent w-5 h-5 flex justify-center items-center mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#10b981" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M5 12l5 5l10 -10" />
                                </svg>
                            </div>
                            <span>Perfil de Alto riesgo</span>
                        </li>
                    </ul>

                    <NuxtLink to="/administration">
                        <button class="btn border border-emerald-500 hover:border-black transition w-56 text-base">Ver más</button>
                    </NuxtLink>
                </div>
            </article>

            <div class="divider my-5"></div>

            <GodCandleFloat />
        </div>
    </div>
</template>
<style>
.trading-image{
        height: 160px;
        width: 340px;
        object-fit: cover;
}
@media (min-width: 768px){
    .trading-image{
        height: 585px;
        width: 1200px;
        object-fit: cover;
    }
}
</style>