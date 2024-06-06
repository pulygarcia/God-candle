<template>
  <!-- <div
  class="w-72 h-72 mx-auto group relative rounded-xl flex justify-center items-center overflow-hidden cursor-pointer mt-10"
>
  <div class="w-24 h-32 bottom-8 absolute bg-red-300">
    <div
      class="w-24 h-32 absolute bg-green-500 duration-500 shadow-2xl [box-shadow:0px_-75px_55px_-30px_#4ade80] group-hover:[box-shadow:0px_-75px_95px_0px_#4ade80]"
    >
      <div class="w-24 h-32 bg-emerald-500 shadow-inner shadow-green-200"></div>
      <div
        class="w-24 h-24 bg-emerald-500 absolute -bottom-12 rounded-full [transform:_rotateX(80deg)]"
      ></div>
      <div
        class="w-24 h-24 bg-green-300 border-4 border-green-300 absolute -top-12 rounded-full [transform:_rotateX(80deg)]"
      ></div>
    </div>
    <svg
      class="group-hover:-skew-x-2 duration-500 absolute rounded-full shadow-green-200 -top-12 left-4 fill-green-400 w-16 h-16"
      height="100"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 100 100"
      width="100"
      x="0"
      xmlns="http://www.w3.org/2000/svg"
      y="0"
    >
      <path
        class=""
        d="M59.5,20.5a3.9,3.9,0,0,0-2.5-2,4.3,4.3,0,0,0-3.3.5,11.9,11.9,0,0,0-3.2,3.5,26,26,0,0,0-2.3,4.4,76.2,76.2,0,0,0-3.3,10.8,120.4,120.4,0,0,0-2.4,14.2,11.4,11.4,0,0,1-3.8-4.2c-1.3-2.7-1.5-6.1-1.5-10.5a4,4,0,0,0-2.5-3.7,3.8,3.8,0,0,0-4.3.9,27.7,27.7,0,1,0,39.2,0,62.4,62.4,0,0,1-5.3-5.8A42.9,42.9,0,0,1,59.5,20.5ZM58.4,70.3a11.9,11.9,0,0,1-20.3-8.4s3.5,2,9.9,2c0-4,2-15.9,5-17.9a21.7,21.7,0,0,0,5.4,7.5,11.8,11.8,0,0,1,3.5,8.4A12,12,0,0,1,58.4,70.3Z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </div>
</div>

<h3 class="text-center font-bold text-4xl">GodCandle</h3>
<div class="mt-4 space-y-3">
  <p class="text-gray-500 text-center">Si te interesan las inversiones en criptomonedas, estás en el lugar indicado.</p>
  <p class="text-gray-500 text-center">Explora todas las entradas de <NuxtLink to="/blog" class="text-emerald-600 underline">Blog</NuxtLink> de GodCandle y encontrá gran información.</p>
</div> -->

<div class="holder">
    <div class="candle">
      <div class="blinking-glow"></div>
      <div class="thread"></div>
      <div class="glow"></div>
      <div class="flame"></div>
    </div>
</div>

<h3 class="text-center font-bold text-4xl mt-4">GodCandle</h3>
<div class="mt-4 space-y-3">
  <p class="text-gray-500 text-center">Si te interesan las inversiones en criptomonedas, estás en el lugar indicado.</p>
  <p class="text-gray-500 text-center">Explora todas las entradas de <NuxtLink to="/blog" class="text-emerald-600 underline">Blog</NuxtLink> de GodCandle y encontrá gran información.</p>
</div>
      
</template>

<style>
  .holder {
  margin: 12rem auto 0;
  width: 150px;
  height: 400px;
  position: relative;
}

.holder *, .holder *:before, .holder *:after {
  position: absolute;
  content: "";
}

