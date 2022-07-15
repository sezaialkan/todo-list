<template>
  <div class="page">
    <h2><span class="logo">T<span>oo</span>d<span>o</span></span> Güncelle</h2>
    <form @submit.prevent="update">
      <div class="form-group">
        <label class="logo">T<span>oo</span>D<span>o</span> Ad</label>
        <input v-model="name" type="text">
      </div>
      <div class="form-group">
        <label class="logo">T<span>oo</span>D<span>o</span> Detay</label>
        <textarea v-model="desc" cols="30" rows="10"></textarea>
      </div>
      <div class="form-group">
        <button>Güncelle</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
    props : ['id'],
    data(){
        return{
            name : '',
            desc : '',
            uri : 'http://localhost:3004/todo/' + this.id
        }
    },
    mounted(){
        fetch(this.uri)
        .then((e)=>e.json())
        .then(data=>{
            this.name = data.name;
            this.desc = data.desc;
        }).catch((err)=>console.log(err))
    },
    methods : {
        update(){
            fetch(this.uri,{
                method : 'PATCH',
                headers : {'Content-type':'application/json'},
                body : JSON.stringify({name:this.name,desc:this.desc})
            }).then(()=>{
                this.$router.push('/')
            }).catch((err)=>console.log(err))
        }
    }
    
}
</script>

<style>

</style>