<template>
  <div class="hello">
    <h1 class="text-dia text-right mx-12">bananas</h1>
    <div class="bg-dia" style="margin-top: -7px">
      <!-- <h1>Data, dialoog, monkey</h1> -->
      <p class="text-white text-right mx-12 pt-5">Let me just ramble about monkeys.<br> Some monkeys like bananas, other like coconuts. Who am I kidding? All Monkeys like bananas! <br> Let me just ramble about monkeys. </p>

      <h3 class="text-center text-white p-3">Wouter</h3>
      <div class="flex bg-dia">
        <div class="flex-2 text-grey-darker text-center px-4 py-2 m-2"></div>
        <!-- <div style="height: 150px; width: 100px; min-width: 100px; min-height: 150px;" class="flex-1 text-grey-darker text-center bg-grey-light px-4 py-2 m-2"></div> -->
        <div style="height: 150px;" class="flex-1 text-grey-darker text-center bg-grey-light px-4 py-2 m-2"></div>
        <div class="flex-1 text-grey-darker text-center bg-grey-light px-4 py-2 m-2"></div>
        <div class="flex-1 text-grey-darker text-center bg-grey-light px-4 py-2 m-2"></div>
        <div class="flex-3 text-grey-darker text-center px-4 py-2 m-2"></div>
      </div>
      <div class="flex bg-dia">
        <div class="flex-2 text-grey-darker text-center px-4 py-2 "></div>
        <div class="flex-1 text-center text-white px-4 py-2 ">Verklaring 1</div>
        <div class="flex-1 text-center text-white px-4 py-2 ">Verklaring 2</div>
        <div class="flex-1 text-center text-white px-4 py-2 ">Verklaring 3</div>
        <div class="flex-3 text-grey-darker text-center px-4 py-2 "></div>
      </div>  

      <h3 class="text-center text-wrap text-white p-3">Testing with fractions</h3>
      <div class="flex bg-dia" style="height: 200px;">
        <div class="w-1/8 text-grey-darker text-center px-4 py-2 m-2"></div>
        <!-- <div style="height: 150px; width: 100px; min-width: 100px; min-height: 150px;" class="flex-1 text-grey-darker text-center bg-grey-light px-4 py-2 m-2"></div> -->
        <div style="height: 200px;" class="w-1/4 text-grey-darker text-center m-2">
          <div>
            <img style="height: 150px" alt="Vue logo" src="@/assets/img/banner.jpg" class="">
          </div>
          <div>
            <p class="px-5 m-3 text-white">daarzesf esf o</p>
          </div>
        </div>
        <div style="height: 200px;" class="w-1/4 text-grey-darker text-center m-2">
          <div>
            <img style="height: 150px" alt="Vue logo" src="@/assets/img/banner.jpg" class="">
          </div>
          <div>
            <p class="px-5 m-3 text-white">daawad awd awd awdrzo</p>
          </div>
        </div>
        <div style="height: 200px;" class="w-1/4 text-grey-darker text-center m-2">
          <div>
            <img style="height: 150px" alt="Vue logo" src="@/assets/img/banner.jpg" class="">
          </div>
          <div>
            <p class="px-5 m-3 text-white">daarzo</p>
          </div>
        </div>
        <div class="w-1/8 text-grey-darker text-center px-4 py-2 m-2"></div>
      </div>

      <h3 class="text-center text-wrap text-white p-3">Testing with fractions and media queries</h3>
      <div class="block bg-dia justify-center sm:block md:block sm:justify-center md:flex lg:flex " >
        <!-- <div class="w-1/8 text-grey-darker text-center px-4 py-2 m-2"></div> -->

        <div class="flex-item bg-dia text-grey-darker text-center m-2 sm-center sm:bg-dia sm:block md-center md:w-full md:block md:bg-dia lg:w-1/4 lg:bg-dia hover:bg-grey-light  ">
          <div>
            <img alt="Vue logo" style="height: 160px;" src="@/assets/img/banner.jpg" class="w-2/3 sm:w-2/3 md:w-full hover:bg-blue">
          </div>
          <div>
            <p class="px-5 m-3 text-white">1</p>
          </div>
        </div>

        <div  class="lg:w-1/4 md:w-full sm:block md:block md:bg-dia lg:bg-dia bg-dia sm:bg-dia flex-item text-grey-darker text-center m-2">
          <div>
            <img alt="Vue logo" style="height: 160px;" src="@/assets/img/banner.jpg" class="w-2/3 sm:w-2/3  md:w-full">
          </div>
          <div>
            <p class="px-5 m-3 text-white">daawad awd awd awdrzo</p>
          </div>
        </div>

        <div  class="lg:w-1/4 md:w-full sm:block md:block md:bg-dia lg:bg-dia bg-dia sm:bg-dia flex-item text-grey-darker text-center m-2">
          <div>
            <img alt="Vue logo" style="height: 160px;" src="@/assets/img/banner.jpg" class="w-2/3 sm:w-2/3  md:w-full">
          </div>
          <div>
            <p class="px-5 m-3 text-white">daarzo</p>
          </div>
        </div>
        <!-- <div class="w-1/8 text-grey-darker text-center px-4 py-2 m-2"></div> -->
      </div>
      

      <h3 class="text-center text-white p-3">Testing with fractions 2</h3>
      <div class="flex bg-dia">
        <div class="w-1/8 text-grey-darker text-center px-4 py-2 m-2"></div>
        <div style="height: 150px;" class="w-1/6 text-grey-darker text-center  px-4 py-2 m-2"></div>
        <div class="w-1/3 text-grey-darker text-center bg-grey-light px-4 py-2 m-2"></div>
        <div class="w-1/3 text-grey-darker text-center bg-grey-light px-4 py-2 m-2"></div>
        <div class="w-1/6 text-grey-darker text-center px-4 py-2 m-2"></div>
        <div class="w-1/8 text-grey-darker text-center px-4 py-2 m-2"></div>
      </div>
      <div class="flex bg-dia">
        <div class="w-1/6 text-grey-darker text-center px-4 py-2 "></div>
        <div class="w-1/3 text-center text-white px-4 py-2 ">Verklaring 1</div>
        <div class="w-1/3 text-center text-white px-4 py-2 ">Verklaring 2</div>
        <div class="w-1/8 text-grey-darker text-center px-4 py-2 "></div>
      </div>    

      <h3 class="text-center text-white p-3">Testing with fractions 3</h3>
      <div class="flex bg-dia">
        <div class="w-1/8 text-grey-darker text-center px-4 py-2 m-2"></div>
        <div style="height: 150px;" class="w-1/3 text-grey-darker text-center  px-4 py-2 m-2"></div>
        <div class="w-1/3 text-grey-darker text-center bg-grey-light px-4 py-2 m-2"></div>
        <div class="w-1/3 text-grey-darker text-center px-4 py-2 m-2"></div>
        <!-- <div class="w-1/6 text-grey-darker text-center px-4 py-2 m-2"></div> -->
        <div class="w-1/8 text-grey-darker text-center px-4 py-2 m-2"></div>
      </div>
      <div class="flex bg-dia">
        <div class="w-1/8 text-grey-darker text-center px-4 py-2 "></div>
        <div class="w-1/3 text-center text-white px-4 py-2 "></div>
        <div class="w-1/3 text-center text-white px-4 py-2 ">Verklaring 2</div>
        <div class="w-1/3 text-center text-white px-4 py-2 "></div>
        <div class="w-1/8 text-grey-darker text-center px-4 py-2 "></div>
      </div>



      <h3 class="text-center text-white p-3">Is</h3>
      <div class="flex bg-dia">
        <div class="flex-2 text-grey-darker text-center px-4 py-2 m-2"></div>
        <div style="height: 150px; width: 100px; min-width: 100px; min-height: 150px;" class="flex-1 text-grey-darker text-center px-4 py-2 m-2"></div>
        <div class="flex-1 text-grey-darker text-center bg-grey-light px-4 py-2 m-2"></div>
        <div class="flex-1 text-grey-darker text-center  px-4 py-2 m-2"></div>
        <div class="flex-3 text-grey-darker text-center px-4 py-2 m-2"></div>
      </div>
      <div class="flex bg-dia">
        <div class="flex-2 text-grey-darker text-center px-4 py-2 "></div>
        <div class="flex-1 text-center text-white px-4 py-2 "></div>
        <div class="flex-1 text-center text-white px-4 py-2 ">Verklaring 2</div>
        <div class="flex-1 text-center text-white px-4 py-2 "></div>
        <div class="flex-3 text-grey-darker text-center px-4 py-2 "></div>
      </div>

      <h3 class="text-center text-white p-3">Gek</h3>
      <div class="flex bg-dia">
        <div class="flex-2 text-grey-darker text-center px-4 py-2 m-2"></div>
        <div class="flex-2 text-grey-darker text-center px-4 py-2 m-2"></div>
        <div class="flex-2 text-grey-darker text-center px-4 py-2 m-2"></div>
        <div class="flex-2 text-grey-darker text-center px-4 py-2 m-2"></div>
        <div class="flex-2 text-grey-darker text-center px-4 py-2 m-2"></div>
        <div style="height: 150px;" class="flex-1 text-grey-darker text-center bg-grey-light px-4 py-2 m-2"></div>
        <div class="flex-1 text-grey-darker text-center bg-grey-light px-4 py-2 m-2"></div>
        <div class="flex-3 text-grey-darker text-center px-4 py-2 m-2"></div>
        <div class="flex-3 text-grey-darker text-center px-4 py-2 m-2"></div>
        <div class="flex-3 text-grey-darker text-center px-4 py-2 m-2"></div>
        <div class="flex-3 text-grey-darker text-center px-4 py-2 m-2"></div>
        <div class="flex-3 text-grey-darker text-center px-4 py-2 m-2"></div>
      </div>

      <div class="flex bg-dia">
        <div class="flex-2 text-grey-darker text-center px-4 py-2 "></div>
        <div class="flex-2 text-grey-darker text-center px-4 py-2 "></div>
        <div class="flex-2 text-grey-darker text-center px-4 py-2 "></div>
        <div class="flex-2 text-grey-darker text-center px-4 py-2 "></div>
        <div class="flex-2 text-grey-darker text-center px-4 py-2 "></div>
        <div class="flex-2 text-grey-darker text-center px-4 py-2 "></div>
        <div class="flex-2 text-grey-darker text-center px-4 py-2 "></div>
        <div class="flex-1 text-center text-white px-4 py-2 ">Verklaring 1</div>
        <div class="flex-1 text-center text-white px-4 py-2 ">Verklaring 3</div>
        <div class="flex-3 text-grey-darker text-center px-4 py-2 "></div>
        <div class="flex-3 text-grey-darker text-center px-4 py-2 "></div>
        <div class="flex-3 text-grey-darker text-center px-4 py-2 "></div>
        <div class="flex-3 text-grey-darker text-center px-4 py-2 "></div>
        <div class="flex-3 text-grey-darker text-center px-4 py-2 "></div>
        <div class="flex-3 text-grey-darker text-center px-4 py-2 "></div>
        <div class="flex-3 text-grey-darker text-center px-4 py-2 "></div>
      </div>


    </div>
  </div>
</template>

<script>

$(document).ready(function() {
    $('.viewport').mouseenter(function(e) {
        $(this).children('a').children('img').animate({ height: '360', left: '0', top: '0', width: '360'}, 1000);
        $(this).children('a').children('span').fadeIn(200);
    }).mouseleave(function(e) {
        $(this).children('a').children('img').animate({ height: '730', left: '-185', top: '-185', width: '730'}, 1000);
        $(this).children('a').children('span').fadeOut(200);
    });
});

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    map: Object
  },
  mounted: function () {
    // let map = ''this.map;''

//     let map = leaflet.map('mapid').setView([51.505, -0.09], 13);

//      leaflet.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZGlhbG9naWMiLCJhIjoiY2lzNzk0Zm5jMDAweTJ1czRxNWg1dnBmbSJ9.nU2Nx5eOLUCOxBGzrD8daA', {
//   maxZoom: 18,
//   //attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
//     //'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
//     //'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//   id: 'mapbox.streets'
// }).addTo(map);
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
