<template>
       <p type="button" @click="addNumber" class="btn btn-secondary btn-lg">{{num}}</p>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    props:['num'],
    methods:{
        addNumber(){
            this.$store.dispatch('addNumber',this.num)
        }
    }
}
</script>

<style scoped>
</style>