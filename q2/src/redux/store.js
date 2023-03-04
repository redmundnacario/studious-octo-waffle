import { configureStore } from "@reduxjs/toolkit";

import { countReducer } from "./reducers/countReducer";

export const store = configureStore({
    reducer: {
        count: countReducer,
    },
});
