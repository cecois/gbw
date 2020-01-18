<template>
  <div id="app">
    <router-view />
  
  </div>
</template>

<script>

export default {
  name: "app"
};
</script>

<style lang="scss">
// Import Bulma's core
@import "~bulma/sass/utilities/_all";
// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";

@import "@/sass/style.scss";
// ---------------------------- BADGE, BULMA -------
@-webkit-keyframes spinAround {
  from {
    -webkit-transform: rotate(0);
    transform: rotate(0)
  }
  to {
    -webkit-transform: rotate(359deg);
    transform: rotate(359deg)
  }
}

@keyframes spinAround {
  from {
    -webkit-transform: rotate(0);
    transform: rotate(0)
  }
  to {
    -webkit-transform: rotate(359deg);
    transform: rotate(359deg)
  }
}


</style>