import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store= new Vuex.Store({

    state:{
        mathExpression:'0',
        operator:''
    },
    getters:{
        getExpression(state){
            return state.mathExpression;
        }
    },
    mutations:{
        'ADD_NUMBER':(state,num)=>{
            if(state.mathExpression==='0'){
                state.mathExpression=String(num)
            }
            else{
             state.mathExpression+=String(num);
            }
            
        },
        'ADD_OPERATOR':(state,operator)=>{
            state.mathExpression+=operator;
            state.operator=String(operator)
    
        },
        'CALCULATE_EXPR':(state)=>{
            const [op1,op2] = state.mathExpression.split(state.operator)
            switch (state.operator) {
                case '+':
                  state.mathExpression=Number(op1)+Number(op2)
                  break;
                case '-':
                    state.mathExpression=Number(op1)-Number(op2)
                  break;
                case '*':
                    state.mathExpression=Number(op1)*Number(op2)
                    break;
                case '/':
                    state.mathExpression=Number(op1)/Number(op2)
                    break;
              }
        },
        'CLEAR_DISPLAY':(state)=>{
            state.mathExpression='0';
            state.operator='';
        }
    },
    actions:{
        addNumber:({commit},num)=>{
            commit('ADD_NUMBER',num)
        },
        addOperator:({commit},operator)=>{
            commit('ADD_OPERATOR',operator)
        },
        calculateExpr:({commit})=>{
            commit('CALCULATE_EXPR')
        },
        clearDisplay:({commit})=>{
            commit('CLEAR_DISPLAY')
        }
    }

    });
