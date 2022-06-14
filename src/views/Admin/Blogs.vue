<template>
    <page-component title="Blogs">
        <!-- This example requires Tailwind CSS v2.0+ -->
<div class="px-4 sm:px-6 lg:px-8">
  <div class="sm:flex sm:items-center">
    <div class="sm:flex-auto">
      <h1 class="text-xl font-semibold text-gray-900" >Tarım Tavsiyeleri</h1>
    </div>
    <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
        <router-link class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto" :to="{name : 'CreateBlog'}" tag="button">Oluştur</router-link>
    </div>
  </div>
  <div class="mt-8 flex flex-col">
    <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
        <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
          <table class="min-w-full divide-y divide-gray-300">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Başlık</th>
                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">İçerik</th>
                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Resim</th>
                <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                  <span class="sr-only">Delete</span>
                </th>
              </tr>
            </thead>
            <tbody class="divide-y text-left divide-gray-200 bg-white" >
              <tr v-for="(blog,i) in getBlogs" :key="i">
                <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ blog.title}}</td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ blog.content }}</td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{blog.image}}</td>
                <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                  <a @click="deleteBlog(blog)" class="text-red-600 cursor-pointer hover:text-red-900">Delete</a>
                </td>
                
              </tr>

              <!-- More people... -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>
    </page-component>
</template>

<script>
import PageComponent from "@/components/PageComponent.vue";
import { mapGetters } from "vuex";
export default {
    components : {
        PageComponent,
    },
    computed: {
    ...mapGetters(["getBlogs"]),
    
  },
  created(){
    this.$store.dispatch("callBlogs");

  },
  methods: {
    deleteBlog(blog){
      console.log(blog);
      if(confirm("Bu Ürünü silmek istediğinize emin misiniz?")){
        this.$store.dispatch("deleteBlog",blog);
      }
    }
  },
 

    
}
</script>
