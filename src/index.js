import constant from './constants'
import { allSkiDays } from './store/reducers'

const state = [
    {
        "resort": "test",
        "date": "2017-06-06",
        "powder": false,
        "backcountry": true
    },
    {
        "resort": "new test",
        "date": "2017-06-07",
        "powder": false,
        "backcountry": false
    }
];

const action = {
    type: constant.REMOVE_DAY,
    payload: "2017-06-06"
}

const nextState = allSkiDays(state, action);

console.log(`state: ${JSON.stringify(state)}, action: ${JSON.stringify(action)}, new state: ${JSON.stringify(nextState)} `);