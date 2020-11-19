<template>
  <div class="home-body">
    <section class="pattern-group pattern-group-t-0 pattern-group-p-home">
      <Navbar />
    </section>
    <section>
      <div class="container">
        <div class="row">
          <div class="col-10">
            <Slide />
          </div>
          <div class="col-2">
            <img :src="require('./assets/images/slaytyan.png')" />
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="row">
          <div v-for="i in 6" :key="i" class="col-4">
            <img
              style="width: 105%; padding-top: 10px"
              :src="require('./assets/images/altili/' + i + '.png')"
            />
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container py-4">
        <IcMenu />
      </div>
    </section>
    <section>
      <div class="container">
        <BenzerUrunler />
      </div>
      <div class="container">
        <div class="card p-4">
          <BenzerUrunler />
        </div>
      </div>
      <div class="container">
        <BenzerUrunler ikincigorunum="true" />
      </div>
    </section>
    <section>
      <div class="container-fluid">
        <hr />
        <div class="d-flex justify-content-center">
          <img :src="require('./assets/images/markalar.png')" />
        </div>
      </div>
    </section>
    <section>
      <div class="container-fluid">
        <div class="d-flex justify-content-center">
          <img :src="require('./assets/images/yeşilbilgiler.png')" />
        </div>
      </div>
    </section>
    <section>
      <div class="container-fluid">
        <div class="d-flex justify-content-center">
          <img :src="require('./assets/images/enaltfooter.png')" />
        </div>
      </div>
    </section>
    <!-- <IslemBasarili />
    <hr />
    <UyeKayit />
    <hr />

    <hr />
    <Filtre />
    <hr />

    <hr />
    <div class="container">
      <Liste :elemanlar="kategoriler" />
      <Liste :coklu="true" :elemanlar="markalar" />
      <Liste :coklu="true" :elemanlar="fiyatAraliklari" />
    </div>
    <hr /> -->
  </div>
</template>
<script>
/* eslint-disable */
import Filtre from "./components/Filtre";
import UyeKayit from "./components/UyeKayit";
import IslemBasarili from "./components/IslemBasarili";
import Navbar from "./components/Navbar.vue";
import BenzerUrunler from "./components/BenzerUrunler.vue";
import Liste from "./components/Liste.vue";
import Slide from "./components/Slide.vue";
import IcMenu from "./components/IcMenu.vue";

export default {
  data() {
    return {
      kategoriler: [
        "Mobil & Aksesuar",
        "Akıllı Saat & Bileklikler",
        "Aydınlatma Sistemleri",
        "Bilgisayar & Tablet",
        "Küçük Ev Aletleri",
        "Tc,Görüntü & Ses Sistemleri",
      ],
      markalar: [
        "Acura",
        "Ban-co",
        "Dat",
        "Dextel",
        "Diamond",
        "Emrtech",
        "Everton",
        "Fepe",
        "Arçelik",
        "Beko",
        "Casper",
        "Nvidia",
      ],
      fiyatAraliklari: [
        "70₺ ve altı",
        "70₺ - 200₺",
        "200₺ - 250₺",
        "250₺ - 350₺",
        "350₺ - 500₺",
        "500₺ - 1000₺",
        "1000₺ - 10000₺",
      ],
    };
  },
  components: {
    Filtre,
    IslemBasarili,
    UyeKayit,
    Navbar,
    BenzerUrunler,
    Liste,
    Slide,
    IcMenu,
  },
};
</script>
<style>
</style>