<template>
  <div class="container">
    <p class="h4">Üye Girişi</p>
    <hr />
    <div class="form-group">
      <label for="mail">Eposta Adresinizi Giriniz</label>
      <input
        autocomplete="false"
        v-model="mail"
        type="email"
        class="form-control"
        id="mail"
      />
      <label for="password">Şifre</label>
      <input
        v-model="password"
        autocomplete="false"
        type="password"
        class="form-control"
        id="password"
      />
      <div class="mt-3">
        <button @click="girisYap" class="btn btn-success">Giriş Yap</button>
        veya
        <button class="btn btn-primary">Üye Olmadan Devam Et</button>
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
export default {
  data() {
    return {
      mail: "",
      password: "",
    };
  },
  methods: {
    girisYap() {
      //Giriş Bilgilerini sunucuya göndererek
      //giriş yapılmasını bekler
      alert(this.mail);
    },
  },
};
</script>

<style>
</style>