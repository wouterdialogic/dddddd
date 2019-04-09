<template>
  <div class="hello">
    <h1 class="my-5">{{header}}</h1>
   <ContactPersonComponent
    
   >
     
   </ContactPersonComponent>
  </div>
</template>

<script>
import ContactPersonComponent from '@/components/ContactPersonComponent.vue'

export default {
  name: 'FooterComponent',
  props: {
    header: String,
    paragraph: String,
    buttonText: String,
    buttonLink: String,
    msg: String,
    map: Object
  },
  components: {

    ContactPersonComponent,
  },
  mounted: function () {
   
  },
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
