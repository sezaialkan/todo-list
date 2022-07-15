<template> 
<div>
  <div class="header">
    <h1>T<span>oo</span>D<span>o</span></h1>
    <p>Oluştur, Takip Et, Erteleme</p>
    <NavBar />
  </div>
  <RouterView  />
</div>
</template>

<script>

import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/nav.vue'

export default {
  components : {NavBar, RouterView},
}

</script>
<style></style>
