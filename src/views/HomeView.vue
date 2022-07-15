<template>
  <div class="container">
    <filterNav @filterUpdate="filterStatus = $event" :activeTab="filterStatus" />
    <div v-if="toodo.length">
      <div v-for="keys in filterToodo" :key="keys.id">
        <card :data="keys" @itemDeleteStatus="deleteStatus" @dataRestore="dataRestore" /> 
      </div>
    </div>
    <div v-else >
      Yükleniyor
    </div>  
  </div>
</template>

<script>

import card from '@/components/card.vue'
import filterNav from '@/components/filterNav.vue'

export default {
  components : {card, filterNav},
  data(){
    return{
      toodo : [],
      filterStatus : 'all'
    }
  }, 
  mounted(){
    fetch('http://localhost:3004/todo')
    .then((e)=>e.json())
    .then((data)=>this.toodo=data)
    .catch((err)=>console.log(err))
  },
  methods : {
    deleteStatus(id){
      this.toodo = this.toodo.filter(keys=>{
        return keys.id!==id
      })
    },
    dataRestore(id){
      let restore = this.toodo.find(toodo=>{
        return toodo.id==id
      })

      restore.status = !restore.status
    }
  },
  computed : {
    filterToodo(){
      if(this.filterStatus == 'ok'){
        return this.toodo.filter(toodo=>toodo.status)
      }
      if(this.filterStatus == 'no'){
        return this.toodo.filter(toodo=>!toodo.status)
      }
      return this.toodo
    }
  }
}
</script>

<style>

</style>