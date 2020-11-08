import Vue from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
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
Vue.component("f-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
