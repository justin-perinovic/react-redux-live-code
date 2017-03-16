import React from 'react';

import NumberDropdown from 'Components/GameInfo/NumberDropdown';


function ColumnCountInput(props) {
    return (
        <div className="inputArea">
            <span>Column Count:</span>
            &nbsp;
            <NumberDropdown onChange={props.onChange} value={props.currentCount} min={3} max={12} />
        </div>
    )
}

ColumnCountInput.defaultProps = {
    currentCount: React.PropTypes.number.isRequired,
    onChange: React.PropTypes.func.isRequired
};


export default ColumnCountInput;