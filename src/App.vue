<template>
  <div>
    <IslemBasarili />
    <hr />
    <UyeKayit />
    <hr />
    <Navbar />
    <hr />
    <Filtre />
    <hr />
    <BenzerUrunler />
    <hr />
    <div class="container">
      <Liste :elemanlar="kategoriler" />
      <Liste :coklu="true" :elemanlar="markalar" />
      <Liste :coklu="true" :elemanlar="fiyatAraliklari" />
    </div>
    <hr />
    <Slide />
  </div>
</template>
<script>
import Filtre from "./components/Filtre";
import UyeKayit from "./components/UyeKayit";
import IslemBasarili from "./components/IslemBasarili";
import Navbar from "./components/Navbar.vue";
import BenzerUrunler from "./components/BenzerUrunler.vue";
import Liste from "./components/Liste.vue";
import Slide from "./components/Slide.vue";

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
  },
};
</script>
<style>
</style>