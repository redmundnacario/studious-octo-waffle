export const INCREMENT_COUNT = "INCREMENT_COUNT";
export const DECREMENT_COUNT = "DECREMENT_COUNT";
export const RESET_COUNT = "RESET_COUNT";

export const incrementCount = () => ({
    type: INCREMENT_COUNT,
});

export const decrementCount = () => ({
    type: DECREMENT_COUNT,
});

export const resetCount = () => ({
    type: RESET_COUNT,
});
