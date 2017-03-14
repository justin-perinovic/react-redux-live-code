import React from 'react';

import NumberDropdown from 'Components/GameInfo/NumberDropdown';


function ColumnCountInput(props) {
    return (
        <div className="inputArea">
            <span>Column Count:</span>
            &nbsp;
            <NumberDropdown defaultValue={props.currentCount} min={6} max={12} />
        </div>
    )
}

ColumnCountInput.defaultProps = {
    currentCount: React.PropTypes.number.isRequired
};


export default ColumnCountInput;