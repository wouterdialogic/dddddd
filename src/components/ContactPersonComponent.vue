<template>
	<div class="footer mt-24">
		<h1 class="text-center text-grey-dark m-4 mb-6" >Contact</h1>
		<div class="block sm:block md:block sm:justify-center">
			<div class="flex">
				<div class="w-1/6">
				</div>

				<div class="w-1/3">
					<img class="mr-auto ml-auto block center w-40 h-40 rounded-full mr-4 " src="@/assets/img/sven.jpg" alt="Avatar of Jonathan Reinink"><br>
					<div class="text-sm block">
						<p class="m-1 mb-2 text-center text-lg block text-black leading-none transition-slow transition-property-shadow transition">Sven Maltha</p>
						<p class="m-1 text-center text-sm block text-grey-dark">Interim directeur</p>
						<p class="m-1 text-center text-sm block text-grey-dark">Maltha@dialogic.nl</p>
					</div>
				</div>
	
				<div  class="w-1/3">
					<img class="mr-auto ml-auto block center w-40 h-40 rounded-full mr-4 " src="@/assets/img/Simone Bremer.jpg" alt="Avatar of Jonathan Reinink"><br>
					<div class="text-sm block">
						<p class="m-1 mb-2 text-center text-lg block text-black leading-none transition-slow transition-property-shadow transition">Simone Bremer-Dijkhuis</p>
						<p class="m-1 text-center text-sm block text-grey-dark">Landelijk projectleider</p>
						<p class="m-1 text-center text-sm block text-grey-dark">S.Bremer-Dijkhuis@zonh.nl</p>
					</div>
				</div>
		
			</div>
		</div>
		
	</div>
</template>

<script>

export default {
  name: 'ContactPersonComponent',
  props: {
    header: String,
    paragraph: String,
    buttonText: String,
    buttonLink: String,
    msg: String,
    map: Object
  },
  mounted: function () {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
	color: #000;
	text-decoration: none;
}
a:link {
	color: #6d6d6d;
}
a:visited {
	color: #6d6d6d;
}
a:hover {
	color: #6d6d6d;
}
</style>
