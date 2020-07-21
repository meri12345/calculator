import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store= new Vuex.Store({

    state:{
        mathExpression:'0',
        operator:[],
        temp:0
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
            state.operator.push(String(operator));
    
        },
        'CALCULATE_EXPR':(state)=>{
            
                console.log("simple")
                const [op1,op2] = state.mathExpression.split(state.operator[0])
            switch (state.operator[0]) {
                case '+':
                  state.mathExpression=Number(op1)+Number(op2);
                  state.operator=[];
                  break;
                case '-':
                    state.mathExpression=Number(op1)-Number(op2);
                     state.operator=[];
                  break;
                case '*':
                    state.mathExpression=Number(op1)*Number(op2); 
                    state.operator=[];
                    break;
                case '/':
                    state.mathExpression=Number(op1)/Number(op2);
                    state.operator=[];
                    break;
              }
            
            
        },

        'COMPLEX':(state)=>{
            const calc = (operand1,op,operand2) =>{
                switch (op) {
                    case '+':
                      state.temp = Number(operand1)+Number(operand2);
                      break;
                    case '-':
                        state.temp = Number(operand1)-Number(operand2);
                      break;
                    case '*':
                        state.temp = Number(operand1)*Number(operand2); 
                        break;
                    case '/':
                        state.temp = Number(operand1)/Number(operand2);
                        break;
                  }
            }
            const op1 = state.operator[0];
            const op2 = state.operator[1];
           const index1 = state.mathExpression.indexOf(op1);
           const operand1 = state.mathExpression.split("").slice(0,index1).join("");
           const expr = state.mathExpression.split("").slice(index1+1).join("")
           const [operand2,operand3] = expr.split(state.operator[1]);
           if(op1=='/'|| op1=="*"){
            calc(operand1,op1,operand2);
            calc(state.temp,op2,operand3);
           }
           else if(op1=="+"||op1=="-"){
               if(op2=="+"||op2=="-"){
                calc(operand1,op1,operand2);
                calc(state.temp,op2,operand3);
               }
               else{
                   calc(operand2,op2,operand3);
                   calc(state.temp,op1,operand1);
               }
           }
           
            state.mathExpression=state.temp;
        },

        'CLEAR_DISPLAY':(state)=>{
            state.mathExpression='0';
            state.operator=[];
        }
    },
    actions:{
        addNumber:({commit},num)=>{
            commit('ADD_NUMBER',num)
        },
        addOperator:({commit},operator)=>{
            commit('ADD_OPERATOR',operator)
        },
        calculateExpr:({state,commit})=>{
            if(state.operator.length==1){
                commit('CALCULATE_EXPR')
            }
            else{
                commit('COMPLEX')
            }
            
        },
        clearDisplay:({commit})=>{
            commit('CLEAR_DISPLAY')
        }
    }

    });
