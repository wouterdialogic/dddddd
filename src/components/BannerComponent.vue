<template>
  <div class="header">

    <div class="flex-1">

      <div class="flex-1 text-grey-darker pb-12 pt-8">
        <img style="height: 45px; width: 100px;" alt="Vue logo" src="@/assets/img/cbb_logo.png" class="float-left"><br><br>
      </div>

      <div style="height: 200px; background-repeat: no-repeat;"
       :style="{ 'background-image': 'url(' + require('@/assets/img/'+background_image_url+'.jpg') + ')' }"
       class="flex">
        <div class="flex-1 text-grey-darker px-8 py-8 m-2">
          <div class="float-right">
            <h1 class="text-right" :class="text_1_classes">{{text_1}}</h1>
            <h2 class="text-right" :class="text_2_classes">{{text_2}}</h2>
            <h2 class="text-right" :class="text_3_classes">{{text_3}}</h2>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'BannerComponent',

  props: {
    background_image_url: String,
    text_1: String,
    text_1_classes: String,
    text_2: String,
    text_2_classes: String,
    text_3: String,
    text_3_classes: String,
  },
}
</script>

<style scoped>

</style>
