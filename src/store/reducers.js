import constant from '../constants'

//Goal Reducer
export const goal = (state=10, action) => 
    (action.type === constant.SET_GOAL) ? parseInt(action.payload) :state;

// Skiday Reducer
export const skiDay = (state=null, action) => 
    (action.type === constant.ADD_DAY) ? action.payload : state;

// Errors Reducer
export const errors = (state=[], action) => {
    switch(action.type) {
        
        case constant.ADD_ERROR:
            return [...state, action.payload]

        case constant.CLEAR_ERROR :
            return state.filter((message, i) => i !== action.payload)

        default:
            return state
    }
}

// AddDRemoveDay Reducer
export const allSkiDays = (state=[], action) => {

    switch(action.type) {

        case constant.ADD_DAY : 
            const hasDay = state.some(skiDay => skiDay.date === action.payload.date)
        
            return (hasDay) ?
                state :
                [
                    ...state, skiDay(null, action)
                ]

        case constant.REMOVE_DAY : 

        return state.filter(skiDay => skiDay.date != action.payload) 

        default: return state
    }

}