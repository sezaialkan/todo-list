<template>
    <div class="card" :class="{active:desc}">
        <h2>{{data.name}}</h2>
        <p v-if="desc">{{data.desc}}</p>
        <a @click="desc = !desc">
        <span v-if="!desc">Detay Gör</span>
        <span v-else >Gizle</span>
        </a>
        <span class="line">
            <i @click="itemDelete" class="fa-solid fa-trash"></i>
            <router-link :to="{name:'update', params:{id:data.id}}"><i class="fa-solid fa-pen-to-square"></i></router-link>
            <i v-if="status" @click="toggle" class="fa-solid fa-check-double"></i>
            <i v-else @click="toggle" class="fa-solid fa-x"></i>
        </span>
    </div>
    <span :class="{blur:desc}"></span>
</template>

<script>

export default {
    props : ['data'],
    data(){
        return{
            desc : false,
            uri : 'http://localhost:3004/todo/' + this.data.id , 
            status : this.data.status
        }
    },
    methods : {
        toggle(){
            fetch(this.uri,{
                method : 'PATCH',
                headers : {'Content-type':'application/json'},
                body : JSON.stringify({status:!this.status})
            }).then(()=>{
                this.$emit('dataRestore',this.data.id)
                this.status = !this.status
            }).catch((err)=>console.log(err))
        },
        itemDelete(){
            fetch(this.uri,{method : 'DELETE'})
            .then(()=>this.$emit('itemDeleteStatus', this.data.id))
            .catch((err)=>console.log(err))
        }
    }
}
</script>

<style>

</style>