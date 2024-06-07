<script setup>
    import { ref, onMounted } from 'vue';
    import Loader from '../components/Loader.vue';

    const coinList = ref([]);
    const loading = ref(false)

    onMounted(async () => {
        loading.value = true;

        try {
            const response = await fetch('https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=USD');
            response.value = await response.json();
            coinList.value = response.value.Data;

            //Add ranking number
            coinList.value = coinList.value.map((crypto, index) => {
                return {
                    ...crypto,
                    ranking: index + 1
                };
            });

        } catch (error) {
            console.log(error);
        }finally{
            loading.value = false;
        }

        //console.log(coinList.value);
    });
</script>

<template>
    <Header></Header>
    
    <div class="container mx-auto w-11/12 md:w-full py-8">
      <h1 class="text-center text-5xl pt-16 font-bold">Cotizaciones en tiempo real</h1>
      <p class="text-center mt-5">En esta sección podrás encontrar la cotización del momento de todos los activos dentro del top 100.</p>
  
      <Loader v-if="loading"/>

      <div v-else class="overflow-x-auto mt-10">
            <table class="table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Nombre</th>
                        <th>Precio (USD)</th>
                        <th>Market cap</th>
                        <th>Ultima actualización</th>
                        <th>Volumen 24h</th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="coin in coinList">
                        <th>{{ coin.ranking }}</th>

                        <td class="flex items-center gap-1">
                            <img :src="`https://www.cryptocompare.com${coin.CoinInfo.ImageUrl}`" :alt="coin.CoinInfo.FullName + ' logo'" class="w-6 h-6 object-cover rounded-full">
                            <div>{{ coin.CoinInfo.FullName }} <span class="font-semibold text-gray-600 uppercase">({{ coin.CoinInfo.Name }})</span></div>
                        </td>

                        <td class="font-semibold">{{ coin.DISPLAY?.USD?.PRICE || 'N/A' }}</td>

                        <td class="font-semibold text-nowrap">{{coin.DISPLAY?.USD?.MKTCAP || 'N/A'}}</td>

                        <td>{{coin.DISPLAY?.USD?.LASTUPDATE == 'Just now' ? 'Justo ahora' : coin.DISPLAY?.USD?.LASTUPDATE}}</td>

                        <td class="font-semibold text-nowrap">{{coin.DISPLAY?.USD?.TOPTIERVOLUME24HOURTO || '-'}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
  
      <div class="divider my-5"></div>
  
      <p class="mt-5">Este sitio fué construído por <a href="https://github.com/pulygarcia" class="text-emerald-600">Puly G</a>.</p>
    </div>
  
    <Footer></Footer>
</template>