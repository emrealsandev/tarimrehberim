<template>
  <page-component title="Ürün Ekle">
    <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
      <div class="pt-8 space-y-6 sm:pt-10 sm:space-y-5 bg-gray-100">
        <div>
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Ürün Bilgileri :
          </h3>
        </div>
        <div class="space-y-6 sm:space-y-5">
          <div
            class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-300 sm:pt-5"
          >
            <label
              class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Ürün Adı
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="text"
                class="max-w-lg block w-full shadow-sm border-2 border-gray-700 sm:max-w-xs sm:text-sm rounded-md"
                v-model="product.name"
              />
            </div>
          </div>

          <div
            class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-300 sm:pt-5"
          >
            <label
              class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Açıklama</label
            >
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="text"
                class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-700 border-2 rounded-md"
                v-model="product.description"
              />
            </div>
          </div>

          <div
            class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-300 sm:pt-5"
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
                v-model="product.image"
              />
            </div>
          </div>
          <div
            class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-300 sm:pt-5"
          >
            <label
              class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Stok</label
            >
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="number"
                class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-700 border-2 rounded-md"
                v-model="product.inventory"
              />
            </div>
          </div>
          <div
            class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t pb-3 sm:border-gray-300 sm:pt-5 rounded-b-lg"
          >
            <label
              class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Fiyat</label
            >
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="number"
                class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-700 border-2 rounded-md"
                v-model="product.price"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="pt-5">
      <div class="flex justify-end">
        <router-link
          :to="{ name: 'Products' }"
          :tag="Button"
          class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >Geri Git</router-link
        >

        <button
          class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
          :disabled="saveEnabled"
          @click="saveProduct"
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
      product: {
        name: "",
        description: "",
        image: "",
        inventory: null,
        price: null,
      },
      saveButtonClicked: false,
    };
  },
  methods: {
    saveProduct() {
      this.saveButtonClicked = true;
      this.$store.dispatch("saveProduct", this.product);
    },
  },
  computed: {
    saveEnabled() {
      if (
        this.product.name.length > 0 &&
        this.product.description.length > 0 &&
        this.product.image.length > 0 &&
        this.product.inventory > 0 &&
        this.product.price > 0
      ) {
        return false;
      } else {
        return true;
      }
    },
  },
  beforeRouteLeave(to, from, next) {
    if (
      (this.product.name.length > 0 ||
        this.product.description.length > 0 ||
        this.product.image.length > 0 ||
        this.product.inventory > 0 ||
        this.product.price > 0) &&
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
