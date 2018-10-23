import constant from '../constants'

//Goal Reducer
export const goal = (state=10, action) => 
    (action.type === constant.SET_GOAL) ? parseInt(action.payload) :state;

// Skiday Reducer
export const skiDay = (state=null, action) => 
    (action.type === constant.ADD_DAY) ? action.payload : state;