.candle {
  bottom: 0;
  width: 150px;
  height: 300px;
  border-radius: 150px / 40px;
  -webkit-box-shadow: inset 20px -30px 50px 0 rgba(0, 0, 0, 0.4), inset -20px 0 50px 0 rgba(0, 0, 0, 0.4);
  box-shadow: inset 20px -30px 50px 0 rgba(0, 0, 0, 0.4), inset -20px 0 50px 0 rgba(0, 0, 0, 0.4);
  background: linear-gradient(#25e48a, #0ee78d, #25e48a, #25e48a, 50%, #25e48a);
}

.candle:before {
  width: 100%;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #25e48a;
  background: #25e48a;
  background: radial-gradient(#25e48a, #25e48a 60%);
  background: radial-gradient(#25e48a, #25e48a 45%, #25e48a 80%);
}

.candle:after {
  width: 34px;
  height: 10px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  border-radius: 50%;
  top: 14px;
  -webkit-box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);
  background: radial-gradient(rgba(0, 0, 0, 0.6), transparent 45%);
}

.thread {
  width: 6px;
  height: 36px;
  top: -17px;
  left: 50%;
  z-index: 1;
  border-radius: 40% 40% 0 0;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  background: #121212;
  background: linear-gradient(#25e48a, #25e48a, #25e48a, #25e48a, #25e48a 90%);
}

.flame {
  width: 24px;
  height: 120px;
  left: 50%;
  -webkit-transform-origin: 50% 100%;
  -ms-transform-origin: 50% 100%;
  transform-origin: 50% 100%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  bottom: 100%;
  border-radius: 50% 50% 20% 20%;
  background: #25e48a;
  background: linear-gradient(#25e48a 80%, transparent);
  -webkit-animation: moveFlame 6s linear infinite, enlargeFlame 5s linear infinite;
  animation: moveFlame 6s linear infinite, enlargeFlame 5s linear infinite;
}

.flame:before {
  width: 100%;
  height: 100%;
  border-radius: 50% 50% 20% 20%;
  box-shadow: 0 0 15px 0 rgba(2, 173, 88, 0.699), 0 -6px 4px 0 rgba(0, 153, 77, 0.589);
}

@-webkit-keyframes moveFlame {
  0%, 100% {
    -webkit-transform: translateX(-50%) rotate(-2deg);
    transform: translateX(-50%) rotate(-2deg);
  }

  50% {
    -webkit-transform: translateX(-50%) rotate(2deg);
    transform: translateX(-50%) rotate(2deg);
  }
}

@keyframes moveFlame {
  0%, 100% {
    -webkit-transform: translateX(-50%) rotate(-2deg);
    transform: translateX(-50%) rotate(-2deg);
  }

  50% {
    -webkit-transform: translateX(-50%) rotate(2deg);
    transform: translateX(-50%) rotate(2deg);
  }
}

@-webkit-keyframes enlargeFlame {
  0%, 100% {
    height: 120px;
  }

  50% {
    height: 140px;
  }
}

@keyframes enlargeFlame {
  0%, 100% {
    height: 120px;
  }

  50% {
    height: 140px;
  }
}

.glow {
  width: 26px;
  height: 60px;
  border-radius: 50% 50% 35% 35%;
  left: 50%;
  top: -48px;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  background: #17b66c;
  box-shadow: 0 -40px 30px 0 #0cdc7b, 0 40px 50px 0 #0cdc7b, inset 3px 0 2px 0 #25e48a, inset -3px 0 2px 0 #25e48a;
}

.glow:before {
  width: 70%;
  height: 60%;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  bottom: 0;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.35);
}

.blinking-glow {
  width: 100px;
  height: 180px;
  left: 50%;
  top: -55%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  border-radius: 50%;
  background: #06dd36;
  -webkit-filter: blur(50px);
  -moz-filter: blur(60px);
  -o-filter: blur(60px);
  -ms-filter: blur(60px);
  filter: blur(40px);
  -webkit-animation: blinkIt .1s infinite;
  animation: blinkIt .1s infinite;
}

@-webkit-keyframes blinkIt {
  50% {
    opacity: .8;
  }
}

@keyframes blinkIt {
  50% {
    opacity: .8;
  }
}



</style>