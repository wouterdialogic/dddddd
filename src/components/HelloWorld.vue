<template>
  <div class="header">

    <div class="flex-1">

      <div class="flex-1 text-grey-darker py-8">
        <img style="height: 50px; width: 100px;" alt="Vue logo" src="@/assets/img/banner.jpg" class="float-left"><br><br>
      </div>

      <div  style="height: 200px;background-repeat: no-repeat; background-image: url('/img/banner.89d58d23.jpg');" class="flex">->
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
  name: 'HelloWorld',
  props: {
    background_image_url: String,
    text_1: String,
    text_1_classes: String,
    text_2: String,
    text_2_classes: String,
    text_3: String,
    text_3_classes: String,
    msg: String,
  },
  mounted: function () {

  },
  methods: {
    getImgUrl(img) {
      return '~assets/' + img
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#mapid { 
  height: 580px; 
  width: 580px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
