<template>
         <li  class="col-span-1 shadow-lg" v-for="(plant,index) in getPlants" :key="index">
                        <div class=" border flex flex-col h-full max-w-sm  overflow-hidden shadow-lg shadow-gray-400 bg-white rounded-lg  divide-y divide-gray-200">
                            <img class="w-full h-52 object-cover" :src="plant.image" alt="Sunset in the mountains">
                            <div class="px-6 py-4">
                                <div class="font-bold text-lg mb-2">{{plant.name}}</div>
                                <p class="text-gray-700 text-sm">
                                   <span>
                                       {{ plant.description.slice(0, 200) }}
                                   </span>
                                    <a @click="$emit('readMore', plant)" class="cursor-pointer relative text-sm text-blue-700 font-medium hover:text-blue-500">
                                        <span>Devamını Oku...</span>
                                    </a>
                                    <span v-if="readMoreActivated" >{{plant.description}}</span>
                                </p>
                            </div>
                            <div class="px-6 pt-4 pb-2 mt-auto flex flex-wrap">
                                <span class="inline-block bg-green-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">{{plant.type}}</span>
                                <span class="inline-block bg-blue-200 rounded-full px-3 py-1 text-xs font-semibold text-blue-700 mr-2 mb-2">{{plant.region}}</span>
                            </div>
                        </div>
                    </li>
</template>

<script>
import {mapGetters} from "vuex";
export default {
    data() {
        return {
            readMoreActivated: false,
        }
    },

    

    computed : {
        ...mapGetters(["getPlants"]),
        
    },




}
</script>