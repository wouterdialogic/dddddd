<template>
  <div class="spacer" :class="classes" :style="{'height': height}">

    <div class="flex-1">

      <div v-if="background_image_url" class="flex-1">
        <img :style="'height: '+height" :src="background_image_url" class="w-full float-left"><br><br>
      </div>

    </div>

  </div>
</template>

<script>

export default {
  name: 'SpacerComponent',
  props: {
    background_image_url: String,
    classes: String,
    height: String,
  },
  mounted: function () {

  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
