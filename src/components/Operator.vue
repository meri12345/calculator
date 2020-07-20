<template>
       <p type="button" @click="addOperator" class="btn btn-primary btn-lg">{{value}}</p>
</template>

<script>
export default {
    props:['value'],
    methods:{
        addOperator(){
            this.$store.dispatch('addOperator',this.value)
        }
    }
}
</script>

<style scoped>

</style>