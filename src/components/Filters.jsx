import React from "react";

export const MemoizedFilter = React.memo(function Filter({ value, active, onChange, id }) {
    return(
        <div className="checkbox">
            <input type="checkbox" className="custom-checkbox" checked={active} data-value={value} onChange={onChange} id={id} />
            <label htmlFor={id} >{value}</label>
        </div>
    )
});
