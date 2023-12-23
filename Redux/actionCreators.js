import { incrementAction , decrementAction , resetAction } from "./actionTypes.js";

export const incActionCreator = ()=>{
    return { type : incrementAction}
}
export const decActionCreator = ()=>{
    return { type : decrementAction}
}
export const resetActionCreator = ()=>{
    return { type : resetAction}
}