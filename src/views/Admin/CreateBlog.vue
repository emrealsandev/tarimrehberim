<template>
  <page-component title="Blog Oluştur">
    <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
      <div class="pt-8 space-y-6 sm:pt-10 sm:space-y-5 rounded-b-lg bg-gray-100">
        <div>
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Blog bilgileri
          </h3>
        </div>
        <div class="space-y-6 sm:space-y-5">
          <div
            class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-300 sm:pt-5"
          >
            <label
              class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Blog Başlığı
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="text"
                class="max-w-lg block w-full shadow-sm border-2 border-gray-700 sm:max-w-xs sm:text-sm rounded-md"
                v-model="blog.title"
              />
            </div>
          </div>

          <div
            class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-300 sm:pt-5"
          >
            <label
              class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              İçerik</label
            >
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <textarea v-model="blog.content"  cols="30" rows="5" class="max-w-lg block w-full shadow-sm border-2 border-gray-700 sm:max-w-xs sm:text-sm rounded-md"></textarea>
            </div>
          </div>

          <div
            class="sm:grid sm:grid-cols-3 sm:gap-4 pb-4 sm:items-start sm:border-t sm:border-gray-300 sm:pt-5"
          >
            <label
              class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Resim
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="text"
                class="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-700 border-2 rounded-md"
                v-model="blog.image"
              />
            </div>
          </div>

          
        
        </div>
      </div>
    </div>

    <div class="pt-5">
      <div class="flex justify-end">
        <router-link
          :to="{ name: 'Blogs' }"
          :tag="Button"
          class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >Geri Git</router-link
        >

        <button
          class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
          :disabled="saveEnabled"
          @click="saveBlog"
        >
          Kaydet
        </button>
      </div>
    </div>
  </page-component>
</template>

<script>
import PageComponent from "@/components/PageComponent.vue";
export default {
  components: {
    PageComponent,
  },
  data() {
    return {
      blog: {
        title: "",
        content: "",
        image: "",
      },
      saveButtonClicked: false,
    };
  },
  methods: {
    saveBlog() {
      this.saveButtonClicked = true;
      this.$store.dispatch("saveBlog", this.blog);
    },
  },
  computed: {
    saveEnabled() {
      if (
        this.blog.title.length > 0 &&
        this.blog.content.length > 0 &&
        this.blog.image.length > 0 
      ) {
        return false;
      } else {
        return true;
      }
    },
  },
  beforeRouteLeave(to, from, next) {
    if (
      (this.blog.title.length > 0 ||
        this.blog.content.length > 0 ||
        this.blog.image.length > 0) &&
      !this.saveButtonClicked
    ) {
      if (
        confirm(
          "Kaydedilmemiş değişiklikler var. Yine de çıkmak ister misiniz?"
        )
      ) {
        next();
      } else {
        next(false);
      }
    } else {
      next();
    }
  },
};
</script>
