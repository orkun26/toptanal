<template>
  <div>
    <div class="navbar-container">
      <img class="logo" :src="logo" />
      <div class="search-box">
        <div class="input-box">
          <input type="text" />
        </div>
        <button class="btn search-button"><f-icon icon="search" /></button>
      </div>
      <div class="buttons-box">
        <f-icon icon="user" />
        <span class="text-secondary">Hesabım</span>
        <f-icon icon="sort-down"></f-icon>
      </div>
      <div class="cart-box">
        <f-icon icon="shopping-cart"></f-icon>
      </div>
    </div>
    <div class="navbar-bottom">
      <div class="container">
        <div class="d-flex navbar-elements">
          <div v-for="element in bottomMenuElements" :key="element">
            <span>{{ element }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logo from "../assets/toptanalogo.png";
export default {
  data() {
    return {
      logo, //logo : logo
      bottomMenuElements: [
        "11. Yıla Özel",
        "Elektronik",
        "Ev & Ofis",
        "Kişisel Bakım",
        "Otomativ & Yapı Market",
        "Spor & Outdoor & Hobi",
      ],
    };
  },
};
</script>

<style scoped>
hr {
  position: relative;
  top: -20px;
  color: red;
}
.navbar-bottom {
  background: #f2f2f2;
}
.navbar-bottom .navbar-elements {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  cursor: pointer;
}
.navbar-bottom .navbar-elements div {
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.navbar-bottom .navbar-elements div:hover {
  color: #1f367b;
  background: #fff !important;
}
.navbar-container {
  padding-left: 50px;
  padding-right: 50px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.logo {
  width: 25%;
}
.search-box {
  position: relative;
  width: 50%;
}
.search-button {
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 25px;
  background: #007bc1;
  color: white;
  font-size: 12px;
  height: 30px;
  transition: font-size 1s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.search-button:hover {
  color: white;
  font-size: 14px;
}

.search-box input {
  border: 0.5px #007bc1 solid;
  width: 100%;
  padding: 6px;
  height: 30px;
  border-right: none;
  border-radius: 15px;
}
.search-box input:focus {
  outline: none;
}
</style>