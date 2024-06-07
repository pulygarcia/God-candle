<template>
  <div class="md:container md:mx-auto">
    <div class="navbar">
      <div class="navbar-start">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-3">
            <li><NuxtLink to="/about">Acerca</NuxtLink></li>
            <li><NuxtLink to="/coins">Monedas</NuxtLink></li>
            <li><NuxtLink to="/strategy">Estrategia</NuxtLink></li>
            <li><NuxtLink to="/tools">Herramientas</NuxtLink></li>
            <li><NuxtLink to="/narratives">Narrativas</NuxtLink></li>
            <li>
              <NuxtLink to="/live-quotes" class="flex items-center gap-1">
                Cotizaciones en vivo
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#059669" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9.348 14.652a3.75 3.75 0 0 1 0-5.304m5.304 0a3.75 3.75 0 0 1 0 5.304m-7.425 2.121a6.75 6.75 0 0 1 0-9.546m9.546 0a6.75 6.75 0 0 1 0 9.546M5.106 18.894c-3.808-3.807-3.808-9.98 0-13.788m13.788 0c3.808 3.807 3.808 9.98 0 13.788M12 12h.008v.008H12V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
              </NuxtLink>
            </li>
            <li><NuxtLink to="/exchanges">Plataformas de trading</NuxtLink></li>
          </ul>
        </div>
        <NuxtLink to="/" class="btn btn-ghost text-xl flex items-center">
          <span>GodCandle</span>
          <img src="/public/green-candle.svg" alt="god candle logo" class="w-6">
        </NuxtLink>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li><NuxtLink to="/about">Acerca</NuxtLink></li>
          <li><NuxtLink to="/coins">Monedas</NuxtLink></li>
          <li>
            <NuxtLink to="/live-quotes" class="flex items-center gap-1">
              Cotizaciones
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#059669" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.348 14.652a3.75 3.75 0 0 1 0-5.304m5.304 0a3.75 3.75 0 0 1 0 5.304m-7.425 2.121a6.75 6.75 0 0 1 0-9.546m9.546 0a6.75 6.75 0 0 1 0 9.546M5.106 18.894c-3.808-3.807-3.808-9.98 0-13.788m13.788 0c3.808 3.807 3.808 9.98 0 13.788M12 12h.008v.008H12V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
            </NuxtLink>
          </li>
          <li><NuxtLink to="/strategy">Estrategia</NuxtLink></li>
          <li><NuxtLink to="/tools">Herramientas</NuxtLink></li>
        </ul>
      </div>
      <div class="navbar-end">
        <NuxtLink to="/blog"><button class="btn">Blog</button></NuxtLink>
      </div>
    </div>
  </div>
</template>