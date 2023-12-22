

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
const incrementAction = { type : "INCREMENT"}
const decrementAction = { type : "DECREMENT"}
const resetAction = { type : "RESET"}


incresBtn.addEventListener('click' , ()=>{
    store.dispatch(incrementAction);
    console.log(store.getState());
})
decresBtn.addEventListener('click' , ()=>{
    store.dispatch(decrementAction);
    console.log(store.getState());
})
resetBtn.addEventListener('click' , ()=>{
    store.dispatch(resetAction)
    console.log(store.getState());
})