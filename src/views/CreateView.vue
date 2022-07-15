<template>
  <div class="page">
    <h2><span class="logo">T<span>oo</span>d<span>o</span></span> Oluştur</h2>
    <form @submit.prevent="create">
      <div class="form-group">
        <label class="logo">T<span>oo</span>D<span>o</span> Ad</label>
        <input v-model="name" type="text">
      </div>
      <div class="form-group">
        <label class="logo">T<span>oo</span>D<span>o</span> Detay</label>
        <textarea v-model="desc" cols="30" rows="10"></textarea>
      </div>
      <div class="form-group">
        <button>Ekle</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data(){
    return{
      name : '',
      desc : ''
    }
  },
  methods : {
    create(){
      let article = {
        id : Math.floor(Math.random() * 1000000),
        name : this.name,
        desc : this.desc,
        status : false
      }

      fetch('http://localhost:3004/todo',{
        method : 'POST',
        headers : {'Content-Type':'application/json'},
        body : JSON.stringify(article)
      }).then(()=>{
        this.$router.push('/')
      }).catch((err)=>console.log(err))
    }
  }
}
</script>

<style>

</style>