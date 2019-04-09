<template>
  <div id="app" @click="calculate_v($event)">
    
    <div class="container mx-auto">


      <BannerComponent
        background_image_url="header"
        text_1="Informatiemanagement"
        text_1_classes="text-grey-darker"
        text_2="bij multidisciplinaire"
        text_2_classes="text-grey-dark"
        text_3="zorgprojecten"
        text_3_classes="text-grey-dark"
      />

      <SpacerComponent 
        :height="basic_spacer_height+'px'"
        :classes="basic_spacer_classes"
        background_image_url=""
      />      

      <HeaderComponent 
        header="Introductie"
        header_classes=""
        paragraph="Het CBB ondersteunt bij het informatiemanagement van de ROS-organisaties. Op deze manier kunnen ROS’en voor informatiemanagement binnen zorgprojecten gebruik maken van gezamenlijk ontwikkelde kennis en tools. In het blok hieronder staat een overzicht van tools die ontwikkeld zijn om ROS-adviseurs te helpen met informatiemanagement."
        paragraph_classes=""

        button_paragraph="Bent u benieuwd wat ROS-organisaties doen?"
        button_text="Naar het ROS-netwerk"
        button_link="https://www.google.com"
        
        button_paragraph2="Wilt u weten hoe ROS-adviseurs met informatiemanagement omgaan?"
        button_text2="Over de ROS-adviseur"
        button_link2="https://www.google.com"
       
        button_classes="bg-white hover:bg-grey-lightest py-2 px-2 mt-6 mr-2"
      ></HeaderComponent>

      <SpacerComponent 
        :height="basic_spacer_height+'px'"
        :classes="basic_spacer_classes"
      />
      
      <h1 class="text-dia text-right mx-12 -mb-5 text-5xl">Toolbox</h1>

    </div> 

    <div class="container-xl mx-lg">

      <BlueThingComponent 
        :rows="rows"
        title="Toolbox"
        intro_text="Onderstaande tools worden door ROS-adviseurs gebruikt om informatie te verzamelen<br>tijdens de verkenning en onderzoeksopzet van projecten"
      ></BlueThingComponent>
    
    </div> 

    <div class="container mx-auto">

      <SpacerComponent 
        :height="basic_spacer_height+'px'"
        :classes="basic_spacer_classes"
      />

      <FooterComponent
      ></FooterComponent>

      <SpacerComponent 
        :height="'200px'"
        :classes="basic_spacer_classes"
      />
      <SpacerComponent 
        :height="basic_spacer_height+'px'"
        :classes="basic_spacer_classes"
      />

      <!-- {{v}} -->

      <div
        v-if="v.hidden"
      >
        <h2 class="text-center my-8">Made by Wouter & Titia
      </h2>
      
      <SpacerComponent 
        :height="'900px'"
        :classes="basic_spacer_classes"
        :background_image_url="require('@/assets/img/deze.jpg')"
      />
      </div>

      <SpacerComponent 
        :height="basic_spacer_height+'px'"
        :classes="basic_spacer_classes"
      />

  <!--  
  
  <h1 class="mt-128">teststuff</h1>
			<div class="grid grid-columns-12 p-2">
			<div class="col-span-2 flex items-center border border-grey-darker">
				<div class="ml-8 mr-8 "><a href="#"><i class="fa fa-bars text-grey-dark" ></i></a></div>
				<div class="border border-grey-darker">Logo</div>
			</div>

			<div class="col-span-10 flex items-center justify-between">
				<form action="" class="flex">
					<input type="text" class="border border-grey py-2 px-2 w-64">
					<button type="submit" class="border-t border-r border-b border-grey py2 px-4 bg-grey-lighter hover:bg-grey-light">
						<i class="fa fa-search text-grey-darker"></i>
					</button>
				</form>
				<div class="flex items-center">
					<a href="#"><i class="fa fa-upload text-grey-dark mr-6"></i></a>
					<a href="#"><i class="fa fa-upload text-grey-dark mr-6"></i></a>
					<a href="#"><i class="fa fa-upload text-grey-dark mr-6"></i></a>
					<a href="#"><img src="https://tailwindcss.com/img/jonathan.jpg" alt= "avatar" class="rounded-full w-8"></a>
				</div>
			</div>
	
		</div>

		<div class="col-span-2 ">
			<img class="w-10 h-10 rounded-full mr-4" src="https://tailwindcss.com/img/jonathan.jpg" alt="Avatar of Jonathan Reinink"><br>
		</div>

		<div class="col-span-2">
			<div class="text-sm">
				<p class="text-black leading-none transition-slow transition-property-shadow transition">Jonathan Reinink</p>
				<p class="text-grey-dark">Aug 18</p>
			</div>
		</div>

		<div class="youtube-body grid grid-columns-12"></div> -->

    </div>

  </div>
