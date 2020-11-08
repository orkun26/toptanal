<template>
  <div class="row my-4">
    <div class="col-6">
      <div class="card" style="width: 18rem">
        <div class="card-body">
          <div class="card-title">{{ baslik }}</div>
          <ul v-if="elemanlar.length != 0" class="list-group liste">
            <li
              v-for="(item, index) in elemanlar"
              :key="index"
              class="list-group-item item"
              :class="
                (item === seciliKategori) & (coklu != true) ? 'active' : ''
              "
              @click="itemSec(item)"
            >
              <input
                v-if="coklu"
                :checked="isaretliler.includes(item) == true"
                type="checkbox"
              />
              {{ item }}
            </li>
          </ul>
          <h4 v-if="elemanlar.length == 0">Gösterilecek Veri Yok</h4>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["coklu", "baslik", "elemanlar"],
  data() {
    return {
      seciliKategori: "",
      isaretliler: [],
    };
  },
  methods: {
    itemSec(item) {
      this.seciliKategori = item;
      if (this.isaretliler.includes(item)) {
        this.isaretliler = this.isaretliler.filter((isaretli) => {
          return isaretli != item;
        });
      } else {
        this.isaretliler.push(item);
      }
    },
  },
};
</script>
<style>
.item {
  border: none !important;
  cursor: pointer;
}
.card-body {
  padding-right: 5px !important;
}
.liste {
  max-height: 40vh !important;
  overflow-y: scroll;
}

.liste::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #f5f5f5;
}

.liste::-webkit-scrollbar {
  width: 5px;
  background-color: #f5f5f5;
}

.liste::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);
  background-color: #555;
}
</style>