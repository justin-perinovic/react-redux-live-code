import React from 'react';

import NumberDropdown from 'Components/GameInfo/NumberDropdown';


function RowCountInput(props) {
    return (
        <div className="inputArea">
            <span>Row Count:</span>
            &nbsp;
            <NumberDropdown defaultValue={props.currentCount} min={6} max={12} />
        </div>
    )
}

RowCountInput.defaultProps = {
    currentCount: React.PropTypes.number.isRequired
};


export default RowCountInput;