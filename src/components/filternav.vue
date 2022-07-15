<template>
  <nav>
    <a @click="filterUpdate('all')" :class="{active:activeTab === 'all'}" >Hepsi</a>
    <a @click="filterUpdate('ok')" :class="{active:activeTab === 'ok'}">Tamamlananlar</a>
    <a @click="filterUpdate('no')" :class="{active:activeTab === 'no'}">Bekleyenler</a>
  </nav>
</template>

<script>
export default {
    props : ['activeTab'],
    methods : {
        filterUpdate(status){
            this.$emit('filterUpdate', status)
        }
    }
}
</script>

<style>

</style>