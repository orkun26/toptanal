import Vue from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import "./assets/css/style.css";
import {
  faStar,
  faSearch,
  faUser,
  faSortDown,
  faArrowRight,
  faArrowLeft,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faSearch);
library.add(faUser);
library.add(faSortDown);
library.add(faShoppingCart);
library.add(faArrowRight);
library.add(faArrowLeft);
library.add(faStar);
Vue.component("f-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

// try {
//   //hata çıkarabilecek bir kod var
// } catch (error) {
//   console.log(error);
// }
/*
data -> component değişkenleri
methods -> comp fonksiyonları
components -> comp componentleri
computeds -> işlenmiş veriler
props -> üst komponentden gelen veriler
mixin -> başlangıç araçların
watch -> bi değişkenin değişimini yakalamak
beforeMount -> f() component ekrana monte edilmeden çalışır
mounted -> f() comp monte edilince
beforeUpdate -> f() comp güncellenmeden önce
updated -> f() comp güncellendikten sonra
*/