</template>

<script>
import BannerComponent from './components/BannerComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue'
// import CKeditorComponent from './components/CKeditorComponent.vue'
import BlueThingComponent from './components/BlueThingComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
import SpacerComponent from './components/SpacerComponent.vue'

export default {
  name: 'app',
  components: {
    BannerComponent,
    HeaderComponent,
    // CKeditorComponent,
    BlueThingComponent,
    FooterComponent,
    SpacerComponent,
  },
  data: function() { 
    return {
      basic_spacer_height: 75,
      basic_spacer_classes: "",
      rows: [
        {
          id: 1,
          title: "Verkenning",
          items: [
            {
              id: 1,
              text: "Ros wijkscan",
              url: "https://www.roswijkscan.nl/",
              image_url: "ROS_wijkscan.svg",
              long_text: "Informatie op maat over onder andere bevolkingssamenstelling, huishoudens, economische status, zorgvraag en zorgaanbod.",
            },
            {
              id: 2,
              text: "Triple-aim dashboard",
              url: "https://diadashboard.nl/cbb-triple-aim/",
              image_url: "Triple_aim.svg",
              long_text: "Een overzicht van relevante informatie uit publiek beschikbare bronnen.",
            },
            
          ]
        },
        {
          id: 2,
          title: "Onderzoeksopzet",
          items: [
            {
              id: 1,
              text: "IM-dashboard",
              long_text: "Bron over informatiemanagement binnen ROS-projecten. Inspiratiedatabank voor indicatoren en ervaring in meten.",
              url: "https://diadashboard.nl/cbb_informatiemanagement",
              image_url: "IM-dashboard.svg",
            },
            {
              id: 2,
              text: "IM-handboek",
              long_text: "Handboek informatiemanagement. Een overzicht van de verzamelde inzichten in informatiemanagement voor de ROS.",
              url: "https://diadashboard.nl/cbb-triple-aim/relevante-documenten",
              image_url: "Handboek.svg",
            },   
          ]
        },
        {
          id: 3,
          title: "Andere bronnen",
          items: [
            {
              id: 2,
              text: "Bronnenlijst",
              long_text: "Lijst van bronnen die kunnen ondersteunen bij informatiemanagement in projecten.",
              url: "https://www.roswijkscan.nl/vaam/index.html",
              image_url: "Andere_bronnen.svg",
            },
            {
              id: 1,
              text: "ZOJP",
              long_text: "Projectendatabank met verschillende ROS projecten.",
              url: "https://www.roswijkscan.nl/vaam/index.html",
              image_url: "ZOJP.svg",
            },
          ]
        }
      ],
      v: {
        a: 0,
        hidden: false,
      },
      c: 'ctrlKey',
      g: 'target.className',
      l: '',
    }
  },
  methods: {
    calculate_v: function(e) {
      this.l = e[this.g];
      if (e) { 
        if (e[this.c] == true && this.v.first == true) {
          this.v.a ++;
          if (this.v.a == 5) {
            this.v.hidden = true;
          } else {
            this.v.hidden = false;
          }
        } else {
          this.v.hidden = false;
          this.v.a --;
          if (e.target.className == 'hello bg-dia') {
            this.v.first = true;
          } else {
            this.v.first = false;
          }
        }
      }
    },
  }
}//
</script>

<style>
#app {
  font-family: 'IBM Plex Sans', sans-serif;
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 00px;
  
}
p, button, h1, h2, h3, a {
  @apply tracking-normal leading-normal text-lg;
  text-decoration: none;
}
button {
  @apply rounded-lg
}
h3 {
  @apply tracking-wide leading-normal text-lg;
  text-decoration: none;
}
h1, h2 {
  @apply tracking-wider
}
</style>
