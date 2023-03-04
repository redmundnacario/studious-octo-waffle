import React from "react";

import "../styles/components/ProgressBar.css";

const ProgressBar = ({ value }) => {
    return (
        <div className="progress-bar">
            <div
                className="progress-value"
                style={{
                    width: `${value}%`,
                }}
            ></div>
        </div>
    );
};

export default ProgressBar;
