<template>
  <page-component title="Meyve Sebze Oluştur">
    <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
      <div class="pt-8 space-y-6 sm:pt-10 sm:space-y-5 bg-gray-100">
        <div>
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Bitki bilgileri
          </h3>
        </div>
        <div class="space-y-6 sm:space-y-5">
          <div
            class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-300 sm:pt-5"
          >
            <label
              class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Bitki Adı
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="text"
                class="max-w-lg block w-full shadow-sm border-2 border-gray-700 sm:max-w-xs sm:text-sm rounded-md"
                v-model="plant.name"
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
                v-model="plant.description"
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
                v-model="plant.image"
              />
            </div>
          </div>

          <div
            class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-300 sm:pt-5"
          >
            <label
              class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Bölge
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <select
                class="max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-700 border-2 rounded-md"
                v-model="plant.region"
              >
                <option selected disabled>Bölge seçiniz</option>
                <option value="Akdeniz">Akdeniz</option>
                <option value="Doğu Anadolu">Doğu Anadolu</option>
                <option value="Ege">Ege</option>
                <option value="Güneydoğu Anadolu">Güneydoğu Anadolu</option>
                <option value="İç Anadolu">İç Anadolu</option>
                <option value="Marmara">Marmara</option>
                <option value="Karadeniz">Karadeniz</option>
              </select>
            </div>
          </div>
          <div class="flex justify-center">
            <div class="form-check form-check-inline">
              <input
                class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                v-model="plant.type"
                value="Meyve"
              />
              <label
                class="form-check-label inline-block text-gray-800"
                for="inlineRadio10"
                >Meyve</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                v-model="plant.type"
                value="Sebze"
              />
              <label
                class="form-check-label inline-block text-gray-800"
                for="inlineRadio20"
                >Sebze</label
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="pt-5">
      <div class="flex justify-end">
        <router-link
          :to="{ name: 'Plants' }"
          :tag="Button"
          class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >Geri Git</router-link
        >

        <button
          class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
          :disabled="saveEnabled"
          @click="savePlant"
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
      plant: {
        name: "",
        description: "",
        image: "",
        type: "",
        region: "",
      },
      saveButtonClicked: false,
    };
  },
  methods: {
    savePlant() {
      this.saveButtonClicked = true;
      this.$store.dispatch("savePlant", this.plant);
    },
  },
  computed: {
    saveEnabled() {
      if (
        this.plant.name.length > 0 &&
        this.plant.description.length > 0 &&
        this.plant.image.length > 0 &&
        this.plant.type.length > 0 &&
        this.plant.region.length > 0
      ) {
        return false;
      } else {
        return true;
      }
    },
  },
  beforeRouteLeave(to, from, next) {
    if (
      (this.plant.name.length > 0 ||
        this.plant.description.length > 0 ||
        this.plant.image.length > 0 ||
        this.plant.type.length > 0 ||
        this.plant.region.length > 0) &&
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
