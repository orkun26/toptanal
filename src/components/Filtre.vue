<template>
  <div class="container">
    
<div class="d-flex">
    <div v-for="(filtre,index) in filtreler" :key="filtre " @click="(sec(index))"
     class="secenek" :class="index==secili?'secilmis':' '">
    
        {{filtre}}
    </div>


</div>

  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  data() { 
    return {

    filtreler:["En Yeniler","En Çok Satanlar","Ürün Adı (A-Z)","Ürün Adı (Z-A)","En Düşük Fiyat","En Yüksek Fiyat","En Çok Oylananlar"]
     ,
     secili:2
    };
  },

  methods:{
      sec(id){
          console.log("tıklandı")
          this.secili=id
      }
  }
};
</script>

<style>
.secenek{
    cursor: pointer;
    background-color:lightgray;
     padding:7px;color:black;
     font-size:12px;text-align: center;}
.secilmis{
background-color:gray;
color:white


}

</style>