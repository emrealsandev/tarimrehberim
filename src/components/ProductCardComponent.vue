<template>
         <li  class="col-span-1 shadow-lg" v-for="(product,index) in getProducts" :key="index">
                        <div class=" border flex flex-col h-full max-w-sm  overflow-hidden shadow-lg shadow-gray-400 bg-white rounded-lg  divide-y divide-gray-200">
                            <img class="w-full h-52 object-cover" :src="product.image" alt="Sunset in the mountains">
                            <div class="px-6 py-4">
                                <div class="font-bold text-lg mb-2">{{product.name}}</div>
                                <p class="text-gray-700 text-sm">
                                   <span>
                                       {{product.description}}
                                   </span>
                                   
                                </p>
                            </div>
                            <div class="px-6 pt-4 pb-2 mt-auto flex justify-between">
                                <router-link :to="{name : 'ProductPurchase', params: {id: product.id}}" tag="a" class="cursor-pointer inline-block bg-green-400 px-3 py-1 text-xs font-semibold text-white mr-2 mb-2">Satın al</router-link>
                                <span class="inline-block px-3 py-1 text-xs font-semibold  mr-2 mb-2">fiyat: {{product.price}}</span>
                            </div>
                        </div>
                    </li>
</template>

<script>
import {mapGetters} from "vuex";
export default {
computed : {
        ...mapGetters(["getProducts"]),
        
    },



}
</script>