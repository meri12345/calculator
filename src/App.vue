<template>
    <div class="container">
        <h2>Calculator</h2>
              <app-display></app-display>
             <app-number v-for="i in nums" :key=i :num=i> </app-number>
             <app-operator v-for="el in operators" :key=el :value=el> </app-operator>
             <p type="button" @click="calculate" class="btn btn-success btn-lg">=</p>
             <p type="button" @click="clear" class="btn btn-success btn-lg">C</p>
   </div>
</template>

<script>
import Number from './components/Number';
import Operator from './components/Operator';
import Display from './components/Display'
export default{
  data(){
    return{
      nums:[0,1,2,3,4,5,6,7,8,9,'.'],
      operators:['+','-','*','/']
    }
  },
  components:{
    appNumber:Number,
    appOperator:Operator,
    appDisplay:Display
  },
  methods:{
    calculate(){
      this.$store.dispatch('calculateExpr')
    },
    clear(){
      this.$store.dispatch('clearDisplay')
    }
  }
}
</script>

<style scoped>
.container{
  padding:30px;
  width: 55%;

}
</style>