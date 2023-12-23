import { incActionCreator , decActionCreator , resetActionCreator } from "./Redux/actionCreators.js";
import { incrementAction , decrementAction , resetAction } from "./Redux/actionTypes.js";

const incresBtn = document.getElementById('increse-button');
const decresBtn = document.getElementById('decrese-button');
const resetBtn = document.getElementById('reset-button');
const result = document.querySelector('.result');

//reduser
const counterReducer = (state = 0 , action) =>{
    switch (action.type) {
        case incrementAction: {
            return state +1
        }
        case decrementAction : {
            return state -1
        }
        case resetAction : {
            return state = 0
        }
            break;
    
        default: {
            return state
        }
            break;
    }
}

//create store
const store = Redux.createStore(counterReducer)



incresBtn.addEventListener('click' , ()=>{
    store.dispatch(incActionCreator())
})
decresBtn.addEventListener('click' , ()=>{
    store.dispatch(decActionCreator());
})
resetBtn.addEventListener('click' , ()=>{
    store.dispatch(resetActionCreator());
})

const renderUI = ()=>{
    result.innerHTML = store.getState()
}
renderUI();

store.subscribe(renderUI);