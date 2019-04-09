<template>
  <div class="Header">
    <h1 class="my-5" :class="header_classes">{{header}}</h1>
    <p :class="paragraph_classes">{{paragraph}}</p>

    <p class="mt-8" :class="paragraph_classes">{{button_paragraph}}</p>
    <a :href="button_link"><button class="border border-grey-light" :class="button_classes">
      {{button_text}}
    </button></a>

    <p  class="mt-8" :class="paragraph_classes">{{button_paragraph2}}</p>
    <a :href="button_link2"><button class="border border-grey-light" :class="button_classes">
      {{button_text2}}
    </button></a>
  </div>
</template>

<script>

export default {
  name: 'Header',
  props: {
    header: String,
    header_classes: String,
    paragraph: String,
    paragraph_classes: String,
    
    button_paragraph: String,
    button_text: String,
    button_link: String,
    button_paragraph2: String,
    button_text2: String,
    button_link2: String,
    button_classes: String,
  },
  mounted: function () {

  },
}
</script>

<style scoped>

</style>
