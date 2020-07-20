<template>
    <div class="show">
          <p class="text-right">{{getExpression}}</p>
        </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    computed: 
    {
        getExpression(){
            return this.$store.getters.getExpression
        }
    }
}
</script>

<style scoped>
.show{
  border: 1px solid #eee;
  box-shadow: 2px 2px 4px grey;
  height: 100px;
  border-radius: 5%;
}
.text-right{
    font-size: 40px;
}
</style>