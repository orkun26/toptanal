<template>
  <div class="container">
    <div class="row">
      <div class="col-4">
        <div class="logo-area">
          <a href="/">
            <img :src="require('../assets/images/footerlogo.png')" />
          </a>
        </div>
        <div class="social-icons">
          <i class="fab fa-facebook-square"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-youtube"></i>
        </div>
        <div class="text">
          <div class="title">%100 Güvenli Ödeme</div>
          <div class="description">
            Tüm kredi kartı bilgileriniz 256bit SSL Sertifikası ile
            korunmaktadır.
          </div>
        </div>
      </div>
      <div class="col-8">
        <div class="row">
          <div class="col-4">
            <div class="fs f1" style="">
              <div class="title text-left">Kurumsal</div>
              <ul>
                <li>
                  <a href="https://www.toptanal.com/hakkimizda-sID1">
                    Hakkımızda
                  </a>
                </li>
                <li>
                  <a href="https://www.toptanal.com/gizlilik-sozlesmesi-sID2">
                    Gizlilik Sözleşmesi
                  </a>
                </li>
                <li>
                  <a href="https://www.toptanal.com/kullanici-sozlesmesi-sID3">
                    Kullanıcı Sözleşmesi
                  </a>
                </li>
                <li>
                  <a href="https://www.toptanal.com/iletisim-sID4">
                    İletişim
                  </a>
                </li>
                <li>
                  <a href="https://www.toptanal.com/sss-sID0">
                    Sıkça Sorulan Sorular
                  </a>
                </li>
                <li>
                  <a href="https://www.toptanal.com/siparis-takip-sID0">
                    Sipariş Takip
                  </a>
                </li>
                <li>
                  <a href="https://www.toptanal.com/havale-bildirim-sID0">
                    Havale Bildirimleri
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-4">
            <div class="fs f1" style="">
              <div class="title text-left">Kategoriler</div>
              <ul>
                <li>
                  <a href="https://www.toptanal.com/11-yila-ozel-c-194">
                    11. Yıla Özel
                  </a>
                </li>
                <li>
                  <a href="https://www.toptanal.com/elektronik-c-154">
                    Elektronik
                  </a>
                </li>
                <li>
                  <a href="https://www.toptanal.com/ev-ofis-c-160">
                    Ev &amp; Ofis
                  </a>
                </li>
                <li>
                  <a href="https://www.toptanal.com/kisisel-bakim-c-165">
                    Kişisel Bakım
                  </a>
                </li>
                <li>
                  <a href="https://www.toptanal.com/otomotiv-yapi-market-c-170">
                    Otomotiv &amp; Yapı Market
                  </a>
                </li>
                <li>
                  <a href="https://www.toptanal.com/spor-outdoor-hobi-c-175">
                    Spor &amp; Outdoor &amp; Hobi
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-4">
            <div class="fs f3" style="">
              <div class="title text-left">Bize Ulaşın</div>
              <strong>Toptanal&nbsp; İletişim Adres Bilgileri :</strong
              ><br /><br /><strong
                >Çalışma Saatlerimiz :<br />
                Pazartesi - Cuma:09:00-17:30-Cumartesi:12:00</strong
              ><br /><br /><strong>Adres Bilgilerimiz :</strong><br />
              Ord. Porf. Cemil Birsel Cad. Paçacı Sokak No:11 K:3 D:48 Tahtakale
              Eminönü/İstanbul<br /><br /><strong>Telefon :</strong> 0212 522 86
              83<br /><strong>Gsm :</strong> 0554 471 14 14<br /><strong
                >WhatsApp :</strong
              >
              0553 430 15 00<br /><strong>E- Posta :</strong>
              siparis@toptanal.com
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row footer-text"><div class="col-md-12 text-center"></div></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css");

.fs .title {
  margin-top: 15px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  margin-bottom: 15px;
}
a {
  text-decoration: none;
  background-color: transparent;
}
ul {
  padding: 0;
}
ul li a:before {
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  content: ">";
}
ul li {
  list-style: none;
}
ul li a {
  display: block;
  color: #fff;
  font-size: 13px;
  position: relative;
  padding-left: 15px;
}
.title {
  font-size: 20px;
  margin-bottom: 10px;
}
.description {
  font-size: 15px;
}
.social-icons {
  display: flex;
  flex-direction: row;
  font-size: 25px;
  justify-content: space-evenly;
  width: 40%;
  margin-bottom: 10px;
}
.container {
  color: white;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
}
.logo-area {
  margin: 15px 0;
}
.logo-area img {
  max-width: 280px;
  max-height: 150px;
}
.footer-text {
  margin-top: 10px;
  height: 30px;
  border-top: 2px white solid;
}
</style>