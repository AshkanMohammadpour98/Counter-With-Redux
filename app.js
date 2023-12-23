import { incActionCreator , decActionCreator , resetActionCreator } from "./Redux/actionCreators.js";

const incresBtn = document.getElementById('increse-button');
const decresBtn = document.getElementById('decrese-button');
const resetBtn = document.getElementById('reset-button');
const result = document.querySelector('.result');

//reduser
// const counterReducer = (state = 0 , action)=>{
//     if (action.type === 'INCREMENT') {
//         return state + 1;
//     }
//     else if (action.type === 'DECREMENT'){
//         return state - 1;
//     }
//     else if (action.type === 'RESET'){
//         return state = 0;
//     }
//     else {
//         return state
//     }
// }

const counterReducer = (state = 0 , action) =>{
    switch (action.type) {
        case "INCREMENT": {
            return state +1
        }
        case "DECREMENT" : {
            return state -1
        }
        case "RESET" : {
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

//actions
// const incrementAction = { type : "INCREMENT"}
// const decrementAction = { type : "DECREMENT"}
// const resetAction = { type : "RESET"}


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