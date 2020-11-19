<template>
  <div class="row">
    <div class="col-8 offset-2">
      <div class="d-flex" style="justify-content: space-evenly">
        <div
          v-for="(item, index) in items"
          :key="item"
          class="d-flex justify-content-center align-items-center"
        >
          <span
            :class="
              'text-secondary item ' +
              (selectedItem == index ? 'item-active' : '')
            "
            @click="selectedItem = index"
          >
            {{ item }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedItem: 0,
      items: [
        "Elektronik",
        "Kozmetik & Kişisel Bakım",
        "Ev & Ofis",
        "Spor & Outdoor & Hobi",
      ],
    };
  },
};
</script>

<style>
.item {
  font-size: 15px;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
}
.item-active {
  color: black !important;
}
</style>