<template>
  <div class="hello bg-dia">
    <div class="container mx-auto">

      <div class="bg-dia mt-12" style="margin-top: -11px">
        <p class="text-white text-right mx-12 pt-12" v-html="intro_text"></p>

        <template v-for="row in rows">
          <div :key="row.id" class="my-12">
            <p class="text-2xl text-center text-wrap text-white p-3 my-2">{{row.title}}</p>
            <div class="block bg-dia justify-center sm:block md:block sm:justify-center md:flex lg:flex " >
            
            <template v-for="item in row.items">
              <div :key="item.id" class="mb-12 lg:w-1/4 hover:shadow-3 leftborder sm:block md:w-1/4 flex-item text-grey-darker text-center m-2 mx-8">
              <a :href="item.url" class="bg-grey">
                <div class="leftborder">
                  <div class="-mt-5">
                    <img :alt="item.text" style="height: 160px;" :src="require('@/assets/img/'+item.image_url)" class="w-2/3 sm:w-2/3  md:w-full">
                  </div>

                  <div >
                    <p class="px-5 m-3 text-2xl text-white">{{item.text}}</p>
                  </div>

                  <div v-if="item.long_text">
                    <p class="px-1 text-left text-sm m-3 text-white">{{item.long_text}}</p>
                  </div>
        
                </div>
              </a>
              </div>
            </template>
            
            </div>
          </div>
        </template>

        <div class="p-8">.</div>

      </div>
    
    </div>
  </div>
</template>

<script>

export default {
  name: 'BlueThingComponent',
  props: {
    intro_text: String,
    title: String,
    rows: Array,
  },

  data: function() {
    return {
      
    }
  },

  mounted: function () {
   
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.showme{ 
   display: none;
 }
 .showhim:hover .showme{
   display : block;
 }
 .showhim:hover .ok{
   display : none;
 }

/* h3 {
  margin: 40px 0 0;
} */
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
