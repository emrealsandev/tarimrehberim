<template>
    <div v-for="(blog,i) in getBlogs" :key="i">
          <div
            class="bg-white shadow-lg shadow-gray-400 border border-gray-200 rounded-lg mb-5"
          >
            <a >
              <img
                class="rounded-t-lg w-full"
                :src="blog.image"
                alt=""
              />
            </a>
            <div class="p-5">
              <a >
                <h5
                  class="text-gray-900 font-bold text-2xl tracking-tight mb-2"
                >
                  {{blog.title}}
                </h5>
              </a>
               <p class="text-gray-700 text-sm">
                                   <span>
                                       {{ blog.content.slice(0, 200) }}
                                   </span>
                                    <span v-if="readMoreActivated" >{{blog.content}}</span>
                                </p>
              <a
                class="text-white cursor-pointer bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
                 @click="$emit('readMoreBlog', blog)"
              >
                Devamını Oku
              </a>
            </div>
          </div>
        
        </div>
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
        ...mapGetters(["getBlogs"]),
        
    },



}
</script>