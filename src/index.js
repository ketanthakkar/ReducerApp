import constant from './constants'
import { skiDay } from './store/reducers'

const state = null;

const action = {
    type: constant.ADD_DAY,
    payload: {
        "resort": "test",
        "date": "2017-06-12",
        "power": false,
        "backcountry": true
    }
}

const nextState = skiDay(state, action);

console.log(`state: ${state}, action: ${JSON.stringify(action)}, new state: ${JSON.stringify(nextState)} `);