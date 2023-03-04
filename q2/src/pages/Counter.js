import React from "react";
import { useSelector, useDispatch } from "react-redux";

import ProgressBar from "../components/ProgressBar";
import {
    incrementCount,
    decrementCount,
    resetCount,
} from "../redux/actions/countActions";

import "../styles/pages/Counter.css";

const Counter = () => {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();

    return (
        <div className="counter-container">
            <div>
                <h2>Value: {count} %</h2>
                <ProgressBar value={count} />
                <div className="button-group">
                    <button
                        className="button"
                        onClick={() => dispatch(incrementCount())}
                    >
                        Increment + 10%
                    </button>
                    <button
                        className="button"
                        onClick={() => dispatch(decrementCount())}
                    >
                        Decrement - 10%
                    </button>
                    <button
                        className="button"
                        onClick={() => dispatch(resetCount())}
                    >
                        Reset to 0
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Counter;
