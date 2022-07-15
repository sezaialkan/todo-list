<template>
    <nav>
        <router-link :to="{name:'home'}">Ana Sayfa</router-link>
        <router-link :to="{name:'create'}">Oluştur</router-link>
    </nav>
</template>

<script>
export default {
    name : 'NavBar',
}
</script>

<style>

</style>