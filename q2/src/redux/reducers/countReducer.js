import {
    INCREMENT_COUNT,
    DECREMENT_COUNT,
    RESET_COUNT,
} from "../actions/countActions";

const initialState = 0;

export const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_COUNT: {
            const newState = state + 10;
            return newState > 100 ? 100 : newState;
        }
        case DECREMENT_COUNT: {
            const newState = state - 10;
            return newState < 0 ? 0 : newState;
        }
        case RESET_COUNT: {
            return 0;
        }

        default:
            return state;
    }
};
